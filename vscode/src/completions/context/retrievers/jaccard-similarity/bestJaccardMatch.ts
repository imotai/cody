import winkUtils from 'wink-nlp-utils'

export interface JaccardMatch {
    score: number
    content: string
    startLine: number
    endLine: number
}

/**
 * Finds the window from matchText with the lowest Jaccard distance from targetText.
 * The Jaccard distance is the ratio of intersection over union, using a bag-of-words-with-count as
 * the representation for text snippet.
 * @param targetText is the text that serves as the target we are trying to find a match for
 * @param matchText is the text we are sliding our window through to find the best match
 * @param windowSize is the size of the match window in number of lines
 */
export function bestJaccardMatch(
    targetText: string,
    matchText: string,
    windowSize: number
): JaccardMatch | null {
    const wordCount = (words: Map<string, number>): number => {
        let count = 0
        for (const v of words.values()) {
            count += v
        }
        return count
    }
    // Subtract the subtrahend bag of words from minuend and return the net change in word count
    const subtract = (minuend: Map<string, number>, subtrahend: Map<string, number>): number => {
        let decrease = 0 // will be non-positive
        for (const [word, count] of subtrahend) {
            const currentCount = minuend.get(word) || 0
            const newCount = Math.max(0, currentCount - count)
            minuend.set(word, newCount)
            decrease += newCount - currentCount
        }
        return decrease
    }
    // Add incorporates a new line into window and intersection, updating each, and returns the net
    // increase in size for each
    const add = (
        target: Map<string, number>,
        window: Map<string, number>,
        intersection: Map<string, number>,
        newLine: Map<string, number>
    ): { windowIncrease: number; intersectionIncrease: number } => {
        let windowIncrease = 0
        let intersectionIncrease = 0
        for (const [word, count] of newLine) {
            windowIncrease += count
            window.set(word, (window.get(word) || 0) + count)

            const targetCount = target.get(word) || 0
            if (targetCount > 0) {
                const intersectionCount = intersection.get(word) || 0
                const newIntersectionCount = Math.min(count + intersectionCount, targetCount)
                intersection.set(word, newIntersectionCount)
                intersectionIncrease += newIntersectionCount - intersectionCount
            }
        }
        return { windowIncrease, intersectionIncrease }
    }

    // Get the bag-of-words-count dictionary for the target text
    const targetWords = getWords(targetText)
    const targetCount = wordCount(targetWords)

    // Split the matchText into lines
    const lines = matchText.split('\n')
    const wordsForEachLine = lines.map(line => getWords(line))

    // Initialize the bag of words for the topmost window
    const windowWords = new Map<string, number>()
    for (let i = 0; i < Math.min(windowSize, lines.length); i++) {
        for (const [wordInThisLine, wordInThisLineCount] of wordsForEachLine[i].entries()) {
            windowWords.set(wordInThisLine, (windowWords.get(wordInThisLine) || 0) + wordInThisLineCount)
        }
    }

    let windowCount = wordCount(windowWords)
    // Initialize the bag of words for the intersection of the match window and targetText
    const bothWords = new Map<string, number>()
    for (const [word, wordCount] of targetWords.entries()) {
        bothWords.set(word, Math.min(wordCount, windowWords.get(word) || 0))
    }
    let bothCount = wordCount(bothWords)

    // Slide our window through matchText, keeping track of the best score and window so far
    let bestScore = jaccardDistance(targetCount, windowCount, bothCount)
    let bestWindow = [0, Math.min(windowSize, lines.length)]

    for (let i = 0; i < wordsForEachLine.length - windowSize; i++) {
        // Subtract the words from the line we are scrolling past
        windowCount += subtract(windowWords, wordsForEachLine[i])
        bothCount += subtract(bothWords, wordsForEachLine[i])

        // Add the words from the new line our window just slid over
        const { windowIncrease, intersectionIncrease } = add(
            targetWords,
            windowWords,
            bothWords,
            wordsForEachLine[i + windowSize]
        )
        windowCount += windowIncrease
        bothCount += intersectionIncrease

        // We only do a Jaccard similarity every 5 lines to avoid excessive CPU burn. Since the
        // windows are 50 lines, this should still give good results.
        if (i % 5 === 0) {
            // compute the jaccard distance between our target text and window
            const score = jaccardDistance(targetCount, windowCount, bothCount)
            if (score > bestScore) {
                bestScore = score
                bestWindow = [i + 1, i + windowSize + 1]
            }
        }
    }

    return {
        score: bestScore,
        content: lines.slice(bestWindow[0], bestWindow[1]).join('\n'),
        startLine: bestWindow[0],
        endLine: Math.max(bestWindow[1] - 1, 0),
    }
}

function jaccardDistance(left: number, right: number, intersection: number): number {
    const union = left + right - intersection
    if (union < 0) {
        throw new Error("intersection can't be greater than the sum of left and right")
    }
    if (union === 0) {
        return 0
    }
    return intersection / union
}

export function getWords(s: string): Map<string, number> {
    const frequencyCounter = new Map<string, number>()
    const words = winkUtils.string.tokenize0(s)

    const filteredWords = winkUtils.tokens.removeWords(words)
    const stems = winkUtils.tokens.stem(filteredWords)
    for (const stem of stems) {
        frequencyCounter.set(stem, (frequencyCounter.get(stem) || 0) + 1)
    }
    return frequencyCounter
}
