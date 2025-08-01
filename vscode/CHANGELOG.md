# Changelog

This is a log of all notable changes to Cody for VS Code.

<!--- {/_ CHANGELOG_START _/} -->

## 1.116.0

### Chore

#### Ci

- resolve issue with artifacts naming [#8195](https://github.com/sourcegraph/cody/pull/8195)

#### Cody

- update marketplace listing readme [#8214](https://github.com/sourcegraph/cody/pull/8214)

### Refactor

#### Search

- remove search mode [#8053](https://github.com/sourcegraph/cody/pull/8053)

### Reverts

  There were no reverts for this release

### Uncategorized

#### Others

- Fix sign-off logic, re-enable auth tests [#8201](https://github.com/sourcegraph/cody/pull/8201)
- Update vscode package version [#8197](https://github.com/sourcegraph/cody/pull/8197)
- Unblock main fix unit tests [#8194](https://github.com/sourcegraph/cody/pull/8194)
- Changelog for 1.114.0 [#8193](https://github.com/sourcegraph/cody/pull/8193)
- Chore: add deprecation notice to README [#8191](https://github.com/sourcegraph/cody/pull/8191)
- Fix NPE exception reported by Sentry [#8188](https://github.com/sourcegraph/cody/pull/8188)
- Update gradle toolchains resolver [#8186](https://github.com/sourcegraph/cody/pull/8186)
- Add setting for enabling/disabling cody chat syntax highlighting [#8185](https://github.com/sourcegraph/cody/pull/8185)
- Improve markdown component caching [#8183](https://github.com/sourcegraph/cody/pull/8183)
- Remove redundant rename/delete workspace ops [#8181](https://github.com/sourcegraph/cody/pull/8181)
- Fix empty files when saving code snippets from chat [#8180](https://github.com/sourcegraph/cody/pull/8180)
- Fix auth form validation [#8178](https://github.com/sourcegraph/cody/pull/8178)

## 1.114.0

### Fix

#### Chat

- issue where the "Skip to end" button remains when switching to a new chat window [#8172](https://github.com/sourcegraph/cody/pull/8172)

#### Notices

- correctly inform the cancelled free user of lack of access to Cody [#8176](https://github.com/sourcegraph/cody/pull/8176)

### Reverts

  There were no reverts for this release

### Uncategorized

#### Others

- Fix auth form validation [#8178](https://github.com/sourcegraph/cody/pull/8178)
- Changelog for 1.112.0 [#8175](https://github.com/sourcegraph/cody/pull/8175)
- Limit access for PG & ES [#8174](https://github.com/sourcegraph/cody/pull/8174)
- Change(symf): introduced SymfRetrievalDisabled flag to disable symf retrieval [#8173](https://github.com/sourcegraph/cody/pull/8173)
- Chore: remove some unused exports [#8171](https://github.com/sourcegraph/cody/pull/8171)
- Change(smart-apply): allow apply for shell languages not just execute action [#8168](https://github.com/sourcegraph/cody/pull/8168)
- Changelog for 1.110.0 [#8164](https://github.com/sourcegraph/cody/pull/8164)
- Chore: add an option to block network requests to server [#8151](https://github.com/sourcegraph/cody/pull/8151)


## 1.112.0

### Features

#### Chat-Mention

- Support multi-root workspaces in initial context [#8154](https://github.com/sourcegraph/cody/pull/8154)

### Fix

- Limit access for PG & ES [#8174](https://github.com/sourcegraph/cody/pull/8174)

#### Chat

- issue where the "Skip to end" button remains when switching to a new chat window [#8172](https://github.com/sourcegraph/cody/pull/8172)
- Change(smart-apply): allow apply for shell languages not just execute action [#8168](https://github.com/sourcegraph/cody/pull/8168)

### Chore

- Chore: remove some unused exports [#8171](https://github.com/sourcegraph/cody/pull/8171)
- Chore: add an option to block network requests to server [#8151](https://github.com/sourcegraph/cody/pull/8151)
- Change(symf): introduced SymfRetrievalDisabled flag to disable symf retrieval [#8173](https://github.com/sourcegraph/cody/pull/8173)

## 1.110.0

### Features

#### Notices
- display Cody deprecation message based on site enablement [#8120](https://github.com/sourcegraph/cody/pull/8120)
- Add Cody PLG Sunset Notice [#8095](https://github.com/sourcegraph/cody/pull/8095)

### Fix
- [Backport M110] Bump up Cody Web version to v0.32.12 [#8162](https://github.com/sourcegraph/cody/pull/8162)
- [Backport M110] Fix a crash on auto-edit popup disposal [#8159](https://github.com/sourcegraph/cody/pull/8159)
- Fix auto-edit enrolment issue caused by config propagation bug [#8140](https://github.com/sourcegraph/cody/pull/8140)
- Fix error when adding multiple repositories with at-mention in chat [#8135](https://github.com/sourcegraph/cody/pull/8135)
- Remove redundant comments [#8130](https://github.com/sourcegraph/cody/pull/8130)
- Fix threading issues from Cody Console [#8104](https://github.com/sourcegraph/cody/pull/8104)
- Fix threading issue with Cody Console [#8102](https://github.com/sourcegraph/cody/pull/8102)
- Fix multiple cody.characters:flush events firing at odd intervals [#8100](https://github.com/sourcegraph/cody/pull/8100)


#### Auth
- only update auth status in agent context [#8124](https://github.com/sourcegraph/cody/pull/8124)
- restore accidentally removed URI handler for authentication callbacks [#8114](https://github.com/sourcegraph/cody/pull/8114)

#### Auto-Edit
- Ensure hot streak is disabled in Agent mode [#8143](https://github.com/sourcegraph/cody/pull/8143)
- Disable auto-edits for JB Remote IDE [#8103](https://github.com/sourcegraph/cody/pull/8103)

#### Autocomplete
- Fix API version parameter for autocomplete code completion requests [#8139](https://github.com/sourcegraph/cody/pull/8139)

#### Chat
- phantom scrolling when typing in mention menu [#8127](https://github.com/sourcegraph/cody/pull/8127)

#### Editor
- reading of ignore file entries that contain commas instead of periods [#8125](https://github.com/sourcegraph/cody/pull/8125)

#### Mentions
- deduplicate files from overlapping workspace folders [#8128](https://github.com/sourcegraph/cody/pull/8128)

### Chore
- Improve autoedit onboarding message [#8137](https://github.com/sourcegraph/cody/pull/8137)
- Pass client name version headers with completions request [#8105](https://github.com/sourcegraph/cody/pull/8105)
- Add a test for `extensionConfiguration/didUpdate` [#8093](https://github.com/sourcegraph/cody/pull/8093)
- Improve Cody release notes generation [#8068](https://github.com/sourcegraph/cody/pull/8068)

#### Agent
- bump release version to 5.5.22 [#8161](https://github.com/sourcegraph/cody/pull/8161)


## 1.108.0

### Fix

#### Auth

- restore accidentally removed URI handler for authentication callbacks [#8115](https://github.com/sourcegraph/cody/pull/8115)

#### Auto-Edit

- Ensure hot streak is disabled in Agent mode [#8145](https://github.com/sourcegraph/cody/pull/8145)

#### Autocomplete

- Fix API version parameter for autocomplete code completion requests [#8146](https://github.com/sourcegraph/cody/pull/8146)
- Fix auto-edit enrolment issue caused by config propagation bug [#8147](https://github.com/sourcegraph/cody/pull/8147)
- Pass client name version headers with completions request [#8107](https://github.com/sourcegraph/cody/pull/8107)
- Enrol to auto-edit for all clients [#8080](https://github.com/sourcegraph/cody/pull/8080)

#### Chat

- Handle string and undefined error messages in RequestErrorItem [#8084](https://github.com/sourcegraph/cody/pull/8084)
- bring back chat scrollbar [#8083](https://github.com/sourcegraph/cody/pull/8083)
- Add Cody PLG Sunset Notice [#8106](https://github.com/sourcegraph/cody/pull/8106)

#### Smart-Apply

- now applies changes to file that have parents that duplicate workspace name [#8082](https://github.com/sourcegraph/cody/pull/8082)

### Reverts

- Revert "feat(context filter): Implement exclude patterns from workspace settings [#-1](https://github.com/sourcegraph/cody/pull/8037)

## 1.106.2

### Fix

#### Auth

- restore accidentally removed URI handler for authentication callbacks [#8114](https://github.com/sourcegraph/cody/pull/8114)

## 1.106.1

### Feat

#### Chat

- Add Cody PLG Sunset Notice [#8095](https://github.com/sourcegraph/cody/pull/8095)

## 1.106.0

### Features

#### Chat

- Allow renaming of chat history items [#8046](https://github.com/sourcegraph/cody/pull/8046)
- Show both file and selection mentions in Cody Web chat [#7941](https://github.com/sourcegraph/cody/pull/7941)
- New capability to hide all action buttons except 'Copy Code' [#8072](https://github.com/sourcegraph/cody/pull/8072)

#### Auto-edit

- Do enroll to auto-edit for all clients [#8080](https://github.com/sourcegraph/cody/pull/8080)

### Fix

#### Chat

- Handle string and undefined error messages in RequestErrorItem [#8084](https://github.com/sourcegraph/cody/pull/8084)
- bring back chat scrollbar [#8083](https://github.com/sourcegraph/cody/pull/8083)
- resolve DeepCody terminal tool capability awareness issue [#8066](https://github.com/sourcegraph/cody/pull/8066)
- edit code range selection issue when selection is empty [#8058](https://github.com/sourcegraph/cody/pull/8058)
- Update the storage warning banner message [#8056](https://github.com/sourcegraph/cody/pull/8056)
- Do not copy code to clipboard on the EDT thread [#8085](https://github.com/sourcegraph/cody/pull/8085)
- remove OTEL metrics [#8069](https://github.com/sourcegraph/cody/pull/8069)
- Redesign chat layout for improved text selection experience [#8044](https://github.com/sourcegraph/cody/pull/8044)
- Do not add messages to the Cody Console on the EDT [#8063](https://github.com/sourcegraph/cody/pull/8063)
- Do not use blocking operations in write actions [#8062](https://github.com/sourcegraph/cody/pull/8062)

#### Auto-edit

- Fix auto-edit's caching issues [#8045](https://github.com/sourcegraph/cody/pull/8045)
- Fix disposal of autocompletion suggestions on Escape key press [#8071](https://github.com/sourcegraph/cody/pull/8071)

#### Smart-Apply

- now applies changes to file that have parents that duplicate workspace name [#8082](https://github.com/sourcegraph/cody/pull/8082)

### Chore

#### Cody

- update readme [#8096](https://github.com/sourcegraph/cody/pull/8096)
- Add CLI workflow for Cody release captains [#8078](https://github.com/sourcegraph/cody/pull/8078)
- Do not stringify strings in configuration update payload [#8079](https://github.com/sourcegraph/cody/pull/8079)
- Do not hide lookups [#8073](https://github.com/sourcegraph/cody/pull/8073)
- Remove billing metadata from `customTitle` event [#8050](https://github.com/sourcegraph/cody/pull/8050)

### Reverts

- Revert "feat(context filter): Implement exclude patterns from workspace settings [#-1](https://github.com/sourcegraph/cody/pull/8037)

## 1.104.0

### Features

#### Chat

- Add scrollbar markers for human messages navigation [#8036](https://github.com/sourcegraph/cody/pull/8036)
- storage size check and chat history cleanup [#7958](https://github.com/sourcegraph/cody/pull/7958)

#### Context

- Enable local context for all users [#8038](https://github.com/sourcegraph/cody/pull/8038)

### Fix

#### Chat

- Update the storage warning banner message [#8056](https://github.com/sourcegraph/cody/pull/8056)

#### Others

- remove OTEL metrics [#8070](https://github.com/sourcegraph/cody/pull/8070)

### Chore

#### Chat

- clean up code on large file detection [#8032](https://github.com/sourcegraph/cody/pull/8032)

### Reverts

There were no reverts for this release

### Uncategorized

#### Others

- Changelog for 1.102.0 [#8049](https://github.com/sourcegraph/cody/pull/8049)
- Changelog for 1.102 [#8047](https://github.com/sourcegraph/cody/pull/8047)
- Improve logic for applying auto-edits [#8043](https://github.com/sourcegraph/cody/pull/8043)
- Remove unneeded extension settings [#8042](https://github.com/sourcegraph/cody/pull/8042)
- Remove workflow [#8041](https://github.com/sourcegraph/cody/pull/8041)
- Add workflow to verify ANTHROPIC_KEY format [#8040](https://github.com/sourcegraph/cody/pull/8040)
- Feat(context filter): Implement exclude patterns from workspace settings [#8037](https://github.com/sourcegraph/cody/pull/8037)
- Fix autocomplete and code lenses issues on file renamed/moved operations [#7325](https://github.com/sourcegraph/cody/pull/7325)

## 1.102.0

### Reverts

There were no reverts for this release

### Uncategorized

#### Others

- [Backport M102] Changelog for 1.102 [#8048](https://github.com/sourcegraph/cody/pull/8048)

## 1.102

### Features

#### Chat

- optional data display [#8015](https://github.com/sourcegraph/cody/pull/8015)

#### Cody

- migrate feature flags evaluation to new batch api [#8006](https://github.com/sourcegraph/cody/pull/8006)

### Fix

#### Chat

- chat transcript scrolling [#8020](https://github.com/sourcegraph/cody/pull/8020)

#### Cody

- allow users to add large files [#8016](https://github.com/sourcegraph/cody/pull/8016)

### Chore

#### Chat

- clean up code on large file detection [#8032](https://github.com/sourcegraph/cody/pull/8032)
- refactor parse.ts [#8029](https://github.com/sourcegraph/cody/pull/8029)

#### Test

- Skip flaky auth test on Ubuntu [#7997](https://github.com/sourcegraph/cody/pull/7997)

### Refactor

#### Chat

- agentic context toolbox settings [#8009](https://github.com/sourcegraph/cody/pull/8009)

### Reverts

There were no reverts for this release

### Uncategorized

#### Others

- Changelog for 1.100.0 [#8033](https://github.com/sourcegraph/cody/pull/8033)
- Changelog for 1.98.1 [#8025](https://github.com/sourcegraph/cody/pull/8025)
- Unify inline edit architecture in VSC and other clients [#8023](https://github.com/sourcegraph/cody/pull/8023)
- Split edit code between flow/model and UI (QuickPick) [#8013](https://github.com/sourcegraph/cody/pull/8013)
- Remove duplicated parsed text as content [#8011](https://github.com/sourcegraph/cody/pull/8011)
- Update `untilBuild` to `252.*` [#8010](https://github.com/sourcegraph/cody/pull/8010)
- Chore: update model options from 3.5 Sonnet to Sonnet 4 [#7999](https://github.com/sourcegraph/cody/pull/7999)
- Restoration of unit test generation, path normalization [#7765](https://github.com/sourcegraph/cody/pull/7765)

## 1.100.0

### Features

#### Chat

- optional data display [#8015](https://github.com/sourcegraph/cody/pull/8015)
- add `cody.chat.agenticContext` configuration option [#7983](https://github.com/sourcegraph/cody/pull/7983)

#### Cody

- migrate feature flags evaluation to new batch api [#8006](https://github.com/sourcegraph/cody/pull/8006)
- Do not trigger autocompletion on Delete [#7990](https://github.com/sourcegraph/cody/pull/7990)

### Fix

#### Chat

- chat transcript scrolling [#8020](https://github.com/sourcegraph/cody/pull/8020)
- show empty chat history message if deleting all messages during filtering [#7995](https://github.com/sourcegraph/cody/pull/7995)
- Hide MCP settings upon switching to account which does not support MCP [#7993](https://github.com/sourcegraph/cody/pull/7993)

#### Cody

- allow users to add large files [#8016](https://github.com/sourcegraph/cody/pull/8016)
- Fix History tab styling across IDE themes [#8001](https://github.com/sourcegraph/cody/pull/8001)
- Fix missing LLM icon in Edit Code's dropdown [#7996](https://github.com/sourcegraph/cody/pull/7996)
- Refresh Cody window on display configuration change [#7980](https://github.com/sourcegraph/cody/pull/7980)

### Chore

#### Cody

- Unify inline edit architecture in VSC and other clients [#8023](https://github.com/sourcegraph/cody/pull/8023)
- Update VerifyJavaBootRuntimeVersion.kt [#7986](https://github.com/sourcegraph/cody/pull/7986)

#### Chat

- refactor parse.ts [#8029](https://github.com/sourcegraph/cody/pull/8029)
- update model options from 3.5 Sonnet to Sonnet 4 [#7999](https://github.com/sourcegraph/cody/pull/7999)

#### Test

- Skip flaky auth test on Ubuntu [#7997](https://github.com/sourcegraph/cody/pull/7997)

### Refactor

#### Chat

- agentic context toolbox settings [#8009](https://github.com/sourcegraph/cody/pull/8009)
- Improve prompt sanitization [#7981](https://github.com/sourcegraph/cody/pull/7981)

### Uncategorized

#### Others

- Split edit code between flow/model and UI (QuickPick) [#8013](https://github.com/sourcegraph/cody/pull/8013)
- Remove duplicated parsed text as content [#8011](https://github.com/sourcegraph/cody/pull/8011)
- Add automatic JCEF runtime selection [#7976](https://github.com/sourcegraph/cody/pull/7976)
- Cancel completion request on BGT (instead of AWT) [#7969](https://github.com/sourcegraph/cody/pull/7969)
- Restoration of unit test generation, path normalization [#7765](https://github.com/sourcegraph/cody/pull/7765)

## 1.98.1

### Fix

#### Chat

- chat transcript scrolling [#8021](https://github.com/sourcegraph/cody/pull/8021)

### Reverts

There were no reverts for this release

### Uncategorized

#### Others

- Changelog for 1.98.0 [#8005](https://github.com/sourcegraph/cody/pull/8005)

## 1.98.0

### Features

#### Chat

- Agentic chat enabled by default with new `cody.chat.agenticContext` configuration option [#7998](https://github.com/sourcegraph/cody/pull/7998)
- make last editor sticky [#7961](https://github.com/sourcegraph/cody/pull/7961)

### Fix

- Do not trigger autocompletion on Delete [#7991](https://github.com/sourcegraph/cody/pull/7991)
- Refresh Cody window on display configuration change [#7987](https://github.com/sourcegraph/cody/pull/7987)
- Fix missing JCEF panel [#7968](https://github.com/sourcegraph/cody/pull/7968)
- Add settings for custom node process args and env variables [#7963](https://github.com/sourcegraph/cody/pull/7963)
- Add config.condebase check to repoNameResolver [#7944](https://github.com/sourcegraph/cody/pull/7944)
- Do not throw exceptions from unimplemented protocol methods [#7929](https://github.com/sourcegraph/cody/pull/7929)

#### Autoedit

- Disable hot streak experimental model in agent [#7962](https://github.com/sourcegraph/cody/pull/7962)
- Autoedit: Add filter on the big diff modifications [#7970](https://github.com/sourcegraph/cody/pull/7970)

#### Chat

- center empty history tab [#7965](https://github.com/sourcegraph/cody/pull/7965)
- only run saveSession after LLM response [#7952](https://github.com/sourcegraph/cody/pull/7952)
- show toolbar even when only one model is available [#7936](https://github.com/sourcegraph/cody/pull/7936)

#### Cody-Web

- display thinking tags for reasoning models [#7942](https://github.com/sourcegraph/cody/pull/7942)

### Chore

#### Chat

- remove rate limiting and enable agentic chat default with flag [#7971](https://github.com/sourcegraph/cody/pull/7971)
- Bump min version for new prompt api [#7943](https://github.com/sourcegraph/cody/pull/7943)
- Replace native file picker with polyfill implementation [#7928](https://github.com/sourcegraph/cody/pull/7928)
- Properly use generated protocol classes [#7922](https://github.com/sourcegraph/cody/pull/7922)

#### Release

- Bump package version and update changelog for M96 [#7973](https://github.com/sourcegraph/cody/pull/7973)
- Changelog for 1.94.2 [#7959](https://github.com/sourcegraph/cody/pull/7959)
- Changelog for 1.94.1 [#7948](https://github.com/sourcegraph/cody/pull/7948)

### Refactor

#### Chat

- add more info to show in history tab [#7966](https://github.com/sourcegraph/cody/pull/7966)
- clear deprecated storage keys and remove chat memory [#7964](https://github.com/sourcegraph/cody/pull/7964)
- update agentic context UI [#7908](https://github.com/sourcegraph/cody/pull/7908)

### Reverts

- Revert: fix(web): Fix agent recreation in Cody Web component to properly respond to config changes [#-1](https://github.com/sourcegraph/cody/pull/7787)

### Uncategorized

#### Others

## 1.96.0

### Fix

- [Backport M96] fix(chat): only run saveSession after LLM response [pull/7955](https://github.com/sourcegraph/cody/pull/7955)
- [Backport M96] Do not throw exceptions from unimplemented protocol methods [pull/7933](https://github.com/sourcegraph/cody/pull/7933)
- Properly use generated protocol classes [pull/7922](https://github.com/sourcegraph/cody/pull/7922)
- fix(chat): prompt hydration in the right editor when using the prompt quickPick option [pull/7902](https://github.com/sourcegraph/cody/pull/7902)
- fix(chat): Hide copy button in non-chat mode [pull/7895](https://github.com/sourcegraph/cody/pull/7895)
- fix(chat): track code paste event [pull/7918](https://github.com/sourcegraph/cody/pull/7918)
- fix(rules): avoid duplicate .sourcegraph paths in rule search [pull/7805](https://github.com/sourcegraph/cody/pull/7805)
- Fix handling of client-side temporary settings in cody_settings.json [pull/7904](https://github.com/sourcegraph/cody/pull/7904)
- Fix issue with duplicated models in the model selection [pull/7905](https://github.com/sourcegraph/cody/pull/7905)
- fix(autocomplete): fix stop reason in the default completions client [pull/7872](https://github.com/sourcegraph/cody/pull/7872)
- fix(analytics): enable characters logger for untitled doc [pull/7873](https://github.com/sourcegraph/cody/pull/7873)
- rm erroneously included tmp file [pull/7903](https://github.com/sourcegraph/cody/pull/7903)
- Fix demo app on safari & remove tiktoken dependency [pull/7887](https://github.com/sourcegraph/cody/pull/7887)

### Features

- refactor(chat): MCP server management and tool state [pull/7915](https://github.com/sourcegraph/cody/pull/7915)
- Enable prompts sort bvy relevance for insider builds [pull/7913](https://github.com/sourcegraph/cody/pull/7913)
- feat(chat): Remove rate limiting and default flag for Deep Cody [pull/7882](https://github.com/sourcegraph/cody/pull/7882)
- feat(chat): move mcp setting btn and add storybook [pull/7901](https://github.com/sourcegraph/cody/pull/7901)
- feat(logging): Add telemetry to code copy events to ensure accuracy of insert rate metric [pull/7897](https://github.com/sourcegraph/cody/pull/7897)
- Added support for Ctrl+C not working in Rider/Windows [pull/7798](https://github.com/sourcegraph/cody/pull/7798)
- feat(autocomplete): better autocomplete support for gpt-4.1-mini [pull/7871](https://github.com/sourcegraph/cody/pull/7871)
- Make TokenCounterUtils implementation environment dependent [pull/7875](https://github.com/sourcegraph/cody/pull/7875)
- add AGENT.md for use with Amp [pull/7891](https://github.com/sourcegraph/cody/pull/7891)

### Chores

- chore(storybook): fixed stories that rendered with errors due to API changes [pull/7848](https://github.com/sourcegraph/cody/pull/7848)
- chore(ci and release): Remove bundle size checks [pull/7916](https://github.com/sourcegraph/cody/pull/7916)
- chore(walkthroughs): remove walkthroughts in favor of linking to quickstart docs [pull/7847](https://github.com/sourcegraph/cody/pull/7847)

### Reverts

- [Backport M96] revert(chat): enable agentic chat based on feature flag and model [pull/7956](https://github.com/sourcegraph/cody/pull/7956)

## 1.94.2

### Fix

#### Chat

- only run saveSession after LLM response [#7954](https://github.com/sourcegraph/cody/pull/7954)

### Revert

#### Chat

- enable agentic chat based on feature flag and model[#7957](https://github.com/sourcegraph/cody/pull/7957)

## 1.94.1

### Fix

#### Prompts

- Bump min version for new prompt api [#7943](https://github.com/sourcegraph/cody/pull/7943)

## 1.94.0

### Features

#### Auto-Edit

- Use prediction/code_to_rewrite feedback button [#7868](https://github.com/sourcegraph/cody/pull/7868)
- Add `readyToBeRendered` state to the analytics logger [#7867](https://github.com/sourcegraph/cody/pull/7867)
- Use a character diff for modified lines when suitable [#7869](https://github.com/sourcegraph/cody/pull/7869)
- Refactor the prompt utils code into separate files [#7857](https://github.com/sourcegraph/cody/pull/7857)

#### Chat

- Open mcp settings in json [#7910](https://github.com/sourcegraph/cody/pull/7910)
- Add copy message button to copy message output [#7807](https://github.com/sourcegraph/cody/pull/7807)
- Use Gemini Flash mode as default [#7831](https://github.com/sourcegraph/cody/pull/7831)
- No error message in input box when there are no changes to commit [#7827](https://github.com/sourcegraph/cody/pull/7827)
- Use agentic chat by default [#7761](https://github.com/sourcegraph/cody/pull/7761)

#### Mcp

- Add tool enable/disable [#7870](https://github.com/sourcegraph/cody/pull/7870)
- Implement MCP server management with UI [#7812](https://github.com/sourcegraph/cody/pull/7812)

#### Prompts

- Display draft notice for prompts in the quick prompts selector [#7844](https://github.com/sourcegraph/cody/pull/7844)

### Fix

#### Auto-Edit

- Only trim hot streak predictions when codeToReplace is missing a final new line [#7889](https://github.com/sourcegraph/cody/pull/7889)
- Fix the view prompt for active editor [#7862](https://github.com/sourcegraph/cody/pull/7862)
- Do not suggest empty line insertions [#7855](https://github.com/sourcegraph/cody/pull/7855)
- Dispose next cursor manager [#7852](https://github.com/sourcegraph/cody/pull/7852)
- Add the prompt in debug panel for hot-streak [#7842](https://github.com/sourcegraph/cody/pull/7842)
- Use correct doc context version to show inline completions more often [#7837](https://github.com/sourcegraph/cody/pull/7837)
- Add common post processing pipeline for prediction from the model [#7851](https://github.com/sourcegraph/cody/pull/7851)
- Adjust the config for long suggestion model [#7850](https://github.com/sourcegraph/cody/pull/7850)

#### Chat

- Add MCP tool schema to tool config prompt [#7911](https://github.com/sourcegraph/cody/pull/7911)
- Allow spaces in mcp server arguments [#7909](https://github.com/sourcegraph/cody/pull/7909)
- Update prompt list UI [#7796](https://github.com/sourcegraph/cody/pull/7796)
- Fix bugs in Range and Position computing [#7858](https://github.com/sourcegraph/cody/pull/7858)

#### Edit-Buttons

- Display of insert and copy buttons on non VSCode clients [#7849](https://github.com/sourcegraph/cody/pull/7849)

#### History Tab

- Improve layout for empty state [#7836](https://github.com/sourcegraph/cody/pull/7836)

#### User Menu

- Show Enterprise Starter for user type instead of Enterprise for ES users [#7846](https://github.com/sourcegraph/cody/pull/7846)
- Add external link icon to upgrade to pro link [#7845](https://github.com/sourcegraph/cody/pull/7845)

### Chore

#### Auto-Edit

- Prepare hot-streak for dogfooding [#7894](https://github.com/sourcegraph/cody/pull/7894)
- Allow custom models for websocket requests [#7791](https://github.com/sourcegraph/cody/pull/7791)
- Consolidate renderers/decorators [#7890](https://github.com/sourcegraph/cody/pull/7890)

### Refactor

#### Chat

- Remove parenthesis wrapping of other files when calling `selectedCodePromptWithExtraFiles` [#7022](https://github.com/sourcegraph/cody/pull/7022)
- Remove Tool Cody model [#7881](https://github.com/sourcegraph/cody/pull/7881)
- Remove duplicate mode icon [#7880](https://github.com/sourcegraph/cody/pull/7880)
- Prompt Picker Improvements [#7861](https://github.com/sourcegraph/cody/pull/7861)

## 1.92.0

### Fix

#### Auto-Edit

- do not suggest empty line insertions [#7866](https://github.com/sourcegraph/cody/pull/7866)
- Fix the view prompt for active editor [#7864](https://github.com/sourcegraph/cody/pull/7864)
- dispose next cursor manager [#7854](https://github.com/sourcegraph/cody/pull/7854)
- use correct doc context version to show inline completions more often [#7840](https://github.com/sourcegraph/cody/pull/7840)
- Add common post processing pipeline for prediction from the model [#7865](https://github.com/sourcegraph/cody/pull/7865)
- Adjust the config for long suggestion model [#7856](https://github.com/sourcegraph/cody/pull/7856)

### Chore

#### Auto-Edit

- allow custom models for websocket requests [#7838](https://github.com/sourcegraph/cody/pull/7838)

## 1.90.0

### Features

#### Auto-Edit

- Add hot-streak model for long suggestion [#7769](https://github.com/sourcegraph/cody/pull/7769)
- Display next cursor suggestions [#7701](https://github.com/sourcegraph/cody/pull/7701)

#### Guardrails

- Regenerate blocks which are detected in Guardrails checks [#7747](https://github.com/sourcegraph/cody/pull/7747)

### Fix

#### Auto-Edit

- model call latency metric did not reflect actual timing [#7783](https://github.com/sourcegraph/cody/pull/7783)

#### Chat

- Chat UI Mode Inconsistency with Edit Intent [#7776](https://github.com/sourcegraph/cody/pull/7776)
- use DeepCodyModelRef instead of id [#7756](https://github.com/sourcegraph/cody/pull/7756)

#### Edit

- Do not widen selections past the end of the document. [#7764](https://github.com/sourcegraph/cody/pull/7764)

#### Search

- handle missing keywords in XML parsing [#7777](https://github.com/sourcegraph/cody/pull/7777)

#### Web

- Fix agent recreation in Cody Web component to properly respond to config changes [#7787](https://github.com/sourcegraph/cody/pull/7787)

### Chore

#### Auto-Edit

- prepare rollout of websocket proxy to s2 users [#7781](https://github.com/sourcegraph/cody/pull/7781)

#### Web

- rename disposeAndCreateNewAgent to createAndSetNewAgent [#7788](https://github.com/sourcegraph/cody/pull/7788)

### Reverts

- Revert "chore: migrate feature flags evaluation to new batch api [#-1](https://github.com/sourcegraph/cody/pull/7380)

### Uncategorized

#### Others

- Changelog for 1.88.0 [#7789](https://github.com/sourcegraph/cody/pull/7789)
- Make sure autocomplete service is working per project [#7785](https://github.com/sourcegraph/cody/pull/7785)
- Handle broken avatar URLs [#7782](https://github.com/sourcegraph/cody/pull/7782)
- Remove unused chat intent queries [#7774](https://github.com/sourcegraph/cody/pull/7774)
- Changelog for 1.86.1 [#7771](https://github.com/sourcegraph/cody/pull/7771)
- Rename displayAgentAutocomplete to displayInlay & clean up [#7751](https://github.com/sourcegraph/cody/pull/7751)
- Fix search results not getting mentioned in follow up chat [#7711](https://github.com/sourcegraph/cody/pull/7711)

## 1.90.0

### Features

#### Auto-Edit

- Add hot-streak model for long suggestion [#7769](https://github.com/sourcegraph/cody/pull/7769)

#### Autoedit

- Display next cursor suggestions [#7701](https://github.com/sourcegraph/cody/pull/7701)

#### Guardrails

- Regenerate blocks which are detected in Guardrails checks [#7747](https://github.com/sourcegraph/cody/pull/7747)

### Fix

#### Auto-Edit

- model call latency metric did not reflect actual timing [#7783](https://github.com/sourcegraph/cody/pull/7783)

#### Chat

- Chat UI Mode Inconsistency with Edit Intent [#7776](https://github.com/sourcegraph/cody/pull/7776)
- use DeepCodyModelRef instead of id [#7756](https://github.com/sourcegraph/cody/pull/7756)

#### Edit

- Do not widen selections past the end of the document. [#7764](https://github.com/sourcegraph/cody/pull/7764)

#### Search

- handle missing keywords in XML parsing [#7777](https://github.com/sourcegraph/cody/pull/7777)

#### Web

- Fix agent recreation in Cody Web component to properly respond to config changes [#7787](https://github.com/sourcegraph/cody/pull/7787)

### Chore

#### Auto-Edit

- prepare rollout of websocket proxy to s2 users [#7781](https://github.com/sourcegraph/cody/pull/7781)

#### Web

- rename disposeAndCreateNewAgent to createAndSetNewAgent [#7788](https://github.com/sourcegraph/cody/pull/7788)

### Reverts

- Revert "chore: migrate feature flags evaluation to new batch api [#-1](https://github.com/sourcegraph/cody/pull/7380)

### Uncategorized

#### Others

- Changelog for 1.88.0 [#7789](https://github.com/sourcegraph/cody/pull/7789)
- Make sure autocomplete service is working per project [#7785](https://github.com/sourcegraph/cody/pull/7785)
- Handle broken avatar URLs [#7782](https://github.com/sourcegraph/cody/pull/7782)
- Remove unused chat intent queries [#7774](https://github.com/sourcegraph/cody/pull/7774)
- Changelog for 1.86.1 [#7771](https://github.com/sourcegraph/cody/pull/7771)
- Rename displayAgentAutocomplete to displayInlay & clean up [#7751](https://github.com/sourcegraph/cody/pull/7751)
- Fix search results not getting mentioned in follow up chat [#7711](https://github.com/sourcegraph/cody/pull/7711)

## 1.88.0

### Features

#### Guardrails

- Regenerate blocks which are detected in Guardrails checks [#7747](https://github.com/sourcegraph/cody/pull/7747)

### Fix

#### Auto-Edit

- Add hot-streak model for long suggestion [#7779](https://github.com/sourcegraph/cody/pull/7779)

### Reverts

- Revert "chore: migrate feature flags evaluation to new batch api [#-1](https://github.com/sourcegraph/cody/pull/7380)

## 1.86.1

### Reverts

- Revert "chore: migrate feature flags evaluation to new batch api [#-1](https://github.com/sourcegraph/cody/pull/7380)

## 1.86.0

### Features

#### Agent

- Manually cleanup listeners from the socket [#7669](https://github.com/sourcegraph/cody/pull/7669)
- Update node binaries used by agent to v22.14.0 [#7668](https://github.com/sourcegraph/cody/pull/7668)

#### Auto-Edit

- add session stats page to the debug panel [#7690](https://github.com/sourcegraph/cody/pull/7690)
- Use user's token for authorization when opening a new websocket connection [#7672](https://github.com/sourcegraph/cody/pull/7672)
- reuse inflight requests [#7661](https://github.com/sourcegraph/cody/pull/7661)
- add context summary latency to auto-edit dashboard [#7630](https://github.com/sourcegraph/cody/pull/7630)

#### Autoedit

- Support response streaming [#7590](https://github.com/sourcegraph/cody/pull/7590)

#### Chat

- Implement rate limit detection and model switching in Cody clients (CODY-5204) [#7367](https://github.com/sourcegraph/cody/pull/7367)

#### Smart-Apply

- Ship instant smart apply model [#7682](https://github.com/sourcegraph/cody/pull/7682)

#### Telemetry

- introduce opentelemetry metrics to cody #CODY-5585 [#7647](https://github.com/sourcegraph/cody/pull/7647)

### Fix

#### Telemetry

- remove telemetry option from VSCode [#7636](https://github.com/sourcegraph/cody/pull/7636)

#### Tests

- disable flaky chat test [#7705](https://github.com/sourcegraph/cody/pull/7705)

### Chore

#### Chat

- Improve the feature flag evaluation process [#7664](https://github.com/sourcegraph/cody/pull/7664)
- Put the settings tab behind a feature flag [#7686](https://github.com/sourcegraph/cody/pull/7686)

#### Ci

- Fix agent bindings [#7692](https://github.com/sourcegraph/cody/pull/7692)
- add gcloud auth that was removed [#7670](https://github.com/sourcegraph/cody/pull/7670)

#### Cody-Web

- Improve cody web publishing documentation [#7694](https://github.com/sourcegraph/cody/pull/7694)

#### Core

- Fix unhandled AbortError errors [#7714](https://github.com/sourcegraph/cody/pull/7714)

### Reverts

- Revert "fix: backwards compatibility for evaluateFeatureFlags" [#7680](https://github.com/sourcegraph/cody/pull/7680)

#### Vscode

- update release workflows to auth before integration tests [#7697](https://github.com/sourcegraph/cody/pull/7697)
- Change 'auto-edit (Beta)' to 'auto-edit' [#7708](https://github.com/sourcegraph/cody/pull/7708)
- Fix flaky tests caused by too often refresh of siteVersion [#7691](https://github.com/sourcegraph/cody/pull/7691)
- Chore: Skip flaky integration test [#7674](https://github.com/sourcegraph/cody/pull/7674)
- Replace tiktoken with gpt-tokenizer [#7662](https://github.com/sourcegraph/cody/pull/7662)
- Refreshing icon after enabling autocomplete [#7660](https://github.com/sourcegraph/cody/pull/7660)
- Fix memory leak in network diagnostics code [#7654](https://github.com/sourcegraph/cody/pull/7654)
- Crash occurred when user tries to save new code file [#7645](https://github.com/sourcegraph/cody/pull/7645)

## 1.84.0

### Features

#### Agent

- Update node binaries used by agent to v22.14.0 [#7679](https://github.com/sourcegraph/cody/pull/7679)

#### Agent-Mode

- Implement Model Context Protocol (MCP) integration [#7606](https://github.com/sourcegraph/cody/pull/7606)

#### Agentic-Chat

- Agent Mode Telemetry (CODY-5592) [#7623](https://github.com/sourcegraph/cody/pull/7623)

#### Auto-Edit

- support aborting websocket request in fireworks-websocket adapter #CODY-5483 [#7549](https://github.com/sourcegraph/cody/pull/7549)
- Support triggering auto-edits on selection change in all clients [#7465](https://github.com/sourcegraph/cody/pull/7465)

#### Chat

- Improve tool input handling with JSON repair and validation [#7604](https://github.com/sourcegraph/cody/pull/7604)
- Feat(models) Set new context limits (CODY-5022) [#7556](https://github.com/sourcegraph/cody/pull/7556)

#### Guardrails

- Perform Guardrails checks for edits. [#7563](https://github.com/sourcegraph/cody/pull/7563)

#### Tabs

- Move "Open in Editor" button to secondary position [#7632](https://github.com/sourcegraph/cody/pull/7632)

#### Webview

- Improve webview performance with lightweight history [#7593](https://github.com/sourcegraph/cody/pull/7593)

### Fix

#### Agentic-Chat

- Improve the UI for pinning the model when Agentic mode is selected (CODY-5449) [#7591](https://github.com/sourcegraph/cody/pull/7591)
- [Backport M84] fix(agentic chat): Put the settings tab behind a feature flag [#7688](https://github.com/sourcegraph/cody/pull/7688)
- Fix(agentic chat): Update Sonnet model ID check in syncModels [#7633](https://github.com/sourcegraph/cody/pull/7633)
- Fix(agent mode): select mode at start up [#7616](https://github.com/sourcegraph/cody/pull/7616)
- Fix(agent mode): initial context not included as context [#7588](https://github.com/sourcegraph/cody/pull/7588)

#### Autoedit

- Skip automatically enrollment when running in other clients [#7643](https://github.com/sourcegraph/cody/pull/7643)
- Fix case where no completion provider would be registered for non VS Code clients [#7640](https://github.com/sourcegraph/cody/pull/7640)
- (auto-edit): Add session level stats such as prompt caching hit rate [#7537](https://github.com/sourcegraph/cody/pull/7537)

#### Chat

- Stop the Guardrails shimmer effect when checks are done [#7628](https://github.com/sourcegraph/cody/pull/7628)
- Completely disable Swift tree-sitter parsing due to VS Code 1.98+ crash [#7598](https://github.com/sourcegraph/cody/pull/7598)
- Label the button that runs shell commands "Execute" instead of "Execute in Terminal" [#7594](https://github.com/sourcegraph/cody/pull/7594)

#### Ci

- Update SCIP upload command in GitHub Actions [#7595](https://github.com/sourcegraph/cody/pull/7595)

#### Completion

- handle completion requests with no events [#7585](https://github.com/sourcegraph/cody/pull/7585)

#### Guardrails

- In enforced mode, hide smart apply, etc. actions until attribution complete [#7579](https://github.com/sourcegraph/cody/pull/7579)

#### Tests

- disable flaky chat test [#7705](https://github.com/sourcegraph/cody/pull/7705)

#### Vscode

- update release workflows to auth before integration tests [#7700](https://github.com/sourcegraph/cody/pull/7700)
- [Backport M84] Fix flaky tests caused by too often refresh of siteVersion #7691 [#7695](https://github.com/sourcegraph/cody/pull/7695)
- [Backport M84] Backport #7654 and #7669 to m84 [#7681](https://github.com/sourcegraph/cody/pull/7681)
- [Backport M84] Replace tiktoken with gpt-tokenizer [#7667](https://github.com/sourcegraph/cody/pull/7667)
- Add head dump command to Cody debug options [#7646](https://github.com/sourcegraph/cody/pull/7646)
- Fix: backwards compatibility for evaluateFeatureFlags [#7639](https://github.com/sourcegraph/cody/pull/7639)
- Cleanup unused PromptMigration UI components [#7615](https://github.com/sourcegraph/cody/pull/7615)
- Update tree-sitter to v0.24.5 [#7605](https://github.com/sourcegraph/cody/pull/7605)
- Sentry service refactoring [#7601](https://github.com/sourcegraph/cody/pull/7601)
- Tests should use its own temp keystore [#7567](https://github.com/sourcegraph/cody/pull/7567)
- Rename boost: field in NLS queries [#7564](https://github.com/sourcegraph/cody/pull/7564)
- Remove the "Commands are now prompts" welcome dialog. [#7536](https://github.com/sourcegraph/cody/pull/7536)
- Feat: Add Dockerfile that installs cody from source [#7513](https://github.com/sourcegraph/cody/pull/7513)

#### Web

- De-dup Guardrails attribution requests and route results back to the page [#7583](https://github.com/sourcegraph/cody/pull/7583)

### Chore

#### Chat

- Remove the default context on the first message for agentic chat [#7505](https://github.com/sourcegraph/cody/pull/7505)

#### Ci

- add gcloud auth that was removed [#7689](https://github.com/sourcegraph/cody/pull/7689)

#### Tests

- Skip flaky test [#7644](https://github.com/sourcegraph/cody/pull/7644)

### Refactor

#### Chat

- Remove loading dots from context display [#7557](https://github.com/sourcegraph/cody/pull/7557)

## 1.82.0

### Features

#### Auto-Edit

- Change the identifier from experimental to beta [#7547](https://github.com/sourcegraph/cody/pull/7547)
- implement smart-throttle [#7525](https://github.com/sourcegraph/cody/pull/7525)
- Handle accept events correctly when document changes match the active request [#7483](https://github.com/sourcegraph/cody/pull/7483)
- Add beta onboarding for auto-edit [#7478](https://github.com/sourcegraph/cody/pull/7478)
- add basic client cache [#7541](https://github.com/sourcegraph/cody/pull/7541)
- Enable Agent support [#7311](https://github.com/sourcegraph/cody/pull/7311)
- Add longer duration for persistence tracking for longer suggestion prediction [#7544](https://github.com/sourcegraph/cody/pull/7544)

#### Chat

- Improve tool input handling with JSON repair and validation [#7614](https://github.com/sourcegraph/cody/pull/7614)
- Open file in active column when in sidebar view [#7535](https://github.com/sourcegraph/cody/pull/7535)
- loading indicator for chat in progress [#7502](https://github.com/sourcegraph/cody/pull/7502)
- Feat(agentic chat): add internal feature flag [#7479](https://github.com/sourcegraph/cody/pull/7479)
- Feat(agent mode): Display modified lines count in DiffCell [#7543](https://github.com/sourcegraph/cody/pull/7543)

#### Guardrails

- Perform Guardrails checks for edits. [#7563](https://github.com/sourcegraph/cody/pull/7563)
- Various UX changes, Guardrails for Cody Web, adds an (unused) enforcement mode [#7527](https://github.com/sourcegraph/cody/pull/7527)

#### Telemetry

- Add sessionID epoch timestamp to chat question event [#7425](https://github.com/sourcegraph/cody/pull/7425)

#### Vscode

- prioritize 'flash' model over 'flash-lite' [#7386](https://github.com/sourcegraph/cody/pull/7386)
- Improve webview performance with lightweight history [#7596](https://github.com/sourcegraph/cody/pull/7596)
- Store all cody keyring secrets in a single entry [#7532](https://github.com/sourcegraph/cody/pull/7532)
- Use current file as fallback for current selection prompt hydration [#7531](https://github.com/sourcegraph/cody/pull/7531)
- Fix cody agent model listing command [#7529](https://github.com/sourcegraph/cody/pull/7529)
- Fix uri conversions on Windows [#7528](https://github.com/sourcegraph/cody/pull/7528)
- Set correct client capabilities for edit prompts [#7526](https://github.com/sourcegraph/cody/pull/7526)
- chat: Remove the arrow icon [#7511](https://github.com/sourcegraph/cody/pull/7511)
- Pass full filepath in prompt to the LLM. [#7472](https://github.com/sourcegraph/cody/pull/7472)
- CODY-5327: caching diagnostics information in diagnostic retriever [#7431](https://github.com/sourcegraph/cody/pull/7431)
- Mention Menu Reordering [#7393](https://github.com/sourcegraph/cody/pull/7393)
- Commit message gen: it is now able to handle a case when the user is not in the root directory [#7387](https://github.com/sourcegraph/cody/pull/7387)
- Chore: migrate feature flags evaluation to new batch api [#7380](https://github.com/sourcegraph/cody/pull/7380)
- [Backport M82] Add head dump command to Cody debug options [#7650](https://github.com/sourcegraph/cody/pull/7650)
- Consistent capitalization of 'Guardrails' in UI text [#7566](https://github.com/sourcegraph/cody/pull/7566)
- Add Cody Web Publish Document [#7560](https://github.com/sourcegraph/cody/pull/7560)
- Change update checker action to directly update Cody plugin [#7545](https://github.com/sourcegraph/cody/pull/7545)

### Fix

#### Agentic

- Improve error handling and tool execution robustness [#7512](https://github.com/sourcegraph/cody/pull/7512)
- Fix tool result rendering for first message [#7491](https://github.com/sourcegraph/cody/pull/7491)
- agentic -> agent dropdown title [#7489](https://github.com/sourcegraph/cody/pull/7489)
- Fix(Agent Mode): Exclude tool-state context items from prompt [#7569](https://github.com/sourcegraph/cody/pull/7569)
- Fix(agent mode): Include initial context in conversation loop [#7551](https://github.com/sourcegraph/cody/pull/7551)
- Fix(agent mode): editor gets reset issue [#7550](https://github.com/sourcegraph/cody/pull/7550)
- Fix(agent mode): remove dangling tool_call from assistant messages [#7534](https://github.com/sourcegraph/cody/pull/7534)
- Fix: at mentions should allow more special characters [#7500](https://github.com/sourcegraph/cody/pull/7500)
- [Backport M82] fix(agentic chat): Update Sonnet model ID check in syncModels [#7634](https://github.com/sourcegraph/cody/pull/7634)
- [Backport M82] fix(agent mode): select mode at start up [#7617](https://github.com/sourcegraph/cody/pull/7617)
- [Backport M82] feat(models) Set new context limits (CODY-5022) [#7608](https://github.com/sourcegraph/cody/pull/7608)
- [Backport M82] fix(agent mode): initial context not included as context [#7589](https://github.com/sourcegraph/cody/pull/7589)

#### Auto-Edit

- Do not swtich user to if already enrolled to beta [#7487](https://github.com/sourcegraph/cody/pull/7487)
- Remove unnecessary prompt whitespace [#7481](https://github.com/sourcegraph/cody/pull/7481)

#### Chat

- Completely disable Swift tree-sitter parsing due to VS Code 1.98+ crash [#7610](https://github.com/sourcegraph/cody/pull/7610)
- Display file path in chat file cell [#7530](https://github.com/sourcegraph/cody/pull/7530)
- Temporarily disable Swift tree-sitter parsing due to VSCode 1.98+ compatibility issue [#7520](https://github.com/sourcegraph/cody/pull/7520)
- update openctx error handling [#7495](https://github.com/sourcegraph/cody/pull/7495)
- prevent keyboard shortcut from selecting disabled chat modes [#7463](https://github.com/sourcegraph/cody/pull/7463)

#### Completion

- handle completion requests with no events [#7586](https://github.com/sourcegraph/cody/pull/7586)

#### Guardrails

- In enforced mode, hide smart apply, etc. actions until attribution complete [#7581](https://github.com/sourcegraph/cody/pull/7581)
- Update indicator when joining an in-flight request [#7554](https://github.com/sourcegraph/cody/pull/7554)

#### Vscode

- Ensure file link clicks work in ToolStatusCell [#7496](https://github.com/sourcegraph/cody/pull/7496)
- Improve placeholder text in chat input [#7490](https://github.com/sourcegraph/cody/pull/7490)
- Extract terminal lines outside of conditional render in ToolStatusCell [#7488](https://github.com/sourcegraph/cody/pull/7488)
- backwards compatibility for evaluateFeatureFlags [#7655](https://github.com/sourcegraph/cody/pull/7655)
- Hide agentic mode when edit is not enabled [#7555](https://github.com/sourcegraph/cody/pull/7555)
- handle empty path in basename function [#7574](https://github.com/sourcegraph/cody/pull/7574)

### Chore

#### Agent

- release agent-v5.5.17 [#7391](https://github.com/sourcegraph/cody/pull/7391)

#### Chat

- Remove the expanded content for the files [#7506](https://github.com/sourcegraph/cody/pull/7506)

#### Release

- fix release notes step [#7570](https://github.com/sourcegraph/cody/pull/7570)

### Refactor

#### Chat

- Remove loading dots from context display [#7597](https://github.com/sourcegraph/cody/pull/7597)

### Reverts

- revert [#-1](https://github.com/sourcegraph/cody/pull/7507)

## 1.80.1

### Fix

#### Chat

- Completely disable Swift tree-sitter parsing due to VS Code 1.98+ crash [#7609](https://github.com/sourcegraph/cody/pull/7609)

### Reverts

There were no reverts for this release

### Uncategorized

#### Others

- Changelog for 1.80.0 [#7572](https://github.com/sourcegraph/cody/pull/7572)

## 1.80.0

### Features

#### Auto-Edit

- Handle accept events correctly when document changes match the active request [#7498](https://github.com/sourcegraph/cody/pull/7498)
- Add beta onboarding for auto-edit [#7482](https://github.com/sourcegraph/cody/pull/7482)
- Add optimized prompt structure to leverage the prompt cache [#7453](https://github.com/sourcegraph/cody/pull/7453)
- experimental inceptionlabs adapter [#7418](https://github.com/sourcegraph/cody/pull/7418)

#### Chat

- Set the model selector to Claude 3.7 in Agentic mode (CODY-5388) [#7437](https://github.com/sourcegraph/cody/pull/7437)
- Disable smart apply toolbar in agentic chat [#7435](https://github.com/sourcegraph/cody/pull/7435)

#### Models

- Increase context window limits (CODY-5022) [#7398](https://github.com/sourcegraph/cody/pull/7398)

#### Smart-Apply

- Fix the smart apply prompt role from system to assistant [#7420](https://github.com/sourcegraph/cody/pull/7420)

### Fix

#### Agentic

- Improved Message Building in Agentic Chat [#7449](https://github.com/sourcegraph/cody/pull/7449)

#### Agentic-Chat

- Improve error handling and tool execution robustne… [#7518](https://github.com/sourcegraph/cody/pull/7518)
- Fix tool result rendering for first message [#7491](https://github.com/sourcegraph/cody/pull/7491)
- new UI components [#7457](https://github.com/sourcegraph/cody/pull/7457)
- add internal feature flag [#7479](https://github.com/sourcegraph/cody/pull/7479)
- use different models for first turn and subsequent turns [#7436](https://github.com/sourcegraph/cody/pull/7436)
- add tool status UI and thought process toggle [#7415](https://github.com/sourcegraph/cody/pull/7415)

#### Auto-Edit

- Do not swtich user to if already enrolled to beta [#7487](https://github.com/sourcegraph/cody/pull/7487)

#### Chat

- persist and allow manual selection of intent mode [#7432](https://github.com/sourcegraph/cody/pull/7432)
- Improve excluded context warning message [#7372](https://github.com/sourcegraph/cody/pull/7372)
- Fix current selection in ContextRetriever [#7443](https://github.com/sourcegraph/cody/pull/7443)

#### Completions

- Add api-version check for completions endpoint [#7447](https://github.com/sourcegraph/cody/pull/7447)

#### Edit

- initialize edit tool history for S2 only [#7434](https://github.com/sourcegraph/cody/pull/7434)
- Add longer duration for persistence tracking for longer suggestion prediction [#7548](https://github.com/sourcegraph/cody/pull/7548)

#### Input

- unify hover text on dropdowns to all be strings [#7426](https://github.com/sourcegraph/cody/pull/7426)

#### Models

- prevent reasoning models from being set as default model [#7461](https://github.com/sourcegraph/cody/pull/7461)
- Update context limit logic [#7450](https://github.com/sourcegraph/cody/pull/7450)

#### Vscode

- Ensure file link clicks work in ToolStatusCell [#7516](https://github.com/sourcegraph/cody/pull/7516)
- Extract terminal lines outside of conditional render in ToolStatusCell [#7514](https://github.com/sourcegraph/cody/pull/7514)
- Improve placeholder text in chat input [#7490](https://github.com/sourcegraph/cody/pull/7490)

### Chore

- remove compatibility override after experimental release [#7459](https://github.com/sourcegraph/cody/pull/7459)
- Remove NLS from cody-bench [#7458](https://github.com/sourcegraph/cody/pull/7458)
- Cache diffs from recent edits [#7424](https://github.com/sourcegraph/cody/pull/7424)
- Update subscription type when switching acc without endpoint change [#7451](https://github.com/sourcegraph/cody/pull/7451)

#### Auto-Edit

- ensure aborts are propagated to the provider [#7440](https://github.com/sourcegraph/cody/pull/7440)
- fix accept/reject analytics events [#7427](https://github.com/sourcegraph/cody/pull/7427)
- add inference time to the debug panel [#7419](https://github.com/sourcegraph/cody/pull/7419)

#### Release

- fix release notes step [#7571](https://github.com/sourcegraph/cody/pull/7571)

#### Telemetry

- Stop logging discarded autoedit events [#7381](https://github.com/sourcegraph/cody/pull/7381)
- Remove `billingMetadata` from auth telemetry event [#7286](https://github.com/sourcegraph/cody/pull/7286)

#### Tutorial

- re-add gitignore [#7467](https://github.com/sourcegraph/cody/pull/7467)
- Remove interactive tutorial [#7430](https://github.com/sourcegraph/cody/pull/7430)

### Reverts

- Revert "Fix assertion error from webview (closes #2845) [#2845](https://github.com/sourcegraph/cody/pull/7257)

## 1.78.2

### Fix

#### Chat

- Temporarily disable Swift tree-sitter parsing due to VSCode 1.98+ compatibility issue [#7521](https://github.com/sourcegraph/cody/pull/7521)

## 1.78.1

### Fix

#### Models

- Prevent reasoning models from being set as default model [#7473](https://github.com/sourcegraph/cody/pull/7473)

## 1.78.0

### Features

#### Auto-Edit

- make prompt instructions more concise [#7402](https://github.com/sourcegraph/cody/pull/7402)
- reduce context size [#7401](https://github.com/sourcegraph/cody/pull/7401)
- cancel redundant requests [#7400](https://github.com/sourcegraph/cody/pull/7400)

#### Chat

- Add Agentic chat intent and UI [#7332](https://github.com/sourcegraph/cody/pull/7332)
- At-mention menu item naming changes [#7359](https://github.com/sourcegraph/cody/pull/7359)

#### Context

- Enable symf for ES dev workspaces [#7412](https://github.com/sourcegraph/cody/pull/7412)

### Fix

#### Auth

- use correct access token when authenticating [#7362](https://github.com/sourcegraph/cody/pull/7362)

#### Autoedit

- Fix conflict between suggestions and completion menu [#7389](https://github.com/sourcegraph/cody/pull/7389)

#### Chat

- Fix React warnings caused by relocating the model selector [#7351](https://github.com/sourcegraph/cody/pull/7351)
- [Backport M78] Fix current selection in ContextRetriever [#7462](https://github.com/sourcegraph/cody/pull/7462)
- Fix Remote Directories Provider Valid Site Version Logic [#7396](https://github.com/sourcegraph/cody/pull/7396)
- Remove CodyPromptsV2 (and fix prompts migration layout) [#7336](https://github.com/sourcegraph/cody/pull/7336)

#### CI

- improve windows unit-test job and cache [#7356](https://github.com/sourcegraph/cody/pull/7356)

#### Completions

- Add api-version check for completions endpoint [#7448](https://github.com/sourcegraph/cody/pull/7448)

#### Gateway

- use latestCodyClientConfig for chat api version [#7365](https://github.com/sourcegraph/cody/pull/7365)

#### Smart-Apply

- Fix the smart apply prompt role from system to assistant [#7421](https://github.com/sourcegraph/cody/pull/7421)

#### Search

- Fix gear action in Find with Sourcegraph dialog [#7369](https://github.com/sourcegraph/cody/pull/7369)

### Chore

#### Agent

- add minor version release script [#7330](https://github.com/sourcegraph/cody/pull/7330)
- Cody CLI: Include Noxide files [#7390](https://github.com/sourcegraph/cody/pull/7390)
- Api: Fix version detection for non-main-branch images [#7382](https://github.com/sourcegraph/cody/pull/7382)

#### Auto-Edit

- reduce debounce time even further [#7348](https://github.com/sourcegraph/cody/pull/7348)

#### Telemetry

- update `billingMetadata` for autoedit and completion events [#7360](https://github.com/sourcegraph/cody/pull/7360)

#### Others

- Logging JCEF version to Sentry [#7364](https://github.com/sourcegraph/cody/pull/7364)
- Merge sourcegraph.cody.Icons and sourcegraph.Icons - merge classes - remove redundant files [#7368](https://github.com/sourcegraph/cody/pull/7368)
- Chore: disable renovate [#7355](https://github.com/sourcegraph/cody/pull/7355)

### Refactor

#### Auth

- Updating CodyAuthService from authStatus/didUpdate [#7354](https://github.com/sourcegraph/cody/pull/7354)

#### Chat

- Remove priority context logic [#7397](https://github.com/sourcegraph/cody/pull/7397)
- Refactor a few lines in vscode/src/commands/scm/source-control.ts [#7385](https://github.com/sourcegraph/cody/pull/7385)

## 1.76.1

### Reverts

- Revert part of [#7344](https://github.com/sourcegraph/cody/pull/7344) to support Sourcegraph instances 6.1.0+ that do not support API version 8. (cfb30bbf41f31774fe2813d12740943d28a7da72)

## 1.76.0

### Features

#### Auto-Edit

- full debug panel UI implementation [#7306](https://github.com/sourcegraph/cody/pull/7306)
- add basic webview debug-panel [#7304](https://github.com/sourcegraph/cody/pull/7304)
- Enable inline renderer [#7172](https://github.com/sourcegraph/cody/pull/7172)

#### Chat

- removes feature flag requirement for title generation [#7291](https://github.com/sourcegraph/cody/pull/7291)
- Add the latest conversation to the welcome page [#7227](https://github.com/sourcegraph/cody/pull/7227)
- Add icon for Cody chat panel [#7285](https://github.com/sourcegraph/cody/pull/7285)

#### Dev

- Add image upload (vision) support for internal testing [#7279](https://github.com/sourcegraph/cody/pull/7279)

#### Smart-Apply

- Adds custom model prompt for smart apply. [#7328](https://github.com/sourcegraph/cody/pull/7328)
- Add smart apply intent and refactor for custom models [#7324](https://github.com/sourcegraph/cody/pull/7324)

#### Webview

- Persist Thinking Space state using local storage [#7307](https://github.com/sourcegraph/cody/pull/7307)

#### Edit

- Use latest sonnet for fix and latest haiku-3-5 for doc intent [#7241](https://github.com/sourcegraph/cody/pull/7241)

### Fix

#### Autoedit

- Fix conflict between suggestions and completion menu [#7406](https://github.com/sourcegraph/cody/pull/7406)

#### Build

- Make dev, insiders targets work on Windows [#7345](https://github.com/sourcegraph/cody/pull/7345)

#### Chat

- Fix React warnings caused by relocating the model selector [#7366](https://github.com/sourcegraph/cody/pull/7366)
- Fix the filename container location in chat [#7262](https://github.com/sourcegraph/cody/pull/7262)
- Fix the apply and copy buttons render improperly when the sidebar width is narrow [#7299](https://github.com/sourcegraph/cody/pull/7299)
- Fix: Fix at-mentions menu in prompt template [#7289](https://github.com/sourcegraph/cody/pull/7289)
- Fix positioning of file-like chats in Recent Files [#7284](https://github.com/sourcegraph/cody/pull/7284)
- Open / close Cody tool window on a shortcut (closes #2618) [#7282](https://github.com/sourcegraph/cody/pull/7282)
- Fix "Open Selection in Sourcegraph Web" (closes #3037) [#7278](https://github.com/sourcegraph/cody/pull/7278)
- Truncate full file paths from the left, not from the right [#7277](https://github.com/sourcegraph/cody/pull/7277)
- Fix 'Open Chat' Action [#7273](https://github.com/sourcegraph/cody/pull/7273)
- Fix missing tab tooltips [#7271](https://github.com/sourcegraph/cody/pull/7271)
- Fix: Add support for open-link items to new prompt editor [#7268](https://github.com/sourcegraph/cody/pull/7268)
- Fix assertion error from webview (closes #2845) [#7257](https://github.com/sourcegraph/cody/pull/7257)
- Remove the /reset command [#7256](https://github.com/sourcegraph/cody/pull/7256)

#### Client

- API versioning [#7344](https://github.com/sourcegraph/cody/pull/7344)
- Set Accept header to 'application/json' for GraphQL queries [#7312](https://github.com/sourcegraph/cody/pull/7312)
- Fix token-receiver url generation logic [#7338](https://github.com/sourcegraph/cody/pull/7338)

#### Dev

- Refine image upload logic and vision model support [#7305](https://github.com/sourcegraph/cody/pull/7305)

#### Smart-Apply

- do not create new files on prefetching [#7269](https://github.com/sourcegraph/cody/pull/7269)

#### Webview

- show copy button in web clients [#7310](https://github.com/sourcegraph/cody/pull/7310)
- don't add aborted messages to new chat sessions [#7267](https://github.com/sourcegraph/cody/pull/7267)

### Chore

#### Agent

- release agent-v5.5.16 [#7329](https://github.com/sourcegraph/cody/pull/7329)

#### Auto-Edit

- disable rewrite_speculation [#7347](https://github.com/sourcegraph/cody/pull/7347)
- integrate model response metadata with analytics logger [#7303](https://github.com/sourcegraph/cody/pull/7303)
- capture request/response metadata from auto-edit API adapters [#7302](https://github.com/sourcegraph/cody/pull/7302)
- improve diff utils [#7301](https://github.com/sourcegraph/cody/pull/7301)

#### Release

- remove unreleased section [#7259](https://github.com/sourcegraph/cody/pull/7259)

#### Smart-Apply

- Refactor the selection prompt to use a interface for custom model [#7337](https://github.com/sourcegraph/cody/pull/7337)

#### Build

- Agent recordings: Ensure tests are not in watch mode [#7309](https://github.com/sourcegraph/cody/pull/7309)
- Allow to open devtools as action for an instant debugging caability [#7308](https://github.com/sourcegraph/cody/pull/7308)
- Reporting errors to Sentry [#7298](https://github.com/sourcegraph/cody/pull/7298)
- Bump cody web version in preparation for publishing [#7290](https://github.com/sourcegraph/cody/pull/7290)
- Make sure relevant stacktrace part is included in error reports [#7280](https://github.com/sourcegraph/cody/pull/7280)

### Refactor

#### Chat

- remove mention and add intent selector to toolbar [#7287](https://github.com/sourcegraph/cody/pull/7287)
- Remove CodyPromptsV2 (and fix prompts migration layout) [#7336](https://github.com/sourcegraph/cody/pull/7336)
- Clean up the "Ask Cody to Explain" functionality in terminal [#7254](https://github.com/sourcegraph/cody/pull/7254)

### Reverts

There were no reverts for this release

## 1.74.0

### Features

#### Auto-Edit

- Improve unified diff output [#7158](https://github.com/sourcegraph/cody/pull/7158)
- Add more test cases for image rendering [#7138](https://github.com/sourcegraph/cody/pull/7138)
- Support unified diff and refactor diff format [#7000](https://github.com/sourcegraph/cody/pull/7000)
- Decrease debounce interval [#7120](https://github.com/sourcegraph/cody/pull/7120)

#### Chat

- UI for diff preview in chat CODY-5139 [#7217](https://github.com/sourcegraph/cody/pull/7217)
- generate custom chat titles on first message automatically [#7063](https://github.com/sourcegraph/cody/pull/7063)
- Feat(commit message): commit message out of experimental stage [#7166](https://github.com/sourcegraph/cody/pull/7166)

#### Context

- Enable symf for Enterprise Starter [#7240](https://github.com/sourcegraph/cody/pull/7240)

#### Smart-Apply

- prefetch everything [#6768](https://github.com/sourcegraph/cody/pull/6768)

#### Webview

- add support for <think> tags in Chat Message [#6845](https://github.com/sourcegraph/cody/pull/6845)

### Fix

#### Auth

- Extension authorizes Search even if Cody is disabled in site config [#7234](https://github.com/sourcegraph/cody/pull/7234)
- Fix already disposed from CodyAuthService [#7244](https://github.com/sourcegraph/cody/pull/7244)
- Handle customer proxy re-auth response by retrying, not prompting user for different token [#6652](https://github.com/sourcegraph/cody/pull/6652)
- Enable credentials synchronization between Cody and Search extensions [#7123](https://github.com/sourcegraph/cody/pull/7123)

#### Chat

- Fix the filename container location in chat [#7263](https://github.com/sourcegraph/cody/pull/7263)
- prompt caching feature flag enrollement [#7177](https://github.com/sourcegraph/cody/pull/7177)
- remove current selection from initial mention [#7161](https://github.com/sourcegraph/cody/pull/7161)
- Fix already disposed error from WebviewViewManager (closes #3040) [#7248](https://github.com/sourcegraph/cody/pull/7248)
- Fix disposed errors from CodyConsole (closes #2893, closes #2885) [#7245](https://github.com/sourcegraph/cody/pull/7245)
- Improve the UI of the thinking display [#7216](https://github.com/sourcegraph/cody/pull/7216)
- Fix: Make @-button work in prompt editor v2 [#7195](https://github.com/sourcegraph/cody/pull/7195)
- Fix(agentic chat): terminal and openCtx are not registered as tools [#7130](https://github.com/sourcegraph/cody/pull/7130)
- Fix: prompt templates failed when pasting linebreaks [#7191](https://github.com/sourcegraph/cody/pull/7191)

#### Editor

- Fix range handling for editor selection content [#7128](https://github.com/sourcegraph/cody/pull/7128)
- Fix threading issues in 'Ask Cody To Fix' feature, add caching [#7229](https://github.com/sourcegraph/cody/pull/7229)
- Fix(Inline Edit): removes reasoning models from selector [#7238](https://github.com/sourcegraph/cody/pull/7238)
- Fix: Mentions menu placement/behavior in prompt input v2 [#7194](https://github.com/sourcegraph/cody/pull/7194)

#### Keybindings

- simplify chat panel toggle behavior with opt+L [#7115](https://github.com/sourcegraph/cody/pull/7115)

#### Smart-Apply

- do not create new files on prefetching [#7270](https://github.com/sourcegraph/cody/pull/7270)
- add insert events in the smart apply logging payload [#7197](https://github.com/sourcegraph/cody/pull/7197)
- stripping of markdown code blocks [#7105](https://github.com/sourcegraph/cody/pull/7105)

#### Ui

- Consolidate the extension settings with the web view settings(SRCH-1649) [#7096](https://github.com/sourcegraph/cody/pull/7096)
- Feat: Improve warm cody web startup time [#6947](https://github.com/sourcegraph/cody/pull/6947)
- Simplify state machine implementation of prosemirror prompt input [#7154](https://github.com/sourcegraph/cody/pull/7154)
- Unclickable links no longer display in Cody WelcomeMessage [#7102](https://github.com/sourcegraph/cody/pull/7102)
- Remove mention of unlimited LLM usage [#7151](https://github.com/sourcegraph/cody/pull/7151)
- Fix code search download [#7124](https://github.com/sourcegraph/cody/pull/7124)

#### Vscode

- Disable nightly extension in launch configurations [#7152](https://github.com/sourcegraph/cody/pull/7152)
- Commit generation: prioritize Gemini Flash models [#7252](https://github.com/sourcegraph/cody/pull/7252)
- Fix already disposed exception from withAgent [#7242](https://github.com/sourcegraph/cody/pull/7242)

### Chore

#### Auto-Edit

- improve inline renderer `insertText` extraction [#7214](https://github.com/sourcegraph/cody/pull/7214)
- Set background color for test images [#7139](https://github.com/sourcegraph/cody/pull/7139)

#### Chat

- Add the minus button to the thought process [#7222](https://github.com/sourcegraph/cody/pull/7222)

#### Release

- remove unreleased section [#7333](https://github.com/sourcegraph/cody/pull/7333)
- improve release note generation [#7150](https://github.com/sourcegraph/cody/pull/7150)
- fix new line rendering in changelog PRs [#7149](https://github.com/sourcegraph/cody/pull/7149)

### Refactor

#### Chat

- Render think content as Markdown [#7215](https://github.com/sourcegraph/cody/pull/7215)

#### Telemetry

- opt-out option [#7205](https://github.com/sourcegraph/cody/pull/7205)

### Reverts

There were no reverts for this release

### Uncategorized

#### Others

- Java.lang.IllegalArgumentException: Invalid range specified [#7193](https://github.com/sourcegraph/cody/pull/7193)
- NLS eval: add fork:yes archived:yes to eval query [#7170](https://github.com/sourcegraph/cody/pull/7170)
- Fix API incompatibility issue in IJ 2025 [#7169](https://github.com/sourcegraph/cody/pull/7169)
- Improve query rewrite for search context [#7164](https://github.com/sourcegraph/cody/pull/7164)
- Update gradle and deps [#7163](https://github.com/sourcegraph/cody/pull/7163)
- Fix inconsistent workspace handling in agent [#7160](https://github.com/sourcegraph/cody/pull/7160)
- Handle case when VirtualFile is null [#7156](https://github.com/sourcegraph/cody/pull/7156)
- Docs: prompt library at mentions [#7091](https://github.com/sourcegraph/cody/pull/7091)

## 1.72.0

### Features

#### Prompt-Editor

- focus on file range when clicking on context item mention with ranges [#7021](https://github.com/sourcegraph/cody/pull/7021)

#### Vscode

- add context via file explorer [#7107](https://github.com/sourcegraph/cody/pull/7107)

#### Webview

- add support for <think> tags in Chat Message [#7209](https://github.com/sourcegraph/cody/pull/7209)

### Fix

#### Auto-Edit

- Fix low resolution images on low DPI screens [#7100](https://github.com/sourcegraph/cody/pull/7100)

#### Chat

- prompt caching feature flag enrollement [#7177](https://github.com/sourcegraph/cody/pull/7177)
- [Backport M72] fix(agentic chat): terminal and openCtx are not registered as tools [#7133](https://github.com/sourcegraph/cody/pull/7133)
- Fix(unit test): revert prompt.test test cases [#7114](https://github.com/sourcegraph/cody/pull/7114)
- Fix: Make it possible to dogfood new prompt editor [#7094](https://github.com/sourcegraph/cody/pull/7094)
- Add support for external auth providers in code search [#6919](https://github.com/sourcegraph/cody/pull/6919)
- [Backport M72] Fix code search downlaod [#7127](https://github.com/sourcegraph/cody/pull/7127)

### Inline-edit

- [Backport M72] fix(Inline Edit): removes reasoning models from selector [#7239](https://github.com/sourcegraph/cody/pull/7239)

#### Command

- Generate commit message now uses flash-lite instead of last selected model [#7082](https://github.com/sourcegraph/cody/pull/7082)
- [Backport M72] feat(commit generation): prioritize Gemini Flash models [#7255](https://github.com/sourcegraph/cody/pull/7255)

#### Smart-Apply

- add insert events in the smart apply logging payload [#7198](https://github.com/sourcegraph/cody/pull/7198)
- stripping of markdown code blocks [#7105](https://github.com/sourcegraph/cody/pull/7105)

#### Tracing

- Add Client Platform and agentVersion to traces [#6889](https://github.com/sourcegraph/cody/pull/6889)

#### Ui

- Hide unused prompts(SRCH-1648) [#7095](https://github.com/sourcegraph/cody/pull/7095)

### Chore

- Chore: Add prosemirror-lexical interop test [#7111](https://github.com/sourcegraph/cody/pull/7111)

#### Release

- improve release note generation [#7253](https://github.com/sourcegraph/cody/pull/7253)
- Feat: Add experimental & nightly release channels for vsce [#6997](https://github.com/sourcegraph/cody/pull/6997)

### Refactor

#### Telemetry

- opt-out option [#7207](https://github.com/sourcegraph/cody/pull/7207)

### Reverts

- Revert "fix(ui): Hide unused prompts(SRCH-1648)" [#-1](https://github.com/sourcegraph/cody/pull/7101)

## 1.70.3

### Refactor

#### Telemetry

- opt-out option [#7206](https://github.com/sourcegraph/cody/pull/7206)

### Features

#### Webview

- Add support for <think> tags in Chat Message [#6845](https://github.com/sourcegraph/cody/pull/6845)

## 1.70.2

### Fix

#### Chat

- prompt caching feature flag enrollement [#7177](https://github.com/sourcegraph/cody/pull/7177)

## 1.70.1

### Fix

- [Backport M70] fix(agentic chat): terminal and openCtx are not registered as tools [#7132](https://github.com/sourcegraph/cody/pull/7132)

## 1.70.0

### Features

#### Auto-Edit

- Fix slightly misaligned image decorations [#7040](https://github.com/sourcegraph/cody/pull/7040)
- Use the users' font size when generating images [#7036](https://github.com/sourcegraph/cody/pull/7036)

#### Chat

- Turn prompt caching on for code context messages (CODY-4808) [#6953](https://github.com/sourcegraph/cody/pull/6953)
- Simplify chat UI [#6992](https://github.com/sourcegraph/cody/pull/6992)

#### Others

- support for dynamic mentions in @ mention menu for prompt templates [#6793](https://github.com/sourcegraph/cody/pull/6793)

### Fix

#### Auto-Edit

- Fix low resolution images on low DPI screens [#7112](https://github.com/sourcegraph/cody/pull/7112)

#### Chat

- At mention menu open outside the editor window [#7045](https://github.com/sourcegraph/cody/pull/7045)
- language filters in rules not applying correctly [#7025](https://github.com/sourcegraph/cody/pull/7025)
- expansion of current-tab generic mention when non editor tabs are opened [#6910](https://github.com/sourcegraph/cody/pull/6910)
- Fix 500ms delay when submitting chat message [#6991](https://github.com/sourcegraph/cody/pull/6991) [#6990](https://github.com/sourcegraph/cody/pull/6990)
- Fix Repo filter dropdown z-index [#6994](https://github.com/sourcegraph/cody/pull/6994)
- Fix border on history search [#6983](https://github.com/sourcegraph/cody/pull/6983)
- Fix repo name being `Symbol(@@pendingOperation)` if repo is local [#7042](https://github.com/sourcegraph/cody/pull/7042)
- simplify models fixtures [#6996](https://github.com/sourcegraph/cody/pull/6996)
- chat ui: remove user avatars, remove speaker name from follow-up message [#6981](https://github.com/sourcegraph/cody/pull/6981)
- remove chat message feedback and "Try again with different" model/context [#6980](https://github.com/sourcegraph/cody/pull/6980)
- Remove intent leftovers [#7051](https://github.com/sourcegraph/cody/pull/7051)
- Remove Intent Detection [#7039](https://github.com/sourcegraph/cody/pull/7039)
- Remove hard-coded 'deep-cody' and replace with constant [#6958](https://github.com/sourcegraph/cody/pull/6958)
- Improve code border styles [#7024](https://github.com/sourcegraph/cody/pull/7024)
- Fix keyDown:paste [#6938](https://github.com/sourcegraph/cody/pull/6938)

#### Jetbrains

- remove duplicate sg logo svg [#7099](https://github.com/sourcegraph/cody/pull/7099)

#### Release

- Update the JetBrains link to release notes. [#6976](https://github.com/sourcegraph/cody/pull/6976)

#### Ui

- Fix bugs in the UI [#7001](https://github.com/sourcegraph/cody/pull/7001)
- Wire StatusBar into AutoeditsProvider (CODY-4706) [#6955](https://github.com/sourcegraph/cody/pull/6955)

#### Others

- Fix chevron for open/closed search results [#6978](https://github.com/sourcegraph/cody/pull/6978)
- Stop button on cody web [#6939](https://github.com/sourcegraph/cody/pull/6939)

### Chore

#### Dev

- fix kotlin bindings [#7043](https://github.com/sourcegraph/cody/pull/7043)
- Fix cody web sandbox cors problem [#7010](https://github.com/sourcegraph/cody/pull/7010)
- disable windows/macOS e2e tests on main, shard ubuntu tests [#7031](https://github.com/sourcegraph/cody/pull/7031)
- experimental: Re-enable tool-cody for exploration [#6979](https://github.com/sourcegraph/cody/pull/6979)

#### Marketing

- update JB plugin icon [#7085](https://github.com/sourcegraph/cody/pull/7085)

#### Release

- upgrade changelog generator [#7081](https://github.com/sourcegraph/cody/pull/7081)
- Bump package version and update changelog for 1.66 [#7003](https://github.com/sourcegraph/cody/pull/7003)
- VSCode stable release Slack announcements to point to the correct release branches [#6975](https://github.com/sourcegraph/cody/pull/6975)
- Bump package version and update changelog for 1.66 [#6971](https://github.com/sourcegraph/cody/pull/6971)
- Update cody web to 0.30.0 [#7033](https://github.com/sourcegraph/cody/pull/7033)
- Update Cody Web to V0.31.0 [#7053](https://github.com/sourcegraph/cody/pull/7053)
- ignore aider files [#7013](https://github.com/sourcegraph/cody/pull/7013)
- remove unused code [#6998](https://github.com/sourcegraph/cody/pull/6998)
- Changelog for 1.68.0 [#7089](https://github.com/sourcegraph/cody/pull/7089)

### Reverts

- There were no reverts for this release

## 1.68.0

### Features

#### Auto-Edit

- Use the users' font size when generating images [#7055](https://github.com/sourcegraph/cody/pull/7055)
- Fix slightly misaligned image decorations [#7054](https://github.com/sourcegraph/cody/pull/7054)
- Enable image based rendering for dogfooding [#6950](https://github.com/sourcegraph/cody/pull/6950)
- Support image rendering for complex diffs [#6545](https://github.com/sourcegraph/cody/pull/6545)

#### Context

- Add Prompt Caching to Code Context (CODY-4807) [#6878](https://github.com/sourcegraph/cody/pull/6878)

#### Chat

- Use rules (.sourcegraph/\*.rule.md) in chat and inline edit [#6909](https://github.com/sourcegraph/cody/pull/6909)
- Adds searching chat history to the history tab [#6897](https://github.com/sourcegraph/cody/pull/6897)

#### Edit

- Add the context for the edit command [#6924](https://github.com/sourcegraph/cody/pull/6924)

#### Promptlist

- Add `promptId` & `promptName` to privateMetadata [#6764](https://github.com/sourcegraph/cody/pull/6764)

#### Smart-Apply

- Log fixupID to track in the edit [#6943](https://github.com/sourcegraph/cody/pull/6943)
- Add haiku 3.5 for a/b testing [#6935](https://github.com/sourcegraph/cody/pull/6935)
- Add the context logging for smart-apply feature [#6918](https://github.com/sourcegraph/cody/pull/6918)
- Show Reapply for applied code blocks [#6898](https://github.com/sourcegraph/cody/pull/6898)

### Fix

#### Auto-Edit

- Restore suffix decorations [#6949](https://github.com/sourcegraph/cody/pull/6949)
- Fix the false notification for auto-edit non eligibility [#6899](https://github.com/sourcegraph/cody/pull/6899)

#### Client-Config

- Simplify config fetching logic and fix omnibox flag [#6960](https://github.com/sourcegraph/cody/pull/6960)
- Fix problem with race between auth and config causing issues with models loading [#6886](https://github.com/sourcegraph/cody/pull/6886)

#### Context

- Mark at-mention context items as user-added items [#6920](https://github.com/sourcegraph/cody/pull/6920)

#### Chat

- Bottom prompt buttons cut off [#6945](https://github.com/sourcegraph/cody/pull/6945)
- Fix paragraph spacing in submit button dropdown if no intent is detected [#6952](https://github.com/sourcegraph/cody/pull/6952)
- Remove chat message feedback and "Try again with different" model/context [#7008](https://github.com/sourcegraph/cody/pull/7008)
- Fix 500ms delay when submitting chat message [#7007](https://github.com/sourcegraph/cody/pull/7007)
- Fix ~5px pixel jitter when pressing Enter in chat in VS Code [#7006](https://github.com/sourcegraph/cody/pull/7006)
- Fix crash when using TextDocument.validateRange(...) [#6948](https://github.com/sourcegraph/cody/pull/6948)

#### Release

- Update the JetBrains link to release notes. [#6977](https://github.com/sourcegraph/cody/pull/6977)

#### Ui

- Fix bugs in the UI [#7001](https://github.com/sourcegraph/cody/pull/7001)
- Use timeout argument directly as duration instead of timestamp [#6954](https://github.com/sourcegraph/cody/pull/6954)
- Remove user avatars, remove speaker name from follow-up message [#7009](https://github.com/sourcegraph/cody/pull/7009)
- Simplify chat UI [#6992](https://github.com/sourcegraph/cody/pull/6992)

#### Web

- Don't show CTA on Cody Web for PLG [#6956](https://github.com/sourcegraph/cody/pull/6956)

#### Others

- Remove chat footer link removals and border fixes [#6940](https://github.com/sourcegraph/cody/pull/6940)

### Chore

#### Auto-Edit

- Cleanup the logging with the context source for logging [#6901](https://github.com/sourcegraph/cody/pull/6901)

#### Chat

- Add a retry button for Cody API version error (CODY-4864) [#6926](https://github.com/sourcegraph/cody/pull/6926)

#### Marketing

- Update marketplace and in product logos [#6959](https://github.com/sourcegraph/cody/pull/6959)

#### Release

- upgrade changelog generator [#7084](https://github.com/sourcegraph/cody/pull/7084)
- VSCode stable release Slack announcements to point to the correct release branches [#6995](https://github.com/sourcegraph/cody/pull/6995)
- Bump package version and update changelog for 1.66 [#6971](https://github.com/sourcegraph/cody/pull/6971)
- Add support for milestone branch labels for backports [#6880](https://github.com/sourcegraph/cody/pull/6880)
- Give release scripts consistent names & some clean up [#6879](https://github.com/sourcegraph/cody/pull/6879)
- Bump package version and update changelog for 1.64 [#6876](https://github.com/sourcegraph/cody/pull/6876)

#### Others

- Remove hard-coded 'deep-cody' and replace with constant [#7019](https://github.com/sourcegraph/cody/pull/7019)
- Report metadata about search result context items separately [#6951](https://github.com/sourcegraph/cody/pull/6951)

### Reverts

- Revert "Revert commits 9719dc4, 1c16f35, 1ed8392, 03c93f9 [#-1](https://github.com/sourcegraph/cody/pull/6788)

## 1.66.1

### Fixed

- AutoEdits
  - fix(auto-edit): fix the false notification for auto-edit non eligibility [pull/7002](https://github.com/sourcegraph/cody/pull/7002)

## 1.66.0

### Added

- Support for Enterprise Starter

  - chore(ES): fix cta typo [pull/6856](https://github.com/sourcegraph/cody/pull/6856)
  - chore(ES): update CTAs and eligibility logic [pull/6803](https://github.com/sourcegraph/cody/pull/6803)

- Chat
  - fix: added extension banner to web [pull/6757](https://github.com/sourcegraph/cody/pull/6757)

### Fixed

- AutoEdits

  - fix(auto-edit): fix the cody status bar with new suggestion mode [pull/6691](https://github.com/sourcegraph/cody/pull/6691)
  - fix(auto-edit): fix temperature value to be low for output consistency [pull/6853](https://github.com/sourcegraph/cody/pull/6853)
  - feat(auto-edit): fix the temperature value regression with the auto-edit [pull/6848](https://github.com/sourcegraph/cody/pull/6848)

- Chat

  - fix: handle missing spaces around @ mentions in cody chat [pull/6842](https://github.com/sourcegraph/cody/pull/6842)
  - fix: define all base64 characters [pull/6837](https://github.com/sourcegraph/cody/pull/6837)
  - fix(models): ensure Tool Cody is only added when enabled [pull/6753](https://github.com/sourcegraph/cody/pull/6753)

- Authentication

  - Reverted various recent changes related to sign-in (commits 9719dc4, 1c16f35, 1ed8392, 03c93f9) to improve stability [pull/6788](https://github.com/sourcegraph/cody/pull/6788)

- Telemetry & Metrics
  - Fix OpenTelemetryService initialization+observables code and fix the span closure of Chat Spans [pull/6807](https://github.com/sourcegraph/cody/pull/6807)
  - fix(telemetry): add billing metadata to `onebox` events [pull/6802](https://github.com/sourcegraph/cody/pull/6802)

### Changed

- Branding & Marketing

  - [Backport M66] chore(marketing): Update marketplace and in product logos [pull/6970](https://github.com/sourcegraph/cody/pull/6970)
  - chore(marketing): update listing description [pull/6862](https://github.com/sourcegraph/cody/pull/6862)

- Chat
  - chore(client): update display name for agentic model [pull/6827](https://github.com/sourcegraph/cody/pull/6827)
  - Make Play Button stateful and remove intent toggle [pull/6833](https://github.com/sourcegraph/cody/pull/6833)
  - omnibox: open results locally if possible [pull/6781](https://github.com/sourcegraph/cody/pull/6781)
  - mention menu: migrate from codicon to lucide [pull/6780](https://github.com/sourcegraph/cody/pull/6780)
  - fix: remove code search button [pull/6855](https://github.com/sourcegraph/cody/pull/6855)

## 1.64.0

Introducing Sourcegraph’s AI coding agents: built to automate repetitive tasks so your developers can focus on innovation. Learn more about our vision for the future [here](https://sourcegraph.com/blog/introducing-enterprise-ai-agents).

### Added

- Release Omnibox: remove feature flag [pull/6849](https://github.com/sourcegraph/cody/pull/6849)
- omnibox: open results locally if possible [pull/6799](https://github.com/sourcegraph/cody/pull/6799)
- omnibox: add callout for results from other repos [pull/6732](https://github.com/sourcegraph/cody/pull/6732)
- omnibox: link file path to the line of the first match [pull/6705](https://github.com/sourcegraph/cody/pull/6705)
- feat: omnibox cheatsheet [pull/6676](https://github.com/sourcegraph/cody/pull/6676)
- omnibox: add "Did you mean" notice [pull/6655](https://github.com/sourcegraph/cody/pull/6655)
- feat(auth): Allow workspace to pre-populate URL for quick sign-in (#6653) [pull/6817](https://github.com/sourcegraph/cody/pull/6817)
- Support endpoint param in auth flow (workspaces vscode sign-in flow) [pull/6742](https://github.com/sourcegraph/cody/pull/6742)
- feat: at mentions for prompt templates editor [pull/6638](https://github.com/sourcegraph/cody/pull/6638)

### Fixed

- fix(auto-edit): fix temperature value to be low for output consistency [pull/6854](https://github.com/sourcegraph/cody/pull/6854)
- feat(auto-edit): fix the temperature value regression with the auto-edit [pull/6851](https://github.com/sourcegraph/cody/pull/6851)
- chore(audo-edit): fix the illegal line runtime error [pull/6727](https://github.com/sourcegraph/cody/pull/6727)
- feat(autoedit): Fix blockify range logic for tab indentation [pull/6701](https://github.com/sourcegraph/cody/pull/6701)
- fix: handle missing spaces around @ mentions in cody chat [pull/6843](https://github.com/sourcegraph/cody/pull/6843)
- fix: improved support for special characters around @ mentions [pull/6814](https://github.com/sourcegraph/cody/pull/6814)
- fix: define all base64 characters [pull/6840](https://github.com/sourcegraph/cody/pull/6840)
- fix(telemetry): add billing metadata to `onebox` events [pull/6822](https://github.com/sourcegraph/cody/pull/6822)
- Fix intent telemetry (#6779) [pull/6795](https://github.com/sourcegraph/cody/pull/6795)
- Disable Intent Detection if Code Search Disabled [pull/6754](https://github.com/sourcegraph/cody/pull/6754)
- fix(models): ensure Tool Cody is only added when enabled [pull/6758](https://github.com/sourcegraph/cody/pull/6758)
- fix(omnibox): add conditional rendering to buttons [pull/6731](https://github.com/sourcegraph/cody/pull/6731)
- fix(omnibox): fix available filters when deselecting [pull/6717](https://github.com/sourcegraph/cody/pull/6717)
- Various styling updates [pull/6723](https://github.com/sourcegraph/cody/pull/6723)
- fix/context: Link to helpful resource when current repo not indexed in non-dotcom [pull/6695](https://github.com/sourcegraph/cody/pull/6695)
- Update UI and fix intent bug [pull/6720](https://github.com/sourcegraph/cody/pull/6720)
- fix: Search results in Cody visual update [pull/6714](https://github.com/sourcegraph/cody/pull/6714)
- fix/agentic-context: Reveal hidden switch in context popup [pull/6694](https://github.com/sourcegraph/cody/pull/6694)
- fix: add z-index to quick start modal [pull/6711](https://github.com/sourcegraph/cody/pull/6711)
- fix: only log on open file [pull/6704](https://github.com/sourcegraph/cody/pull/6704)
- Fix pointer cursor displaying on line numbers in search results [pull/6681](https://github.com/sourcegraph/cody/pull/6681)
- Fixing Css logic to correctly show rate limit banners in the correct place [pull/6464](https://github.com/sourcegraph/cody/pull/6464)
- fix: unicode support, remove current repo mention [pull/6688](https://github.com/sourcegraph/cody/pull/6688)
- fix/intent: Insert detected intent scores into telemetry event metadata in acceptable format [pull/6686](https://github.com/sourcegraph/cody/pull/6686)
- fix: Intent handling logic fixes [pull/6637](https://github.com/sourcegraph/cody/pull/6637)
- fix(auto-edit): fix the feature name [pull/6682](https://github.com/sourcegraph/cody/pull/6682)
- fix/accounts: Do not prefill the dotcom URL in the Enterprise login field [pull/6418](https://github.com/sourcegraph/cody/pull/6418)
- chore/webview: Fix webview-extension RPC logging to contain message payloads [pull/6671](https://github.com/sourcegraph/cody/pull/6671)
- fix(agentic-chat): fix prompt-mixin for deep-cody agent [pull/6654](https://github.com/sourcegraph/cody/pull/6654)

### Changed

- chore(marketing): update listing description [pull/6874](https://github.com/sourcegraph/cody/pull/6874)
- chore(ES): fix cta typo [pull/6857](https://github.com/sourcegraph/cody/pull/6857)
- chore(client): update display name for agentic model [pull/6828](https://github.com/sourcegraph/cody/pull/6828)
- chore(ES): update CTAs and eligibility logic [pull/6825](https://github.com/sourcegraph/cody/pull/6825)
- refactor(agentic chat): move into model dropdown [pull/6718](https://github.com/sourcegraph/cody/pull/6718)
- refactor(agentic-context): update status messaging [pull/6670](https://github.com/sourcegraph/cody/pull/6670)
- Refactor external auth providers to re-generate headers on demand [pull/6687](https://github.com/sourcegraph/cody/pull/6687)
- chore(autocomplete): use the correct output channel label [pull/6709](https://github.com/sourcegraph/cody/pull/6709)
- omnibox: remove code search external link [pull/6706](https://github.com/sourcegraph/cody/pull/6706)
- chore(audo-edit): encapsulate prompt components [pull/6672](https://github.com/sourcegraph/cody/pull/6672)
- chore(audo-edit): add backward compatible setting value [pull/6673](https://github.com/sourcegraph/cody/pull/6673)
- chore(webviews): remove teams upgrade notice [pull/6651](https://github.com/sourcegraph/cody/pull/6651)

## 1.62.0

### Added

- feat(audo-edit): target vim normal mode only [pull/6647](https://github.com/sourcegraph/cody/pull/6647)
- feat(autoedit): Add telemetry and accept behaviour to E2E tests [pull/6575](https://github.com/sourcegraph/cody/pull/6575)
- feat(auto-edit): fix problem with vim extension supressing the tab [pull/6640](https://github.com/sourcegraph/cody/pull/6640)
- feat(auto-edits): fix the suffix duplication on inline accept [pull/6583](https://github.com/sourcegraph/cody/pull/6583)
- feat(auto-edits): fix tab not working when decorations are triggered on conflicting decorations [pull/6581](https://github.com/sourcegraph/cody/pull/6581)
- feat(auto-edit): improve error logging [pull/6609](https://github.com/sourcegraph/cody/pull/6609)
- feat(autoedits): Correctly produce decorations for files that use Tab indentation [pull/6617](https://github.com/sourcegraph/cody/pull/6617)
- feat(autoedit): Add more E2E test scenarios [pull/6573](https://github.com/sourcegraph/cody/pull/6573)
- feat(auto-edits): add test case for setting context [pull/6592](https://github.com/sourcegraph/cody/pull/6592)
- feat(auto-edits): fix the partial decoration issue when not enough lines in the editor [pull/6582](https://github.com/sourcegraph/cody/pull/6582)
- feat(autoedit): E2E tests, adjust color threshold [pull/6616](https://github.com/sourcegraph/cody/pull/6616)
- feat(auto-edits): add telemetry for auto-edits notification [pull/6594](https://github.com/sourcegraph/cody/pull/6594)
- feat(audoedit): update billing categories [pull/6591](https://github.com/sourcegraph/cody/pull/6591)
- feat(agentic context): add agentic context component [pull/6598](https://github.com/sourcegraph/cody/pull/6598)
- refactor(agentic-context): rename experimental feature flags [pull/6644](https://github.com/sourcegraph/cody/pull/6644)
- feat(agentic-context): disable setting by default [pull/6641](https://github.com/sourcegraph/cody/pull/6641)
- feat(webviews): add Sourcegraph Workspaces CTA [pull/6604](https://github.com/sourcegraph/cody/pull/6604)
- refactor(webviews): remove "Upgrade to Team" from context menu [pull/6621](https://github.com/sourcegraph/cody/pull/6621)
- chore/build: Do not complain about GITHUB_ENV when building locally [pull/6586](https://github.com/sourcegraph/cody/pull/6586)
- Add disabled to recording modes [pull/6615](https://github.com/sourcegraph/cody/pull/6615)
- bench/context: Cache repo IDs [pull/6569](https://github.com/sourcegraph/cody/pull/6569)

### Fixed

- chore(audo-edit): fix the illegal line runtime error [pull/6729](https://github.com/sourcegraph/cody/pull/6729)
- chore(audo-edit): add backward compatible setting value [pull/6674](https://github.com/sourcegraph/cody/pull/6674)
- fix(autoedits): Fix E2E tests on main [pull/6576](https://github.com/sourcegraph/cody/pull/6576)
- fix(agentic chat): exclude deep-cody prompt for o1 models (#6725) [pull/6733](https://github.com/sourcegraph/cody/pull/6733)
- fix(agentic-context): update search tool prompt and examples [pull/6632](https://github.com/sourcegraph/cody/pull/6632)
- feat(agentic-context): add feature flag for session usage limit [pull/6623](https://github.com/sourcegraph/cody/pull/6623)
- fix(webview): reorder human editor menu buttons [pull/6660](https://github.com/sourcegraph/cody/pull/6660)
- fix(release): fix generate changelog template string [pull/6728](https://github.com/sourcegraph/cody/pull/6728)
- fix: changelog generator with titles instead of changelog entries [pull/6712](https://github.com/sourcegraph/cody/pull/6712)
- fix: Hide search result checkboxes instead of disabling them [pull/6568](https://github.com/sourcegraph/cody/pull/6568)
- Fix repo name resolver cache miss due to using separate RepoNameResol… [pull/6570](https://github.com/sourcegraph/cody/pull/6570)
- fix(cody): fix chat context review logic [pull/6602](https://github.com/sourcegraph/cody/pull/6602)
- fix/context: Nit, remove duplicate "this" from Agentic context popover [pull/6633](https://github.com/sourcegraph/cody/pull/6633)
- Fix: Can actually run the changelog github action [pull/6645](https://github.com/sourcegraph/cody/pull/6645)

### Changed

- chore(audoedit): ensure consistent auto-edit name [pull/6611](https://github.com/sourcegraph/cody/pull/6611)
- chore(audoedit): simplify output channel logger [pull/6610](https://github.com/sourcegraph/cody/pull/6610)
- refactor(agentic context): update agent context settings [pull/6596](https://github.com/sourcegraph/cody/pull/6596)
- feat(agentic chat): showing error for toolbox settings status [pull/6579](https://github.com/sourcegraph/cody/pull/6579)
- chore/release: Bump package version and update changelog for 1.60 [pull/6666](https://github.com/sourcegraph/cody/pull/6666)
- Fix: Changelog generator action frfr no cap [pull/6659](https://github.com/sourcegraph/cody/pull/6659)
- Improve reporting auth errors [pull/6639](https://github.com/sourcegraph/cody/pull/6639)
- Open remote files locally in VSCode [pull/6475](https://github.com/sourcegraph/cody/pull/6475)
- Make sure precomputed intent is not stale [pull/6572](https://github.com/sourcegraph/cody/pull/6572)
- feat: changelog generation + version update action [pull/6597](https://github.com/sourcegraph/cody/pull/6597)
- External Authentication Providers Support for Cody [pull/6526](https://github.com/sourcegraph/cody/pull/6526)
- NLS: escape backslashes in query string [pull/6585](https://github.com/sourcegraph/cody/pull/6585)
- Bench: add option to disable Polly [pull/6557](https://github.com/sourcegraph/cody/pull/6557)
- Simplify jetbrains account management [pull/6558](https://github.com/sourcegraph/cody/pull/6558)
- Allow to force usage of pre-defined endpoint [pull/6574](https://github.com/sourcegraph/cody/pull/6574)
- Implement showWindowsMessage in JetBrains [pull/6577](https://github.com/sourcegraph/cody/pull/6577)
- chore/release: Remove the changelog section from the PR template. [pull/6470](https://github.com/sourcegraph/cody/pull/6470)
- Update Cody Web 0.22.0 [pull/6578](https://github.com/sourcegraph/cody/pull/6578)
- Pass query as 'content' in NLS bench [pull/6565](https://github.com/sourcegraph/cody/pull/6565)
- chore/release: Bump package version and update changelog for 1.58 [pull/6566](https://github.com/sourcegraph/cody/pull/6566)

### Uncategorized

## 1.60.0

### Added

- feat(agentic context): add agentic context component [pull/6598](https://github.com/sourcegraph/cody/pull/6598)
- feat(webviews): add Sourcegraph Workspaces CTA [pull/6604](https://github.com/sourcegraph/cody/pull/6604)
- feat(audo-edit): target vim normal mode only [pull/6647](https://github.com/sourcegraph/cody/pull/6647)
- Open remote files locally in VSCode [pull/6475](https://github.com/sourcegraph/cody/pull/6475)

### Fixed

- fix(webview): reorder human editor menu buttons [pull/6660](https://github.com/sourcegraph/cody/pull/6660)
- feat(auto-edit): fix problem with vim extension supressing the tab [pull/6640](https://github.com/sourcegraph/cody/pull/6640)
- Fix: Can actually run the changelog github action [pull/6645](https://github.com/sourcegraph/cody/pull/6645)
- External Authentication Providers Support for Cody [pull/6526](https://github.com/sourcegraph/cody/pull/6526)
- feat(autoedits): Correctly produce decorations for files that use Tab indentation [pull/6617](https://github.com/sourcegraph/cody/pull/6617)
- chore/build: Do not complain about GITHUB_ENV when building locally [pull/6586](https://github.com/sourcegraph/cody/pull/6586)
- fix(agentic-context): update search tool prompt and examples [pull/6632](https://github.com/sourcegraph/cody/pull/6632)
- fix(cody): fix chat context review logic [pull/6602](https://github.com/sourcegraph/cody/pull/6602)
- feat(auto-edits): fix the partial decoration issue when not enough lines in the editor [pull/6582](https://github.com/sourcegraph/cody/pull/6582)
- Allow to force usage of pre-defined endpoint [pull/6574](https://github.com/sourcegraph/cody/pull/6574)
- feat(auto-edits): fix the suffix duplication on inline accept [pull/6583](https://github.com/sourcegraph/cody/pull/6583)
- feat(auto-edits): fix tab not working when decorations are triggered on conflicting decorations [pull/6581](https://github.com/sourcegraph/cody/pull/6581)
- feat(agentic chat): showing error for toolbox settings status [pull/6579](https://github.com/sourcegraph/cody/pull/6579)
- Pass query as 'content' in NLS bench [pull/6565](https://github.com/sourcegraph/cody/pull/6565)
- fix: Hide search result checkboxes instead of disabling them [pull/6568](https://github.com/sourcegraph/cody/pull/6568)
- Fix repo name resolver cache miss due to using separate RepoNameResol… [pull/6570](https://github.com/sourcegraph/cody/pull/6570)

### Changed

- Improve reporting auth errors [pull/6639](https://github.com/sourcegraph/cody/pull/6639)
- feat(autoedit): Add telemetry and accept behaviour to E2E tests [pull/6575](https://github.com/sourcegraph/cody/pull/6575)
- Make sure precomputed intent is not stale [pull/6572](https://github.com/sourcegraph/cody/pull/6572)
- refactor(agentic-context): rename experimental feature flags [pull/6644](https://github.com/sourcegraph/cody/pull/6644)
- feat(agentic-context): disable setting by default [pull/6641](https://github.com/sourcegraph/cody/pull/6641)
- refactor(webviews): remove "Upgrade to Team" from context menu [pull/6621](https://github.com/sourcegraph/cody/pull/6621)
- feat(auto-edit): improve error logging [pull/6609](https://github.com/sourcegraph/cody/pull/6609)
- feat(agentic-context): add feature flag for session usage limit [pull/6623](https://github.com/sourcegraph/cody/pull/6623)
- feat(auto-edits): add telemetry for auto-edits notification [pull/6594](https://github.com/sourcegraph/cody/pull/6594)
- refactor(agentic context): update agent context settings [pull/6596](https://github.com/sourcegraph/cody/pull/6596)
- Add disabled to recording modes [pull/6615](https://github.com/sourcegraph/cody/pull/6615)
- bench/context: Cache repo IDs [pull/6569](https://github.com/sourcegraph/cody/pull/6569)
- chore(audoedit): ensure consistent auto-edit name [pull/6611](https://github.com/sourcegraph/cody/pull/6611)
- chore(audoedit): simplify output channel logger [pull/6610](https://github.com/sourcegraph/cody/pull/6610)
- NLS: escape backslashes in query string [pull/6585](https://github.com/sourcegraph/cody/pull/6585)
- feat(audoedit): update billing categories [pull/6591](https://github.com/sourcegraph/cody/pull/6591)

## 1.58.0

### Added

- feat(context-agent): tool status callbacks and process support [pull/6451](https://github.com/sourcegraph/cody/pull/6451)
- feat(nls): Add Cody bench command for NLS [pull/6497](https://github.com/sourcegraph/cody/pull/6497)

### Fixed

- fix(release): add $ variable invocation [pull/6509](https://github.com/sourcegraph/cody/pull/6509)
- fix/editor: Ask Cody to Fix no longer throws exceptions in TypeScript files [pull/6473](https://github.com/sourcegraph/cody/pull/6473)
- fix(context-agent): add status callbacks back [pull/6479](https://github.com/sourcegraph/cody/pull/6479)
- chore(security): Fix closed events for sast scan [pull/6512](https://github.com/sourcegraph/cody/pull/6512)
- fix: Move BigQuery insertion after release step [pull/6477](https://github.com/sourcegraph/cody/pull/6477)
- chore(chat): Adding fixing save chat session overwriting [pull/6457](https://github.com/sourcegraph/cody/pull/6457)

### Changed

- update `billingMetadata` for failed/disconnected type of events [pull/6254](https://github.com/sourcegraph/cody/pull/6254)
- feat(nls): add relevant repo boost [pull/6502](https://github.com/sourcegraph/cody/pull/6502)
- chore(chat): Decompose ChatController.sendChat into handlers for different request types [pull/6469](https://github.com/sourcegraph/cody/pull/6469)
- feat(autoedit): track notebook for auto-edit [pull/6449](https://github.com/sourcegraph/cody/pull/6449)
- chore(audoedit): consistent use of the output channel logger [pull/6472](https://github.com/sourcegraph/cody/pull/6472)
- feat(audoedit): ensure inline completions are also hidden on dismiss [pull/6465](https://github.com/sourcegraph/cody/pull/6465)
- feat(audoedit): remove the auto edit experimental command [pull/6471](https://github.com/sourcegraph/cody/pull/6471)
- feat(logging): Add interactionId to header of Cody Client requests (CODY-4117) [pull/6450](https://github.com/sourcegraph/cody/pull/6450)
- chore(audoedit): decouple `codeToReplaceData` from `getPromptForModelType` [pull/6474](https://github.com/sourcegraph/cody/pull/6474)

## 1.56.0

### Added

- auto-edit e2e tests [pull/6425](https://github.com/sourcegraph/cody/pull/6425)
- feat(audoedit): extract auto-edit config from the provider [pull/6460](https://github.com/sourcegraph/cody/pull/6460)
- autoedit: address dogfooding feedback [pull/6454](https://github.com/sourcegraph/cody/pull/6454)
- feat(audoedit): implement basic analytics logger [pull/6430](https://github.com/sourcegraph/cody/pull/6430)
- feat(onebox): Use new prompt editor when onebox is enabled [pull/6288](https://github.com/sourcegraph/cody/pull/6288)
- feat(network): Support for NO_PROXY (CODY_NODE_NO_PROXY) environment variable [pull/6555](https://github.com/sourcegraph/cody/pull/6555)

### Fixed

- feat(logging): Add interactionId to header of Cody Client requests (CODY-4117) [pull/6450](https://github.com/sourcegraph/cody/pull/6450)
- fix(autoedit): fix shrink prediction logic [pull/6404](https://github.com/sourcegraph/cody/pull/6404)
- fix(modelSelectField): missing overflow scrollbar when there isn't space to show entire list [pull/6423](https://github.com/sourcegraph/cody/pull/6423)
- fix: remove trailing spaces from extracted query [pull/6432](https://github.com/sourcegraph/cody/pull/6432)
- Fix small screen filters panel opening [pull/6420](https://github.com/sourcegraph/cody/pull/6420)
- fix diff rendering for auto-edit [pull/6410](https://github.com/sourcegraph/cody/pull/6410)
- chore(agent): disable flaky test [pull/6429](https://github.com/sourcegraph/cody/pull/6429)
- fix: Prevent style leaks in cody web [pull/6427](https://github.com/sourcegraph/cody/pull/6427)
- chore(onebox/telemetry): add `billingMetadata` [pull/6426](https://github.com/sourcegraph/cody/pull/6426)
- fix(audoedit): fix renderer testing command [pull/6408](https://github.com/sourcegraph/cody/pull/6408)
- chore/release: Bump package version and update changelog for 1.52 [pull/6414](https://github.com/sourcegraph/cody/pull/6414)
- fix(logging): removed unecessary logging when requests are aborted [pull/6555](https://github.com/sourcegraph/cody/pull/6555)
- fix(network): removed dangling request handlers on network requests which could potentially cause memory leaks [pull/6555](https://github.com/sourcegraph/cody/pull/6555)

### Changed

- feat(prompt-editor): Add new ProseMirror-based implementation [pull/6272](https://github.com/sourcegraph/cody/pull/6272)
- refactor(user-menu): improve display of user menu [pull/6389](https://github.com/sourcegraph/cody/pull/6389)
- Use omnibox ff for intent detector [pull/6419](https://github.com/sourcegraph/cody/pull/6419)
- Enable repo boost for inactive editor [pull/6443](https://github.com/sourcegraph/cody/pull/6443)
- include symbol matches in search results [pull/6441](https://github.com/sourcegraph/cody/pull/6441)
- improved network logging with less verbose output [pull/6555](https://github.com/sourcegraph/cody/pull/6555)

## 1.54.0

### Added

- Auto Edit: recent edit based [pull/6383](https://github.com/sourcegraph/cody/pull/6383)
- Auto Edit: add heuristic to filter suggestion [pull/6396](https://github.com/sourcegraph/cody/pull/6396)
- Prompt Library: add keyboard nav for prompts library [pull/6388](https://github.com/sourcegraph/cody/pull/6388)
- Accounts: prevent PLG login methods for enterprise users [pull/6182](https://github.com/sourcegraph/cody/pull/6182)

### Fixed

- Omnibox: remove trailing spaces from extracted query [pull/6440](https://github.com/sourcegraph/cody/pull/6440)
- Cody Web: Fixes paper cuts for Cody Web 0.20.0 cut [pull/6412](https://github.com/sourcegraph/cody/pull/6412)
- Omnibox: Hide header labels in narrow chat [pull/6407](https://github.com/sourcegraph/cody/pull/6407)
- Prompt Library: Styling updates to prompt list [pull/6409](https://github.com/sourcegraph/cody/pull/6409)
- Omnibox: Do not focus editor when inserting/updating search results context [pull/6385](https://github.com/sourcegraph/cody/pull/6385)
- Webviews: Fix small screen filters panel opening & change sticky intent behaviour [pull/6434](https://github.com/sourcegraph/cody/pull/6434)
- Auto Edit: do not render removal decorations twice [pull/6405](https://github.com/sourcegraph/cody/pull/6405)
- Auto Edit: fix inline completion extraction when deletion [pull/6381](https://github.com/sourcegraph/cody/pull/6381)

### Changed

- Omnibox: Enable repo boost for inactive editor [pull/6444](https://github.com/sourcegraph/cody/pull/6444)
- Omnibox: include symbol matches in search results [pull/6442](https://github.com/sourcegraph/cody/pull/6442)
- Omnibox: Use omnibox ff for intent detector [pull/6421](https://github.com/sourcegraph/cody/pull/6421)
- Omnibox: boost current repo [pull/6402](https://github.com/sourcegraph/cody/pull/6402)
- Cody Web: Filters layout for Cody Web [pull/6382](https://github.com/sourcegraph/cody/pull/6382)
- Auto Edit: dismiss suggestions on selection change [pull/6406](https://github.com/sourcegraph/cody/pull/6406)
- Auto Edit: disable shrink suffix logic [pull/6398](https://github.com/sourcegraph/cody/pull/6398)

#### Tracing & Logging

- Telemetry: update `billingMetadata` [pull/6367](https://github.com/sourcegraph/cody/pull/6367)
- Omnibox: Collect telemetry [pull/6394](https://github.com/sourcegraph/cody/pull/6394)

## 1.52.0

### Added

### Fixed

### Changed

- disable command execution by default [pull/6296](https://github.com/sourcegraph/cody/pull/6296)

#### Tracing & Logging

- Remove legacy back-compat (#6265) [pull/6276](https://github.com/sourcegraph/cody/pull/6276)
- Adding Distributed Tracing and Smart Apply to cody [pull/6178](https://github.com/sourcegraph/cody/pull/6178)

### Experimental Features

- Deep Cody: remove setting Deep Cody as default model. [pull/6308](https://github.com/sourcegraph/cody/pull/6308)

## 1.50.0

### Added

- Webviews: add new CTA for Sourcegraph Teams [pull/6245](https://github.com/sourcegraph/cody/pull/6245)
- "Explain command" in context (existing conversation) [pull/5986](https://github.com/sourcegraph/cody/pull/5986)

### Fixed

- fix detecting the fireworks model [pull/6239](https://github.com/sourcegraph/cody/pull/6239)
- Fix prompt execution in existing chat [pull/6226](https://github.com/sourcegraph/cody/pull/6226)
- suppress emission of characters on emacs keybindings [pull/6210](https://github.com/sourcegraph/cody/pull/6210)
- use local storage to save repo accessibility [pull/6193](https://github.com/sourcegraph/cody/pull/6193)

### Experimental Features

- Deep Cody: wildcard should not be ignored in allow list for shell context [pull/6256](https://github.com/sourcegraph/cody/pull/6256)
- Deep Cody: loading message for context fetching step [pull/6241](https://github.com/sourcegraph/cody/pull/6241)
- Deep Cody: remove setting user model preferences [pull/6211](https://github.com/sourcegraph/cody/pull/6211)

### Changed

- Auth: new enterprise sign-in flow and improve auth UI [pull/6198](https://github.com/sourcegraph/cody/pull/6198)
- Make signout as non-blocking as possible [pull/6207](https://github.com/sourcegraph/cody/pull/6207)
- use chat client for s2 [pull/6219](https://github.com/sourcegraph/cody/pull/6219)

#### Tracing & Logging

- Telemetry support for Sourcegraph versions older than [5.2.5 (released 12/2023)](https://github.com/sourcegraph/sourcegraph-public-snapshot/releases/tag/v5.2.5) has been removed [pull/6265](https://github.com/sourcegraph/cody/pull/6265)
- Update tracing for chat [pull/6230](https://github.com/sourcegraph/cody/pull/6230)

#### Build & Release

- [Backport vscode-v1.50.x] fix(release): remove brackets around version number [pull/6311](https://github.com/sourcegraph/cody/pull/6311)
- chore/build: Merge sourcegraph/jetbrains into the Cody repo [pull/6247](https://github.com/sourcegraph/cody/pull/6247)
- Improve release process with slack notifications and automated branching [pull/6218](https://github.com/sourcegraph/cody/pull/6218)
- Add separate command to run cody web in standalone mode [pull/6227](https://github.com/sourcegraph/cody/pull/6227)
- Update changelog.sh instructions and add cody-core to backports [pull/6217](https://github.com/sourcegraph/cody/pull/6217)

## 1.48.1

### Added

### Fixed

- backport/vscode/1.48: chore(telemetry): remove legacy back-compat (#6265) [pull/6275](https://github.com/sourcegraph/cody/pull/6275)

### Changed

### Uncategorized

## 1.48.0

### Added

- Add account switcher component in the Accounts webview tab [pull/6159](https://github.com/sourcegraph/cody/pull/6159)
- Prompts Picker [pull/6160](https://github.com/sourcegraph/cody/pull/6160)
- Add Sourcegraph CLI installation description to README.md [pull/6170](https://github.com/sourcegraph/cody/pull/6170)
- Fetch standard prompts from remote prompts API [pull/6150](https://github.com/sourcegraph/cody/pull/6150)

#### Autoedits

- feat(autoedit): combine inline completion provider and selection change [pull/6147](https://github.com/sourcegraph/cody/pull/6147)
- feat(autoedit): use code completion feature for auto-edit [pull/6161](https://github.com/sourcegraph/cody/pull/6161)
- add 10 sec diff for auto-edit experiments [pull/6191](https://github.com/sourcegraph/cody/pull/6191)
- adding line level diff strategy for the recent edits diff calculation [pull/6188](https://github.com/sourcegraph/cody/pull/6188)
- Hitesh/add diff stratagies [pull/6190](https://github.com/sourcegraph/cody/pull/6190)
- Hitesh/add diff strategies logging [pull/6189](https://github.com/sourcegraph/cody/pull/6189)

### Fixed

- [Backport vscode-v1.48.x] Make signout as non-blocking as possible [pull/6213](https://github.com/sourcegraph/cody/pull/6213)
- do not block chat panel initialization or human message handling on current session save [pull/6186](https://github.com/sourcegraph/cody/pull/6186)
- patch highlight.js to address memory leak [pull/6146](https://github.com/sourcegraph/cody/pull/6146)
- fix(api): Set API identifying headers on all HTTP requests (CODY-4209) [pull/6102](https://github.com/sourcegraph/cody/pull/6102)

#### Autoedits

- feat(autoedit): fix cursor jumping issue [pull/6156](https://github.com/sourcegraph/cody/pull/6156)
- fix(autoedit): fix suffix matching logic [pull/6171](https://github.com/sourcegraph/cody/pull/6171)
- fix(audoedit): fix the scrollbar issue [pull/6158](https://github.com/sourcegraph/cody/pull/6158)
- fix added lines sorting in auto-edit [pull/6155](https://github.com/sourcegraph/cody/pull/6155)

### Changed

- Add default value for 'search.useIgnoreFiles' in agent config [pull/6202](https://github.com/sourcegraph/cody/pull/6202)
- Deep Cody: Move shell context behind feature flag [pull/6199](https://github.com/sourcegraph/cody/pull/6199)
- Add built-in prompts related fields to prompt select analytic event [pull/6180](https://github.com/sourcegraph/cody/pull/6180)

#### Autoedits

- feat(autoedit): restrict autoedit to vscode [pull/6184](https://github.com/sourcegraph/cody/pull/6184)
- chore(audoedit): test diff logic with different new line chars [pull/6176](https://github.com/sourcegraph/cody/pull/6176)
- chore(audoedit): simplify diff utils and renderer data structures [pull/6172](https://github.com/sourcegraph/cody/pull/6172)
- feat(autoedit): refactor renderer code to simplify iteration on decor… [pull/6163](https://github.com/sourcegraph/cody/pull/6163)

### Build & Test

- [Backport vscode-v1.48.x] remove last line in backport GHA [pull/6205](https://github.com/sourcegraph/cody/pull/6205)
- remove last line in backport GHA [pull/6204](https://github.com/sourcegraph/cody/pull/6204)
- add changelog templating and tooling [pull/6195](https://github.com/sourcegraph/cody/pull/6195)
- Bench: make sure to respect CODY_RECORDING_MODE [pull/6167](https://github.com/sourcegraph/cody/pull/6167)
- Revert "Update backport.yml (#6137)" [pull/6164](https://github.com/sourcegraph/cody/pull/6164)

## 1.46.0

### Added

### Fixed

### Changed

- Chat: Update keyboard shortcuts:
  - Removed `Shift+Ctrl+L` (previously created a new chat) due to conflict with Windows default shortcut
  - Updated `Shift+Alt+L` to create a new chat when the focus is not in the editor. When the focus is in the editor, the behavior remains unchanged (the current selection is added to the chat context).

### Uncategorized

- [Backport vscode-v1.46.x] Add built-in prompts related fields to prompt select analytic event [pull/6181](https://github.com/sourcegraph/cody/pull/6181)
- [Backport vscode-v1.46.x] Fetch standard prompts from remote prompts API [pull/6166](https://github.com/sourcegraph/cody/pull/6166)
- [Backport vscode-v1.46.x] Prompts Picker [pull/6168](https://github.com/sourcegraph/cody/pull/6168)
- [Backport vscode-v1.46.x] VS Code: Release v1.44.0 [pull/6169](https://github.com/sourcegraph/cody/pull/6169)
- feat(autoedit): fix cursor jumping issue [pull/6156](https://github.com/sourcegraph/cody/pull/6156)
- only activate auto-edit command when experimental setting is enabled [pull/6157](https://github.com/sourcegraph/cody/pull/6157)
- Chat: ensure ScrollDown button only takes it's width [pull/6143](https://github.com/sourcegraph/cody/pull/6143)
- autoedit: Add feature flag to enable/disable autoedit feature [pull/6145](https://github.com/sourcegraph/cody/pull/6145)
- remove ctrl+shift+L shortcut and update shift+alt+L shortcut [pull/6148](https://github.com/sourcegraph/cody/pull/6148)
- Fix various JetBrains styling issues [pull/6153](https://github.com/sourcegraph/cody/pull/6153)
- Autoedits Context Improvements [pull/6141](https://github.com/sourcegraph/cody/pull/6141)
- Better rendering for auto-edit [pull/6132](https://github.com/sourcegraph/cody/pull/6132)
- Chat: context cell improvements [pull/6115](https://github.com/sourcegraph/cody/pull/6115)
- Fix inline-edit prompts chat building [pull/6003](https://github.com/sourcegraph/cody/pull/6003)
- Cody Web: Polish cody web Prompts [pull/6135](https://github.com/sourcegraph/cody/pull/6135)
- Simplify protocol's TelemetryEvent [pull/6144](https://github.com/sourcegraph/cody/pull/6144)
- Use font size variable providd by JetBrains in webview [pull/6134](https://github.com/sourcegraph/cody/pull/6134)
- Update backport.yml [pull/6137](https://github.com/sourcegraph/cody/pull/6137)
- fix(release): Update backport action to override team_reviews [pull/6136](https://github.com/sourcegraph/cody/pull/6136)
- autoedit: add speculative decoding [pull/6130](https://github.com/sourcegraph/cody/pull/6130)
- Fix for VSCode Marketplace description getting cut-off [pull/6098](https://github.com/sourcegraph/cody/pull/6098)
- Fix prompt name generation during prompts/commands migration [pull/6126](https://github.com/sourcegraph/cody/pull/6126)

## 1.44.0

### Added

### Fixed

### Changed

### Uncategorized

- Network: CA Cert loading fixes [pull/6101](https://github.com/sourcegraph/cody/pull/6101)
- feat(rel): add backport workflow [pull/6119](https://github.com/sourcegraph/cody/pull/6119)
- Cody Chat: fixed missing syntax highlighting of CSharp files and load only one copy of highlight.js in the WebView build [pull/6118](https://github.com/sourcegraph/cody/pull/6118)
- fix rendering issue on the same line for ghost text [pull/6120](https://github.com/sourcegraph/cody/pull/6120)
- chat input: '@' -> '@ Context' toolbar button [pull/6114](https://github.com/sourcegraph/cody/pull/6114)
- feat(edit): enable predicted outputs for gpt-4o models [pull/6116](https://github.com/sourcegraph/cody/pull/6116)
- Edit: prep for the gpt-4o-mini edit a/b test [pull/6110](https://github.com/sourcegraph/cody/pull/6110)
- Trigger autoedit on the cursor movements [pull/6112](https://github.com/sourcegraph/cody/pull/6112)
- Remove old test renderer [pull/6113](https://github.com/sourcegraph/cody/pull/6113)
- Add a command for testing auto-edit examples [pull/6108](https://github.com/sourcegraph/cody/pull/6108)
- Chat: brought back syntax highlighting for most common languages [pull/5953](https://github.com/sourcegraph/cody/pull/5953)
- Chat: brought back syntax highlighting for most common languages [pull/5874](https://github.com/sourcegraph/cody/pull/5874)
- Add a command for testing auto-edit examples [pull/6108](https://github.com/sourcegraph/cody/pull/6108)
- Fail hard on errors in input context bench CSV, remove unused column [pull/6107](https://github.com/sourcegraph/cody/pull/6107)
- Add more detailed results to context benchmark [pull/5992](https://github.com/sourcegraph/cody/pull/5992)
- Edit: collect more analytics data [pull/6095](https://github.com/sourcegraph/cody/pull/6095)
- fix indentation issue [pull/6103](https://github.com/sourcegraph/cody/pull/6103)
- Cody Web: Add support running prompts from consumer [pull/6081](https://github.com/sourcegraph/cody/pull/6081)
- fix recent edits context source [pull/6071](https://github.com/sourcegraph/cody/pull/6071)
- Hitesh/auto-edit improvements [pull/5956](https://github.com/sourcegraph/cody/pull/5956)
- Agent: disable the flaky edit test [pull/6093](https://github.com/sourcegraph/cody/pull/6093)
- VS Code: point releases to `./vscode/changelog.md` [pull/6080](https://github.com/sourcegraph/cody/pull/6080)
- Fix issue with merging configs [pull/6084](https://github.com/sourcegraph/cody/pull/6084)
- Deep Cody: skip query rewrite for search tool [pull/6082](https://github.com/sourcegraph/cody/pull/6082)
- chore/build: VSCode Insiders builds are manually triggered and automatically tagged [pull/6083](https://github.com/sourcegraph/cody/pull/6083)
- Deep Cody: remove TOOL context item after review [pull/6079](https://github.com/sourcegraph/cody/pull/6079)

## 1.42.0

Hey Cody users! For those who want to track detailed technical changes, we will be updating this changelog to provide more comprehensive updates on new features, improvements, and fixes. For major releases and announcements, check out our [public changelog](https://sourcegraph.com/changelog).

### Added

- Autocomplete: Enabled completions preloading on cursor movement. [pull/6043](https://github.com/sourcegraph/cody/pull/6043)
- Telemetry: Added `cody.debug.logCharacterCounters` for debugging. [pull/6057](https://github.com/sourcegraph/cody/pull/6057)

### Fixed

- Chat: This patch updates the chat keyboard shortcuts to be as follows, thereby avoiding the tendency to "double-add" a code snippet when using the `alt+L` shortcut:
  - `Alt+L`: between chat and editor (this is unchanged)
  - `Shift+Alt+L` (previously alt+L): add selection as context:
  - `Shift+Ctrl+L` (previously shift+alt+L): new chat
- Markdown files were not bundled in the VSIX leading to onboarding views not displaying or showing an error.
- Ensured that a correct http/https agent is loaded depending on endpoint protocol and that secureConnection correclty passes CA certs via [hpagent](https://github.com/delvedor/hpagent)

### Changed

- Networking: In addition to Node and user configured manual CA certs, we now automatically attempt to load CA certs in your system's trust store. This is done using [rustls](https://github.com/rustls/rustls) via a new [napi-rs](https://napi.rs/) library `lib/noxide`. This behaviour is enabled by default but can be diasabled by setting the `experimental.noxide.enabled` to `false` in your settings. Any issues loading the library will be logged to the usual error output channels and we will fallback to the previous behaviour. This will replace the previous method of loading system CA certs using shell commands or bundled executables such as `win-ca.exe`.

### Uncategorized

- Fix issue with merging configs [pull/6084](https://github.com/sourcegraph/cody/pull/6084)
- chore/build: VSCode Insiders builds are manually triggered and automatically tagged [pull/6083](https://github.com/sourcegraph/cody/pull/6083)
- Add Deep Cody back to model list, revert button change [pull/6077](https://github.com/sourcegraph/cody/pull/6077)
- Fix configuration inspect method [pull/6075](https://github.com/sourcegraph/cody/pull/6075)
- Improve Cody logging agent protocol [pull/6069](https://github.com/sourcegraph/cody/pull/6069)
- Ensure CompletionBookkeepingEvent timestamps are not floating point [pull/6073](https://github.com/sourcegraph/cody/pull/6073)
- VS Code: Release v1.40.2 [pull/6062](https://github.com/sourcegraph/cody/pull/6062)
- Autocomplete: remove the extended language pool option [pull/6072](https://github.com/sourcegraph/cody/pull/6072)
- Deep Cody: Allow toggle in UI & implement CodyChatMemory [pull/6066](https://github.com/sourcegraph/cody/pull/6066)
- Autocomplete: add characters logger metadata to `accepted` events [pull/6068](https://github.com/sourcegraph/cody/pull/6068)
- fix: rewrite symf query only once [pull/6070](https://github.com/sourcegraph/cody/pull/6070)
- Run prompts migration only over local user commands [pull/6056](https://github.com/sourcegraph/cody/pull/6056)
- Context: make error message more concise [pull/6065](https://github.com/sourcegraph/cody/pull/6065)
- prevent double-adding selected context [pull/6059](https://github.com/sourcegraph/cody/pull/6059)
- Fix bugs in workspace::getConfiguration vscode shim [pull/6058](https://github.com/sourcegraph/cody/pull/6058)
- Autocomplete: deflake hot-streak tests [pull/6040](https://github.com/sourcegraph/cody/pull/6040)
- Remove repo chip from default context (feature flagged) [pull/6034](https://github.com/sourcegraph/cody/pull/6034)
- update insider cron schedule to MWF @ 1500 UTC [pull/6052](https://github.com/sourcegraph/cody/pull/6052)
- VS Code: Release v1.40.1 [pull/6051](https://github.com/sourcegraph/cody/pull/6051)
- Auth: UI conditional rendering logic [pull/6047](https://github.com/sourcegraph/cody/pull/6047)
- Change nested configuration object handling to match VSCode behavior. [pull/6041](https://github.com/sourcegraph/cody/pull/6041)
- Update marketplace description [pull/6046](https://github.com/sourcegraph/cody/pull/6046)
- Fix OpenCtx include initial context integeration. [pull/6045](https://github.com/sourcegraph/cody/pull/6045)
- Network: Fallback to CODY_NODE_TLS_REJECT_UNAUTHORIZED for cert auth [pull/6037](https://github.com/sourcegraph/cody/pull/6037)
- Autocomplete: cleanup the fast-path a/b test [pull/6039](https://github.com/sourcegraph/cody/pull/6039)
- fix(ci): Increase test timeout for uninstall test [pull/6038](https://github.com/sourcegraph/cody/pull/6038)
- Fix Prompts welcome screen initial state [pull/6036](https://github.com/sourcegraph/cody/pull/6036)
- VS Code: add characters logger metadata to chat code-gen events [pull/6019](https://github.com/sourcegraph/cody/pull/6019)

## 1.40.2

### Fixed

- Agent: Fixed bugs in `workspace::getConfiguration` vscode shim [pull/6058](https://github.com/sourcegraph/cody/pull/6058)

## 1.40.1

### Fixed

- Auth: Fixed UI conditional rendering logic for non VS Code clients. [pull/6047](https://github.com/sourcegraph/cody/pull/6047)

## 1.40.0

### Added

- Proxy: Support for `cody.net.proxy` settings that enable configuation a cody specific proxy server. This also supports `cody.net.proxy.path` to provide a UNIX domain socket directly. [pull/5883](https://github.com/sourcegraph/cody/pull/5883)

### Fixed

- Context Filters: fixed repo name resolution cache. [pull/5978](https://github.com/sourcegraph/cody/pull/5978)

### Uncategorized

- Fix support for merging multiple nested objects [pull/6029](https://github.com/sourcegraph/cody/pull/6029)
- Change tip text to reflect new key command [pull/6030](https://github.com/sourcegraph/cody/pull/6030)
- add code llama model for the a/b test [pull/6022](https://github.com/sourcegraph/cody/pull/6022)
- Add new custom configuration field which supports dotted names [pull/6027](https://github.com/sourcegraph/cody/pull/6027)
- Add shortcut for recently used prompts [pull/6016](https://github.com/sourcegraph/cody/pull/6016)
- Use simplified token counting method in case of the big files [pull/6014](https://github.com/sourcegraph/cody/pull/6014)
- fix: Change chat input placeholder text [pull/6011](https://github.com/sourcegraph/cody/pull/6011)
- Reduce padding of container around search input. [pull/5778](https://github.com/sourcegraph/cody/pull/5778)
- VS Code: add characters logger stats to `fixup.apply:succeeded` events [pull/6009](https://github.com/sourcegraph/cody/pull/6009)
- Don't select first prompt by default [pull/6015](https://github.com/sourcegraph/cody/pull/6015)
- fix(chat): Hide insert and new file buttons if there is no `edit` capability [pull/6018](https://github.com/sourcegraph/cody/pull/6018)
- bump openctx to incorporate HTTP provider invocation [pull/6010](https://github.com/sourcegraph/cody/pull/6010)
- Promisify PromptEditorRefAPI [pull/6006](https://github.com/sourcegraph/cody/pull/6006)

## 1.38.3

### Fixed

- Autocomplete: Fix the feature flag used for the fast-path A/B test. [pull/5998](https://github.com/sourcegraph/cody/pull/5998)

## 1.38.2

### Changed

- Telemetry: Account for visible ranges in the characters logger. [pull/5931](https://github.com/sourcegraph/cody/pull/5931)

### Fixed

- Chat: Improved handling of duplicated priority context items. [pull/5860](https://github.com/sourcegraph/cody/pull/5860)
- Chat: Improved handling of duplicated priority context items. [pull/5860](https://github.com/sourcegraph/cody/pull/5860)

### Changed

- Network: Changed configuration of network libraries to better support VSCode's patching of `http` and `https` modules. Also disabled the use of `keep-alive` headers until more robust testing is in place around VSCode's ongoing network changes. No performance changes are expected as the previous use of `keep-alive` didn't properly create re-usable connections.

## 1.38.1

### Changed

- Telemetry: Add document change reasons to characters logger. [pull/5855](https://github.com/sourcegraph/cody/pull/5855)
- Autocomplete: Prepare for the fast-path and completion-preloading A/B tests. [pull/5905](https://github.com/sourcegraph/cody/pull/5905)

## 1.38.0

### Fixed

- Chat: Improve webview performance in long chats. [pull/5866](https://github.com/sourcegraph/cody/pull/5866), [pull/5875](https://github.com/sourcegraph/cody/pull/5875), [pull/5879](https://github.com/sourcegraph/cody/pull/5879)

- Autocomplete: Remove support for the deprecated `experimental-openaicompatible` provider. Use `openaicompatible` instead. [pull/5872](https://github.com/sourcegraph/cody/pull/5872)

## 1.36.3

### Added

- Autocomplete: re-enable the agent tests. [pull/5784](https://github.com/sourcegraph/cody/pull/5784)
- Autocomplete: Using the current document instead of precalculated text to get insertion text. [pull/5812](https://github.com/sourcegraph/cody/pull/5812)

## 1.36.2

### Added

- Autocomplete: Change the feature flag names for experiment to prevent older client quering deprecated models. [pull/5805](https://github.com/sourcegraph/cody/pull/5805)

### Fixed

- Chat: Fix an issue in repository name resolution for workspaces that caused Chat to hang. [pull/5808](https://github.com/sourcegraph/cody/pull/5808)

## 1.36.1

### Fixed

- Autocomplete: The PR fixes the slowness in vscode because because of completions by using local cache instead of querying vscode localStorage. [pull/5798](https://github.com/sourcegraph/cody/pull/5798)
- Sourcegraph API GraphQL: Increase the default timeout from 6sec to 20sec. [pull/5789](https://github.com/sourcegraph/cody/pull/5789)

## 1.36.0

### Added

- The [new OpenAI models (OpenAI o1-preview & OpenAI o1-mini)](https://sourcegraph.com/blog/openai-o1-for-cody) are now available to selected Cody Pro users for early access. [pull/5508](https://github.com/sourcegraph/cody/pull/5508)
- Cody Pro users can join the waitlist for the new models by clicking the "Join Waitlist" button. [pull/5508](https://github.com/sourcegraph/cody/pull/5508)
- Chat: Support non-streaming requests. [pull/5565](https://github.com/sourcegraph/cody/pull/5565)
- Chat: Ability to execute terminal commands generated by Cody directly from the chat interface on button click. [pull/5684](https://github.com/sourcegraph/cody/pull/5684)

### Fixed

- Chat: Fixed feedback buttons not working in chat. [pull/5509](https://github.com/sourcegraph/cody/pull/5509)
- Command: Removed duplicated default commands from the Cody Commands menu that were incorrectly listed as custom commands.
- Enterprise: Smart context window is now correctly set for all Claude Sonnet models configured on the server side. [pull/5677](https://github.com/sourcegraph/cody/pull/5677)
- Chat: Display the correct loading state during codebase context retrieval instead of 0 item by default. [pull/5761](https://github.com/sourcegraph/cody/pull/5761)

### Changed

- Enterprise: Remote Repository items in the mention menu now display only the org/repo part of the title, omitting the code host name to prevent repository names from being truncated in the UI. [pull/5518](https://github.com/sourcegraph/cody/pull/5518)
- Cody Ignore: This internal experimental feature is now deprecated and the use of `.cody/ignore` file is no longer supported. [pull/5537](https://github.com/sourcegraph/cody/pull/5537)
- Autocomplete: removed the `cody.autocomplete.advanced.model` setting and updated supported values for `cody.autocomplete.advanced.provider`.

## 1.34.3

### Fixed

- Autocomplete Logging: Fix the diff for recent edits by replacing psDedent with ps to preserve the indentation. [pull/5574](https://github.com/sourcegraph/cody/pull/5574)

## 1.34.2

### Fixed

- Autocomplete Logging: The PR fixes the contextCandidates logged in the inlineCompletionItemContext. [pull/5507](https://github.com/sourcegraph/cody/pull/5507)

## 1.34.1

### Added

### Fixed

- Cody Ignore: Fixed an issue where Cody would treat Notebook cells as ignored files when .cody/ignore is enabled. [pull/5473](https://github.com/sourcegraph/cody/pull/5473)
- Command: Fixed the `Generate Commit Message` command on Windows caused by file path. [pull/5483](https://github.com/sourcegraph/cody/pull/5483)
- Dev: Fixed an issue where incorrect request parameters caused stream requests to fail when using BYOK OpenAI-compatible models. [pull/5490](https://github.com/sourcegraph/cody/pull/5490)

### Changed

## 1.34.0

### Added

### Fixed

- Command: Fixed an issue where the experimental `Generate Commit Message` command would fail on Windows due to incorrect parsing of the git diff output. [pull/5449](https://github.com/sourcegraph/cody/pull/5449)
- Chat: Model list now shows the correct icon based on the model provider. [pull/5469](https://github.com/sourcegraph/cody/pull/5469)
- Chat: Fixed an issue where local models were duplicated in the model list. [pull/5469](https://github.com/sourcegraph/cody/pull/5469)

### Changed

- Edit: Implemented cursor feedback for Generate Tests and Document Code commands to improve user experience by indicating command execution. [pull/5341](https://github.com/sourcegraph/cody/pull/5341)
- Dev: Added support for configurable "options" field in locally configured LLM providers, available behind the `cody.dev.models` setting. [pull/5467](https://github.com/sourcegraph/cody/pull/5467)
- Autocomplete Trigger Delay: Introduced a configurable setting to add a delay before returning autocomplete results, enhancing user control over completion suggestion timing. [pull/5350](https://github.com/sourcegraph/cody/pull/5350)

## 1.32.5

### Fixed

- Autocomplete: Fix autocomplete character trimming from hot-streak. [pull/5378](https://github.com/sourcegraph/cody/pull/5378)
- Autocomplete: Fix anthropic model for PLG users. [pull/5380](https://github.com/sourcegraph/cody/pull/5380)
- Chat: Adjust context windows for Mistral models configured in the site config. [pull/5434](https://github.com/sourcegraph/cody/pull/5434)

## 1.32.4

### Added

- Refactoring: refactoring configurations to make more reactive. [pull/5330](https://github.com/sourcegraph/cody/pull/5330)
- Autocomplete: Enable smart throttle and hot streak. [pull/5339](https://github.com/sourcegraph/cody/pull/5339)
- Autocomplete: Fix model mapping for deepseek-coder-v2. [pull/5272](https://github.com/sourcegraph/cody/pull/5272)
- Autocomplete: Prompt caching and direct routing experiment. [pull/5246](https://github.com/sourcegraph/cody/pull/5246)

## 1.32.3

### Added

- Autocomplete Refactoring: Extract fast-path client for the fireworks provider. [pull/5284](https://github.com/sourcegraph/cody/pull/5284)
- Autocomplete Refactoring: Reduce `createProviderConfig` duplication. [pull/5282](https://github.com/sourcegraph/cody/pull/5282)
- Autocomplete Refactoring: Remove starcoder2. [pull/5283](https://github.com/sourcegraph/cody/pull/5283)
- Autocomplete Refactoring: Remove unused models in the fireworks provider. [pull/5286](https://github.com/sourcegraph/cody/pull/5286)
- Autocomplete Refactoring: Refactor the Fireworks provider. [pull/5307](https://github.com/sourcegraph/cody/pull/5307)

## 1.32.2

### Fixed

- Fixed an issue where chats could hang if there have been no changes since the last local indexing. [pull/5319](https://github.com/sourcegraph/cody/pull/5319)

## 1.32.1

### Fixed

- Revert: A recent version bump of a dependency was potentially causing some Out-of-Memory issues resultling in a grey screen. The `rehype-highlight` version has been reverted. [pull/5315](https://github.com/sourcegraph/cody/pull/5315)
- Chat: General improvements to how Cody responds to messages that include code blocks. [pull/5290](https://github.com/sourcegraph/cody/pull/5290)

## 1.32.0

### Added

- Chat/Edit: Added an experimental "Smart Apply" button to code blocks that will attempt to apply the changes to the correct file via the Edit command. [pull/5038](https://github.com/sourcegraph/cody/pull/5038)
- Edit: Added support to accept/reject specific changes when displaying a diff. [pull/4976](https://github.com/sourcegraph/cody/pull/4976)
- Agent: Support for multiple workspace roots. [pull/5211](https://github.com/sourcegraph/cody/pull/5211)

### Fixed

- Edit: Fixed a case where multiple, duplicate, edit commands would be created unintentionally. [pull/5183](https://github.com/sourcegraph/cody/pull/5183)
- Debug: Commands for debugging purposes (e.g., "Cody Debug: Export Logs") are available outside of development mode again. [pull/5197](https://github.com/sourcegraph/cody/pull/5197)
- Edit: Fixed an issue where the inline diff would not be shown if a file became hidden before the edit was applied. [pull/5270](https://github.com/sourcegraph/cody/pull/5270)
- Edit: Fixed an issue where single-line/short edits would not be correctly applied to the document. [pull/5271](https://github.com/sourcegraph/cody/pull/5271)

### Changed

- Chat: Improved how Cody associates code to existing files in chat responses. [pull/5038](https://github.com/sourcegraph/cody/pull/5038)
- Chat: Added an experimental simpler code block UI, that can accomodate the "Smart Apply" button. [pull/5038](https://github.com/sourcegraph/cody/pull/5038)

## 1.30.3

### Added

### Fixed

- Chat: Fixed an issue where @-mentions move focus to the chat input box at the top. [pull/5170](https://github.com/sourcegraph/cody/pull/5170)

### Changed

## 1.30.2

### Added

Autocomplete: Experiment flag for deepseek context increase experiment. [pull/5159](https://github.com/sourcegraph/cody/pull/5159)

### Fixed

### Changed

## 1.30.1

### Added

Autocomplete: Add a feature flag for DeepSeek-coder-v2 lite base model. [pull/5151](https://github.com/sourcegraph/cody/pull/5079)

### Fixed

### Changed

## 1.30.0

### Added

Chat: Added ability to remove individual chats from chat history in the sidebar. [pull/5114](https://github.com/sourcegraph/cody/pull/5114)

### Fixed

### Changed

- Chat: the local search index is now rebuilt more frequently when many files are changed since the last index (such as when the user checks out a revision that differs from the current revision).

## 1.28.1

Chat: Cody is now defaulted to run in the sidebar for both Enterprise and Non-Enterprise users. [pull/5039](https://github.com/sourcegraph/cody/pull/5039)

### Fixed

- Edit: Fixed an issue where we would generate an inefficient diff due to a mismatch in the end-of-line sequence between the user and the LLM. [pull/5069](https://github.com/sourcegraph/cody/pull/5069)
- Chat: Fixed an issue where buttons to start a new Cody chat and show Chat History were visible in non-Cody views. [pull/5106](https://github.com/sourcegraph/cody/pull/5106)

### Changed

- Autocomplete: Ignores leading empty new lines for autocomplete suggestions to reduce the number of cases when Cody doesn't suggest anything. [pull/4864](https://github.com/sourcegraph/cody/pull/4864)
- Autocomplete: Preload completions on cursor movement. [pull/4901](https://github.com/sourcegraph/cody/pull/4901)
- Chat: The shortcuts for starting starting and toggling the chat have changed:
  - `Alt+L`: Toggles between the chat view and the last text editor. If a chat view doesn't exist, it opens a new one. From a text editor with an active selection, it adds the active selection to the chat.
  - `Shift+Alt+L`: starts a new chat session.
  - The `cody.chat.defaultLocation` setting controls the default location of chat sessions. The values are "sidebar", "editor", or "sticky". The default is "sticky", which defaults to the sidebar but switches whenever the user moves the chat to the editor panel, or vice versa.

## 1.28.0

### Added

- Chat: Chat has been added back to the VS Code sidebar (after being removed about 6 months ago). By default, new chats open in the sidebar. New chats can still be opened in an editor panel with the `New Chat in Sidebar` command. Currently open chats can be moved from the sidebar into an editor panel and vice versa. Enterprise users are not affected. [pull/4832](https://github.com/sourcegraph/cody/pull/4832)
- Chat: Chat History, commands, and settings are now accessible through the chat view for Non-Enterprise users. [pull/4900](https://github.com/sourcegraph/cody/pull/4900)
- Edit: Added support to select the full range of a file for an edit. [pull/4864](https://github.com/sourcegraph/cody/pull/4864)

### Fixed

- Command: The "Ask Cody to Explain" command for explaining terminal output has been removed from the command palette, as it is only callable from the terminal context menu. [pull/4860](https://github.com/sourcegraph/cody/pull/4860)
- Command: Make "Open Diff" button maximize current editor if multiple are open. [pull/4957](https://github.com/sourcegraph/cody/pull/4957)
- Chat: Design cleanups of the new chat UI. [pull/4959](https://github.com/sourcegraph/cody/pull/4959)
- Autocomplete: Fixed an issue where completions would incorrectly be marked as "read" if the cursor position or active document no longer passes the visibility checks. [pull/4984](https://github.com/sourcegraph/cody/pull/4984)

### Changed

- For non-Enterprise users, the sidebar for commands, chat history, and settings has been removed and replaced by the sidebar chat. [pull/4832](https://github.com/sourcegraph/cody/pull/4832)

## 1.26.7

### Fixed

- Autocomplete: Fixed an issue where autocomplete context requests were never resolved. [pull/4961](https://github.com/sourcegraph/cody/pull/4961)

## 1.26.6

### Fixed

- Autocomplete: Fixed an issue where the cached retriever was attempting to open removed files. [pull/4942](https://github.com/sourcegraph/cody/pull/4942)

## 1.26.5

### Fixed

- Chat context: Fixed an issue where querying context retrievers with context chips included in the query returned poor results. [pull/4936](https://github.com/sourcegraph/cody/pull/4936)

## 1.26.4

### Fixed

- Autocomplete: Fixed the request manager cache keys computation. [pull/4902](https://github.com/sourcegraph/cody/pull/4902)
- Autocomplete: Fixed the default model value for the Anthropic autocomplete provider. [pull/4803](https://github.com/sourcegraph/cody/pull/4803)
- It is no longer possible to add a file to chat context by right clicking the file in the file explorer.

## 1.26.3

### Fixed

- Autocomplete: Characters logger now accounts for multiline deletions. [pull/4865](https://github.com/sourcegraph/cody/pull/4865)
- Autocomplete: Fixed an issue where subsequent completions would be marked as "suggested" multiple times, if they resolved to an already visible completion. [pull/4866](https://github.com/sourcegraph/cody/pull/4866)

## 1.26.2

### Added

- Autocomplete: Added an extended experimental throttling mechanism that should decrease latency. [pull/4852](https://github.com/sourcegraph/cody/pull/4852)

### Fixed

- Autocomplete: Fixed an issue where in-flight requests would sometimes be incorrectly resolved if the cursor position changed. [pull/4827](https://github.com/sourcegraph/cody/pull/4827)

### Changed

## 1.26.1

### Fixed

- A no-op command `New Chat in Sidebar` was removed. (This will be added back with functionality in the next minor stable release version.) [pull/4837](https://github.com/sourcegraph/cody/pull/4837)

## 1.26.0

### Added

- Ollama: Added support for running Cody offline with local Ollama models. [pull/4691](https://github.com/sourcegraph/cody/pull/4691)
- Edit: Added support for users' to edit the applied edit before the diff view is removed. [pull/4684](https://github.com/sourcegraph/cody/pull/4684)
- Autocomplete: Added experimental support for Gemini 1.5 Flash as the autocomplete model. To enable this experimental feature, update the `autocomplete.advanced.provider` configuration setting to `unstable-gemini`. Prerequisite: Your Sourcegraph instance (v5.5.0+) must first be configured to use Gemini 1.5 Flash as the autocomplete model. [pull/4743](https://github.com/sourcegraph/cody/pull/4743)
- Enterprise: Enabled support for multiple dynaic models if the Sourcegraph backend provides them. Requires the experimental flag `modelsAPIEnabled` to be sent by the client config API. [pull/4780](https://github.com/sourcegraph/cody/pull/4780)
- Autocomplete: Fixed hot-streak cache keys for long documents. [pull/4817](https://github.com/sourcegraph/cody/pull/4817)
- Autocomplete: Added an extra abort call to ensure request cancellation. [pull/4818](https://github.com/sourcegraph/cody/pull/4818)

### Fixed

- Edit: Fixed an issue where, when unable to detect the indentation of a file, Cody would remove all indentation from a response. [pull/4704](https://github.com/sourcegraph/cody/pull/4704)
- Edit: Fixed an issue where Cody would sometimes remove unintended parts of the code when an edit was accepted on save. [pull/4720](https://github.com/sourcegraph/cody/pull/4720)
- Chat: The loading dots in the loading page are now centered correctly. [pull/4808](https://github.com/sourcegraph/cody/pull/4808)

### Changed

- Chat: Added a stop button and cleaned up the vertical space layout of the chat. [pull/4580](https://github.com/sourcegraph/cody/pull/4580)
- Autocomplete: Added a caching layer to Jaccard Similarity to reduce the load of context gathering during autocompletion. [pull/4608](https://github.com/sourcegraph/cody/pull/4608)
- Autocomplete: Added Fireworks headers to analytics events. [pull/4804](https://github.com/sourcegraph/cody/pull/4804)
- Chat: Simplify the Enterprise docs in the model selector [pull/4745](https://github.com/sourcegraph/cody/pull/4745)
- Edit: We now collapse the selection down to the cursor position after an edit is triggered. [pull/4781](https://github.com/sourcegraph/cody/pull/4781)
- Autocomplete: requests timeout decreased from 15s to 7s. [pull/4813](https://github.com/sourcegraph/cody/pull/4813)
- Chat & Edit: Claude 3.5 Sonnet is now the default model for Chat and Commands. [pull/4822](https://github.com/sourcegraph/cody/pull/4822)

## 1.24.2

### Added

- Autocomplete: Added a new experimental throttling mechanism that should decrease latency. [pull/4735](https://github.com/sourcegraph/cody/pull/4735)

### Changed

- Autocomplete: When the last completion candidate is not applicable at the current document position, it remains in the cache even after the user backspaces or deletes characters from the current line. [pull/4704](https://github.com/sourcegraph/cody/pull/4704)
- Autocomplete: Increase request manager cache size. [pull/4778](https://github.com/sourcegraph/cody/pull/4778)

## 1.24.1

- Autocomplete: Restrict the number of lines we await during hot-streak completion generation to prevent overwhelming inference providers. [pull/4737](https://github.com/sourcegraph/cody/pull/4737)

## 1.24.0

### Added

- Edit: Added a new visual inline diff output for applied edits. [pull/4525](https://github.com/sourcegraph/cody/pull/4525)
- Edit: Added a visual animation showing the progress of the LLM as it produces a final output. [pull/4525](https://github.com/sourcegraph/cody/pull/4525)

### Fixed

- Edit: Fixed incorrect codelens for "Generate Code". [pull/4525](https://github.com/sourcegraph/cody/pull/4525)
- Chat: Display the appropriate error message when input has exceeded the model's context window, instead of "Chat token usage must be updated before Context". [pull/4674](https://github.com/sourcegraph/cody/pull/4674)

### Changed

- Chat: @-mentions are shown as chips instead of text. [pull/4539](https://github.com/sourcegraph/cody/pull/4539)
- Edit: Removed usage of the users' default formatter, instead choosing to apply basic formatting and indentation matching before the edit is applied to the document. [pull/4525](https://github.com/sourcegraph/cody/pull/4525)
- Edit: Removed the manual "Show Diff" option, in favour of showing the diff directly in the editor. [pull/4525](https://github.com/sourcegraph/cody/pull/4525)

## 1.22.4

### Added

- Autocomplete: Support Google Vertex provider exclusively for Anthropic-based models. [pull/4606](https://github.com/sourcegraph/cody/pull/4606)
- Chat & Commands: New model Anthropic Claude 3.5 Sonnet available for Cody Pro users. [pull/4631](https://github.com/sourcegraph/cody/pull/4631)

### Fixed

### Changed

## 1.22.3

### Added

### Fixed

### Changed

## 1.22.2

### Added

- Autocomplete: Finetuned model shipment for code completions in py, jsx and jsx language. [pull/4533](https://github.com/sourcegraph/cody/pull/4533)
- Telemetry: Context logging for the autocomplete feature in private metadata. [pull/4501](https://github.com/sourcegraph/cody/pull/4501)
- Autocomplete: Feature flags for the fine-tuning model and deepseek experiment for code completions. [pull/4577](https://github.com/sourcegraph/cody/pull/4577)
- Telemetry: Added autocomplete stage counter logger. [pull/4595](https://github.com/sourcegraph/cody/pull/4595)
- Telemetry: Added resolved model to autocomplete events. [pull/4565](https://github.com/sourcegraph/cody/pull/4565)

## 1.22.1

### Added

- Enterprise: Expand the context window for Gemini 1.5 models. [pull/4563](https://github.com/sourcegraph/cody/pull/4563)

### Fixed

- Chat: Fix hover tooltips on overflowed paths in the @-mention file picker. [pull/4553](https://github.com/sourcegraph/cody/pull/4553)
- Custom Commands: Creating a new custom command through the menu without an existing cody.json file now creates a new cody.json file with the command added. [pull/4561](https://github.com/sourcegraph/cody/pull/4561)
- Ollama: Fix a bug where Ollama models were not connected to the correct client. [pull/4564](https://github.com/sourcegraph/cody/pull/4564)
- Windows: Fix a bug where Cody failed to load on Windows with the latest VS Code Insiders due to local certificates. [pull/4598](https://github.com/sourcegraph/cody/pull/4598)

### Changed

## 1.22.0

### Added

- Chat & Commands: New models available for Cody Pro users:
  - Google Gemini 1.5 Pro [#4360](https://github.com/sourcegraph/cody/pull/4360)
  - Google Gemini 1.5 Flash [#4360](https://github.com/sourcegraph/cody/pull/4360)
- Chat: Followup responses now more clearly indicate that prior context in the thread was used to generate the response. [pull/4479](https://github.com/sourcegraph/cody/pull/4479)

### Fixed

- Chat: Don't append @ when "Add context" is pressed multiple times. [pull/4439](https://github.com/sourcegraph/cody/pull/4439)
- Chat: Fix an issue where copying code (with right-click or Cmd/Ctrl+C) causes many event logs and may trip rate limits. [pull/4469](https://github.com/sourcegraph/cody/pull/4469)
- Chat: Fix an issue where it was difficult to copy code from responses that were still streaming in. [pull/4472](https://github.com/sourcegraph/cody/pull/4472)
- Chat: Fix an issue where opening the @-mention menu in a followup input would scroll the window to the top. [pull/4475](https://github.com/sourcegraph/cody/pull/4475)
- Chat: Show "Explain Code" and other commands in a more pleasant way, with @-mentions, in the chat. [pull/4424](https://github.com/sourcegraph/cody/pull/4424)
- Chat: Scrollbars are now shown in the @-mention menu when it overflows, same as chat models. [pull/4523](https://github.com/sourcegraph/cody/pull/4523)
- Chat: Prevent the chat from remaining in a loading state when using ESC to stop Cody's response mid-stream. [pull/4532](https://github.com/sourcegraph/cody/pull/4532)
- Chat: Large files added to new chats as @-mentions are now correctly displayed as invalid. [pull/4534](https://github.com/sourcegraph/cody/pull/4534)

### Changed

- Autocomplete: Improve finding of related code snippets by breaking camelCase and snake_case words. [pull/4467](https://github.com/sourcegraph/cody/pull/4467)
- The natural language search quickpick was removed. To perform a natural-language search, run a Cody chat and view the items in the context row. [pull/4506](https://github.com/sourcegraph/cody/pull/4506)
- Temporary Fix for [Win-ca package Certs] Issue(https://github.com/sourcegraph/cody/issues/4491): Bypassed problematic codepath to prevent system hang, resulting in temporary loss of self-signed certs import on Windows. Proper fix planned before July 1.

## [1.20.3]

### Fixed

- Chat: Fix an issue where copying code (with right-click or Cmd/Ctrl+C) causes many event logs and may trip rate limits. [pull/4469](https://github.com/sourcegraph/cody/pull/4469)

## [1.20.2]

### Fixed

- Performance: Reduced the performance overhead for certain types of context fetching, especially for larger files. This might have caused issues with slow autocomplete before. [pull/4446](https://github.com/sourcegraph/cody/pull/4446)
- Chat: Fixed an issue where the chat view would crash and display a gray screen in VS Code due to an out-of-memory situation. [pull/4459](https://github.com/sourcegraph/cody/pull/4459)

## [1.20.1]

### Fixed

- Chat: The @-mentions for workspace repositories, which are added to the input box by default for new messages, now take context filters into consideration and do not mention the excluded repos. [pull/4427](https://github.com/sourcegraph/cody/pull/4427)
- Chat: Fixed an issue where the buttons for copying and inserting code in assistant responses were not showing. [pull/4422](https://github.com/sourcegraph/cody/pull/4422)
- Edit: Fixed an issue where the edit commands context was removed from the final prompt. [pull/4432](https://github.com/sourcegraph/cody/pull/4432)
- Agent: Fixed an issue where the agent incorrectly calculated document range for out of bounds line numbers. [pull/4435](https://github.com/sourcegraph/cody/pull/4435)
- Chat: Fixed the contrast and colors of send button. [pull/4436](https://github.com/sourcegraph/cody/pull/4436)

## [1.20.0]

### Added

- Chat: Integrated OpenCtx providers with @-mention context menu. [pull/4201](https://github.com/sourcegraph/cody/pull/4201)
- Enterprise: Adds support for the `completions.smartContextWindow` (available in Sourcegraph v5.5.0+) site configuration. [pull/4236](https://github.com/sourcegraph/cody/pull/4236)
- Chat: Integrated OpenCtx providers with @-mention context menu. [pull/4201](https://github.com/sourcegraph/cody/pull/4201/files)
- Keybinding: Assign the same keyboard shortcut for starting a new chat to the "New Chat with Selection" command. [pull/4255](https://github.com/sourcegraph/cody/pull/4255)
- Telemetry: Adds a new telemetry event when users uninstall the extension. [pull/4246](https://github.com/sourcegraph/cody/pull/4246)
- Chat: Added @-mention remote repositories search provider for enterprise. [pull/4311](https://github.com/sourcegraph/cody/pull/4311)
- Chat: Editor selection is now included in all chats by default. [pull/4292](https://github.com/sourcegraph/cody/pull/4292)
- Chat: Assistant responses now have a "Try again with different context" line at the bottom with ways you can improve the context used to generate the response. [pull/4317](https://github.com/sourcegraph/cody/pull/4317)
- Document Code: Adds additional languages support for range expansion:
  - Java: [pull/4353](https://github.com/sourcegraph/cody/pull/4353)
  - Kotlin: [pull/4355](https://github.com/sourcegraph/cody/pull/4355)
  - Rust: [pull/4358](https://github.com/sourcegraph/cody/pull/4358)
  - PHP: [pull/4359](https://github.com/sourcegraph/cody/pull/4359)
  - C: [pull/4391](https://github.com/sourcegraph/cody/pull/4391)
  - C++: [pull/4392](https://github.com/sourcegraph/cody/pull/4392)

### Fixed

- Autocomplete: Fixed an issue where formatting on save could cause completions to show duplicated characters. [pull/4404](https://github.com/sourcegraph/cody/pull/4404)
- Edit: Fixed an issue where streamed insertions used invalid document ranges. [pull/4172](https://github.com/sourcegraph/cody/pull/4172)
- Chat: Fixed issues with chat commands where selection context is removed from context items. [pull/4229](https://github.com/sourcegraph/cody/pull/4229)
- Auth: Fixes an issue where Login page is not reloaded when proxy settings have changed. [pull/4233](https://github.com/sourcegraph/cody/pull/4233)
- Chat: Fixes issues with chat commands where selection context is removed from context items. [pull/4229](https://github.com/sourcegraph/cody/pull/4229)
- Chat: Fixes intermittent issues with `Add Selection to Cody Chat` where sometimes the @-mention would not actually be added. [pull/4237](https://github.com/sourcegraph/cody/pull/4237)
- Menu: Fixes an issue where the `Add Selection to Cody Chat` context menu item was incorrectly disabled when no new chat was open. [pull/4242](https://github.com/sourcegraph/cody/pull/4242)
- Fixed an issue where the test file name was incorrectly inserted with the unit test command. [pull/4262](https://github.com/sourcegraph/cody/pull/4262)
- Chat: Fixed a long-standing bug where it was not possible to copy code from Cody's response before it was finished. [pull/4268](https://github.com/sourcegraph/cody/pull/4268)
- Chat: Fixed a bug where list bullets or numbers were not shown in chat responses. [pull/4294](https://github.com/sourcegraph/cody/pull/4294)
- Chat: Fixed a bug where long messages could not be scrolled vertically in the input. [pull/4313](https://github.com/sourcegraph/cody/pull/4313)
- Chat: Copying and pasting @-mentions in the chat input now works. [pull/4319](https://github.com/sourcegraph/cody/pull/4319)
- Document Code: Fixed an issue where documentation would be incorrectly inserted in the middle of a line. [pull/4325](https://github.com/sourcegraph/cody/pull/4325)
- Edit: Fixed an issue where an invalid prompt would be used, resulting in an error in certain enterprise configurations. [pull/4350](https://github.com/sourcegraph/cody/pull/4350)

### Changed

- Chat: Pressing <kbd>Space</kbd> no longer accepts an @-mention item. Press <kbd>Tab</kbd> or <kbd>Enter</kbd> instead. [pull/4154](https://github.com/sourcegraph/cody/pull/4154)
- Chat: You can now change the model after you send a chat message. Subsequent messages will be sent using your selected model. [pull/4189](https://github.com/sourcegraph/cody/pull/4189)
- Chat: The @-mention menu now shows the types of context you can include. [pull/4188](https://github.com/sourcegraph/cody/pull/4188)
- Increases the context window for the new `GPT-4o` model. [pull/4180](https://github.com/sourcegraph/cody/pull/4180)
- Commands/Chat: Increased the maximum output limit of LLM responses for recommended Enterprise models. [pull/4203](https://github.com/sourcegraph/cody/pull/4203)
- Chat: The chat UI has been updated to make messages editable in-place and stream down from the top. [pull/4209](https://github.com/sourcegraph/cody/pull/4209)
- Chat: Improved chat model selector UI with GPT-4o now as a recommended model, improved usability for Cody Free users, and a chat models documentation link. [pull/4254](https://github.com/sourcegraph/cody/pull/4254)
- Chat: New welcome screen. [pull/4303](https://github.com/sourcegraph/cody/pull/4303)
- Chat: Added @-mention provider icons. [pull/4336](https://github.com/sourcegraph/cody/pull/4336)
- Chat: New chats now start with @-mentions of your current repository and file. Use @-mentions to include other context. Enterprise users can @-mention remote repositories to chat across multiple repositories. [pull/4364](https://github.com/sourcegraph/cody/pull/4364)

### Removed

- Chat: The `Rename Chat` functionality.

## [1.18.2]

### Added

- Feature flags for the fine-tuning model experiment for code completions. [pull/4245](https://github.com/sourcegraph/cody/pull/4245)

### Fixed

### Changed

## [1.18.1]

### Added

- Automatically start embeddings indexing using Sourcegraph embeddings API. [pull/4091](https://github.com/sourcegraph/cody/pull/4091/)
- Simplify upstream latency collector and measure Cody Gateway latency[pull/4193](https://github.com/sourcegraph/cody/pull/4193)

### Fixed

### Changed

## [1.18.0]

### Added

- Search: A new `Search Code` command added to the `Commands` sidebar for Cody's Natural Language Search. [pull/3991](https://github.com/sourcegraph/cody/pull/3991)
- Context Menu: Added commands to send file to chat as @-mention from the explorer context menu. [pull/4000](https://github.com/sourcegraph/cody/pull/4000)
  - `Add File to Chat`: Add file to the current opened chat, or start a new chat if no panel is opened.
  - `New Chat with File Content`: Opens a new chat with the file content when no existing chat panel is open.
- Chat: New optimization for prompt quality and token usage, deduplicating context items, and optimizing token allocation. [pull/3929](https://github.com/sourcegraph/cody/pull/3929)
- Document Code/Generate Tests: User selections are now matched against known symbol ranges, and adjusted in cases where a user selection in a suitable subset of one of these ranges. [pull/4031](https://github.com/sourcegraph/cody/pull/4031)
- Extension: Added the `vscode.git` extension to the `extensionDependencies` list. [pull/4110](https://github.com/sourcegraph/cody/pull/4110)
- Command: Add a new `Generate Commit Message` command for generating commit messages, available in the Cody sidebar, command palette, and Source Control panel. [pull/4130](https://github.com/sourcegraph/cody/pull/4130)
- Chat: The new `GPT-4o` model is available for Cody Pro users. [pull/4164](https://github.com/sourcegraph/cody/pull/4164)

### Fixed

- Autocomplete: Handle incomplete Ollama response chunks gracefully. [pull/4066](https://github.com/sourcegraph/cody/pull/4066)
- Edit: Improved handling of responses that contain HTML entities. [pull/4085](https://github.com/sourcegraph/cody/pull/4085)
- Chat: Fixed an issue where the chat message editor field was not able to be scrolled with the mouse or trackpad. [pull/4127](https://github.com/sourcegraph/cody/pull/4127)

### Changed

- Extension has been renamed from `Cody AI` to `Cody: AI Coding Assistant with Autocomplete & Chat`. [pull/4079](https://github.com/sourcegraph/cody/pull/4079)
- Search: Cody's Natural Language Search has been moved to a new quick pick interface, and the search box has been removed from the sidebar. [pull/3991](https://github.com/sourcegraph/cody/pull/3991)
- Editor Context Menu: Updated the existing `Cody Chat: Add context` command to handle selected code from the editor as @-mention . [pull/4000](https://github.com/sourcegraph/cody/pull/4000)
  - `Add Code to Chat`: Add selected code to the current opened chat, or new chat if no panel is opened.
  - `New Chat with Code`: Opens a new chat with the selected code when no existing chat panel is open and code is selected in the editor.
- Fixes an issue where triggering a recipe with no open editor window will cause unexpected behavior. [pull/3911](https://github.com/sourcegraph/cody/pull/3911)
- Edit: The "Document Code" and "Generate Tests" commands now execute with a single click/action, rather than requiring the user to specify the range first. The range can be modified from the normal Edit input. [pull/4071](https://github.com/sourcegraph/cody/pull/4071)
- Chat: The model selector now groups chat model choices by characteristics (such as "Optimized for Accuracy", "Balanced", "Optimized for Speed", and "Ollama") and indicates the default choice. [pull/4033](https://github.com/sourcegraph/cody/pull/4033) and [pull/4133](https://github.com/sourcegraph/cody/pull/4133)

## [1.16.7]

### Added

### Fixed

- Chat: Fixed a bug where the chat model dropdown would not work on first click. [pull/4122](https://github.com/sourcegraph/cody/pull/4122)

### Changed

## [1.16.6]

### Added

- Edit: Added a maximum timeout to the formatting logic, so the Edit does not appear stuck if the users' formatter takes a particularly long amount of time. [pull/4113](https://github.com/sourcegraph/cody/pull/4113)

### Fixed

- Edit: Fixed cases where the formatting of an Edit would not respect the editor tab size with certain formatters. [pull/4111](https://github.com/sourcegraph/cody/pull/4111)

### Changed

## [1.16.5]

### Added

### Fixed

- Tutorial: Fixed a bug where the tutorial would not open on first authentication. [pull/4108](https://github.com/sourcegraph/cody/pull/4108)

### Changed

## [1.16.4]

### Added

### Fixed

- Chat: Fixed a bug where the entire Cody chat view would appear blank when clicking the chat model dropdown. [pull/4098](https://github.com/sourcegraph/cody/pull/4098)

### Changed

## [1.16.3]

### Added

### Fixed

- Tutorial: Fixed telemetry when activating the tutorial on first authentication. [pull/4068](https://github.com/sourcegraph/cody/pull/4068)
- Tutorial: Improved the reliability and discoverability of the Edit command. [pull/4068](https://github.com/sourcegraph/cody/pull/4068)

### Changed

## [1.16.2]

### Added

### Fixed

- Chat: Fixed a bug where the entire Cody chat view would appear blank. [pull/4062](https://github.com/sourcegraph/cody/pull/4062)

### Changed

## [1.16.1]

### Added

### Fixed

- Fixed a bug where old Sourcegraph instances' error messages caused Cody to ignore all context files. [pull/4024](https://github.com/sourcegraph/cody/pull/4024)
- Fixed a visually distracting drop shadow on some text labels in the model selection dropdown menu. [pull/4026](https://github.com/sourcegraph/cody/pull/4026)

### Changed

## [1.16.0]

### Added

- Chat: The context window for the `Claude 3 Sonnet` and `Claude 3 Opus` models is now increased by default for all non-Enterprise users, without requiring a feature flag. [pull/3953](https://github.com/sourcegraph/cody/pull/3953)
- Custom Commands: Added the ability to create new custom Edit commands via the Custom Command Menu. [pull/3862](https://github.com/sourcegraph/cody/pull/3862)
- Custom Commands: Added 'currentFile' option to include the full file content in the Custom Commands menu. [pull/3960](https://github.com/sourcegraph/cody/pull/3960)
- Chat: Pressing <kbd>Alt+Enter</kbd> or <kbd>Opt+Enter</kbd> will submit a chat message without enhanced context (only @-mentions). [pull/3996](https://github.com/sourcegraph/cody/pull/3996)

### Fixed

- Chat: Fixed an issue where Cody's responses were not visible in small windows. [pull/3865](https://github.com/sourcegraph/cody/pull/3865)
- Edit: Fixed an issue where an Edit task would not correctly respin when an irresolvable conflict is encountered. [pull/3872](https://github.com/sourcegraph/cody/pull/3872)
- Chat: Fixed an issue where older chats were displaying as 'N months ago' instead of the number in the Chat History sidebar. [pull/3864](https://github.com/sourcegraph/cody/pull/3864)
- Custom Commands: Fixed an issue where the "selection" option was not being toggled correctly based on the user's selection in the Custom Command menu. [pull/3960](https://github.com/sourcegraph/cody/pull/3960)
- Chat: Fixed an issue where the chat title showed up as "New Chat" when the question started with a new line. [pull/3977](https://github.com/sourcegraph/cody/pull/3977)

### Changed

- Sidebar (Settings & Support): For Pro & Enterprise, moved 'Account' up to the top. For Pro only, removed 'Usage' as it can be accessed via 'Account' → 'Manage Account'. [pull/3868](https://github.com/sourcegraph/cody/pull/3868)
- Debug: Removed the `cody.debug.enabled` setting. Baseline debugging is now enabled by default [pull/3873](https://github.com/sourcegraph/cody/pull/3873)
- Chat: The experimental Ollama Chat feature, which allows using local Ollama models for chat and commands, is now enabled by default. [pull/3914](https://github.com/sourcegraph/cody/pull/3914)
- Removed Claude 2, Claude 2.1 and Claude Instant from Cody Free and Cody Pro. All users are now upgraded to use Claude 3 by default [pull/3971](https://github.com/sourcegraph/cody/pull/3971)

## [1.14.0]

### Added

- Chat: Add highlighted code to Cody Chat as `@-mentions` context by right-clicking on the code and selecting `Cody Chat: Add context`. [pull/3713](https://github.com/sourcegraph/cody/pull/3713)
- Autocomplete: Add the proper infilling prompt for Codegemma when using Ollama. [pull/3754](https://github.com/sourcegraph/cody/pull/3754)
- Chat: The new `Mixtral 8x22B` chat model is available for Cody Pro users. [pull/3768](https://github.com/sourcegraph/cody/pull/3768)
- Chat: Add a "Pop out" button to the chat title bar that allows you to move Cody chat into a floating window. [pull/3773](https://github.com/sourcegraph/cody/pull/3773)
- Sidebar: A new button to copy the current Cody extension version to the clipboard shows up next to the Release Notes item in the SETTINGS & SUPPORT sidebar on hover. This is useful for reporting issues or getting information about the installed version. [pull/3802](https://github.com/sourcegraph/cody/pull/3802)
- Generate Unit Tests: Added a new code action "Ask Cody to Test" currently shows against functions in JS, TS, Go and Python. [pull/3763](https://github.com/sourcegraph/cody/pull/3763)
- Chat: @-mentions that exceed the context window will be displayed as invalid to make it easier to identify them during input. [pull/3742](https://github.com/sourcegraph/cody/pull/3742)

### Fixed

- Generate Unit Tests: Fixed an issue where Cody would generate tests for the wrong code in the file. [pull/3759](https://github.com/sourcegraph/cody/pull/3759)
- Chat: Fixed an issue where changing the chat model did not update the token limit for the model. [pull/3762](https://github.com/sourcegraph/cody/pull/3762)
- Troubleshoot: Don't show SignIn page if the authentication error is because of network connectivity issues [pull/3750](https://github.com/sourcegraph/cody/pull/3750)
- Edit: Large file warnings for @-mentions are now updated dynamically as you add or remove them. [pull/3767](https://github.com/sourcegraph/cody/pull/3767)
- Generate Unit Tests: Improved quality for creating file names. [pull/3763](https://github.com/sourcegraph/cody/pull/3763)
- Custom Commands: Fixed an issue where newly added custom commands were not working when clicked in the sidebar tree view. [pull/3804](https://github.com/sourcegraph/cody/pull/3804)
- Chat: Fixed an issue where whitespaces in messages submitted by users were omitted. [pull/3817](https://github.com/sourcegraph/cody/pull/3817)
- Chat: Improved token counting mechanism that allows more context to be correctly included or excluded. [pull/3742](https://github.com/sourcegraph/cody/pull/3742)
- Chat: Fixed an issue where context files were opened with an incorrect link for Enterprise users due to double encoding. [pull/3818](https://github.com/sourcegraph/cody/pull/3818)
- Chat: Line numbers for @-mentions are now included and counted toward the "x lines from y files" section in the UI. [pull/3842](https://github.com/sourcegraph/cody/pull/3842)

### Changed

- Command: Ghost text hint for `Document Code` ("Alt+D to Document") now only shows on documentable symbols without an existing docstring. [pull/3622](https://github.com/sourcegraph/cody/pull/3622)
- Chat: Updates to the latest GPT 4 Turbo model. [pull/3790](https://github.com/sourcegraph/cody/pull/3790)
- Chat: Slightly speeds up enhanced context fetching on Cody Free and Cody Pro when both embeddings and search is used. [pull/3798](https://github.com/sourcegraph/cody/pull/3798)
- Support Sidebar: Consolidated all support links to our new [Support page](https://srcgr.ph/cody-support), which includes a new [Community Forum](https://community.sourcegraph.com/c/cody/vs-code/6) for user discussion.. [pull/3803](https://github.com/sourcegraph/cody/pull/3803)
- Support Sidebar: Update the icon for Discord to use the official Discord logo. [pull/3803](https://github.com/sourcegraph/cody/pull/3803)
- Commands/Chat: Increased the maximum output limit of LLM responses. [pull/3797](https://github.com/sourcegraph/cody/pull/3797)
- Commands: Updated the naming of various code actions to be more descriptive. [pull/3831](https://github.com/sourcegraph/cody/pull/3831)
- Chat: Adds chat model to more telemetry events. [pull/3829](https://github.com/sourcegraph/cody/pull/3829)
- Telemetry: Adds a new telemetry event when users sign-in the first time. [pull/3836](https://github.com/sourcegraph/cody/pull/3836)

### Feature Flags

> This section covers experiments that run behind feature flags for non-Enterprise users.

- Chat: Increased context window size when using the `Claude 3 Sonnet` and `Claude 3 Opus` models. [pull/3742](https://github.com/sourcegraph/cody/pull/3742)

## [1.12.0]

### Added

- Edit/Chat: Cody now expands the selection to the nearest enclosing function, if available, before attempting to expand to the nearest enclosing block. [pull/3507](https://github.com/sourcegraph/cody/pull/3507)
- Edit: New `cody.edit.preInstruction` configuration option for adding custom instruction at the end of all your requests. [pull/3542](https://github.com/sourcegraph/cody/pull/3542)
- Edit: Add support for the new `cody.edit.preInstruction` setting. [pull/3542](https://github.com/sourcegraph/cody/pull/3542)
- Edit: Added telemetry to measure the persistence of edits in the document. [pull/3550](https://github.com/sourcegraph/cody/pull/3550)
- Edit: "Ask Cody to Fix" now uses Claude 3 Sonnet. [pull/3555](https://github.com/sourcegraph/cody/pull/3555)
- Chat: Added buttons in the chat input box for enabling/disabling Enhanced Context. [pull/3547](https://github.com/sourcegraph/cody/pull/3547)
- Edit: Display warnings for large @-mentioned files during selection. [pull/3494](https://github.com/sourcegraph/cody/pull/3494)
- Edit: Automatically show open tabs as available options when triggering an @-mention. [pull/3494](https://github.com/sourcegraph/cody/pull/3494)
- `Cody Debug: Report Issue` command to easily file a pre-filled GitHub issue form for reporting bugs and issues directly inside VS Code. The `Cody Debug: Report Issue` command is accessible from the command palette and the `...` menu in the Cody Support sidebar. [pull/3624](https://github.com/sourcegraph/cody/pull/3624)

### Fixed

- Chat: Fixed issue where large files could not be added via @-mention. You can now @-mention line ranges within large files. [pull/3531](https://github.com/sourcegraph/cody/pull/3531) & [pull/3585](https://github.com/sourcegraph/cody/pull/3585)
- Edit: Improved the response reliability, Edit commands should no longer occasionally produce Markdown outputs.[pull/3192](https://github.com/sourcegraph/cody/pull/3192)
- Chat: Handle empty chat message input and prevent submission of empty messages. [pull/3554](https://github.com/sourcegraph/cody/pull/3554)
- Chat: Warnings are now displayed correctly for large files in the @-mention file selection list. [pull/3526](https://github.com/sourcegraph/cody/pull/3526)
- Custom Commands: Errors when running context command scripts now show the error output in the notification message. [pull/3565](https://github.com/sourcegraph/cody/pull/3565)
- Edit: Improved the response reliability, Edit commands should no longer occasionally produce Markdown outputs. [pull/3192](https://github.com/sourcegraph/cody/pull/3192)
- Edit: The `document` command now defaults to Claude 3 Haiku. [pull/3572](https://github.com/sourcegraph/cody/pull/3572)

### Changed

- Chat: A new design for chat messages, with avatars and a separate context row. [pull/3639](https://github.com/sourcegraph/cody/pull/3639)
- Chat: The Enhanced Context Settings modal is opened by default for the first chat session. [pull/3547](https://github.com/sourcegraph/cody/pull/3547)
- Add information on which Cody tier is being used to analytics events. [pull/3508](https://github.com/sourcegraph/cody/pull/3508)
- Auth: Enable the new onboarding flow that does not require the redirect back to VS Code for everyone. [pull/3574](https://github.com/sourcegraph/cody/pull/3574)
- Chat: Claude 3 Sonnet is now the default model for every Cody Free or Pro user. [pull/3575](https://github.com/sourcegraph/cody/pull/3575)
- Edit: Removed a previous Edit shortcut (`Shift+Cmd/Ctrl+v`), use `Opt/Alt+K` to trigger Edits. [pull/3591](https://github.com/sourcegraph/cody/pull/3591)
- Commands: The `Editor Title Icon` configuration option has been removed from the Cody Settings menu. Users can configure the title bar icon by right-clicking on the title bar. [pull/3677](https://github.com/sourcegraph/cody/pull/3677)

### Feature Flags

> This section covers experiments that run behind feature flags for non-Enterprise users.

- Hover Commands: Cody commands are now integrated with the native hover provider, allowing you to seamlessly access essential commands on mouse hover. [pull/3585](https://github.com/sourcegraph/cody/pull/3585)

## [1.10.2]

### Added

- Cody Enterprise users now have access to an `experimental-openaicompatible` which allows bringing your own LLM via any OpenAI-compatible API. For now, this is only supported with Starchat and specific configurations - but we continue to generalize this work to support more models and OpenAI-compatible endpoints. [pull/3218](https://github.com/sourcegraph/cody/pull/3218)

## [1.10.1]

### Added

- Autocomplete: Add Claude 3 Haiku experimental autocomplete support. [pull/3538](https://github.com/sourcegraph/cody/pull/3538)

### Changed

- Telemetry: Upgrade Sentry version. [pull/3502](https://github.com/sourcegraph/cody/pull/3502)
- Autocomplete: Subsequent new lines are added to the singleline stop sequences. [pull/3549](https://github.com/sourcegraph/cody/pull/3549)

## [1.10.0]

### Added

- Added support links for Cody Pro and Enterprise users. [pull/3330](https://github.com/sourcegraph/cody/pull/3330)
- Autocomplete: Add StarCoder2 experimental support. [pull/61207](https://github.com/sourcegraph/cody/pull/61207)
- Autocomplete: Add `cody.autocomplete.experimental.fireworksOptions` for local debugging with Fireworks. [pull/3415](https://github.com/sourcegraph/cody/pull/3415)
- Chat: Add Claude 3 Haiku for Pro users. [pull/3423](https://github.com/sourcegraph/cody/pull/3423)
- Chat: Upgrade GPT 4 turbo model. [pull/3468](https://github.com/sourcegraph/cody/pull/3468)
- Chat: Added experimental support for including web pages as context by @-mentioning a URL (when the undocumented `cody.experimental.urlContext` VS Code setting is enabled). [pull/3436](https://github.com/sourcegraph/cody/pull/3436)
- Document: Added support for automatically determining the symbol and range of a documentable block from the users' cursor position. Currently supported in JavaScript, TypeScript, Go and Python. [pull/3275](https://github.com/sourcegraph/cody/pull/3275)
- Document: Added a ghost text hint ("Alt+D to Document") that shows when the users' cursor is on a documentable symbol. Currently supported in JavaScript, TypeScript, Go and Python. [pull/3275](https://github.com/sourcegraph/cody/pull/3275)
- Document: Added a shortcut (`Alt+D`) to immediately execute the document command. [pull/3275](https://github.com/sourcegraph/cody/pull/3275)
- Edit: Added a ghost text hint ("Alt+K to Generate Code") that shows on empty files. [pull/3275](https://github.com/sourcegraph/cody/pull/3275)

### Fixed

- Chat: When `@`-mentioning files in chat and edits, the list of fuzzy-matching files is shown much faster (which is especially noticeable in large workspaces).
- Chat: Fix abort related error messages with Claude 3. [pull/3466](https://github.com/sourcegraph/cody/pull/3466)
- Document: Fixed an issue where the generated documentation would be incorrectly inserted for Python. Cody will now follow PEP 257 – Docstring Conventions. [pull/3275](https://github.com/sourcegraph/cody/pull/3275)
- Edit: Fixed incorrect decorations being shown for edits that only insert new code. [pull/3424](https://github.com/sourcegraph/cody/pull/3424)

### Changed

- Autocomplete: Upgrade tree-sitter and expand language support. [pull/3373](https://github.com/sourcegraph/cody/pull/3373)
- Autocomplete: Do not cut off completions when they are almost identical to the following non-empty line. [pull/3377](https://github.com/sourcegraph/cody/pull/3377)
- Autocomplete: Enabled dynamic multiline completions by default. [pull/3392](https://github.com/sourcegraph/cody/pull/3392)
- Autocomplete: Improve StarCoder2 Ollama support. [pull/3452](https://github.com/sourcegraph/cody/pull/3452)
- Autocomplete: Upgrade tree-sitter grammars and add Dart support. [pull/3476](https://github.com/sourcegraph/cody/pull/3476)
- Autocomplete: Wrap tree-sitter parse calls in OpenTelemetry spans. [pull/3419](https://github.com/sourcegraph/cody/pull/3419)
- Chat: The <kbd>UpArrow</kbd> key in an empty chat editor now edits the most recently sent message instead of populating the editor with the last message's text.
- Chat: The chat editor uses a new rich editor component. If you open an old chat added before this version and edit a message in the transcript with @-mentions, the @-mentions will show up as plain text and will not actually include the mentioned files unless you re-type them.
- Command: Enhanced the context provided to the Test command to help the language model determine the appropriate testing framework to use. [pull/3344](https://github.com/sourcegraph/cody/pull/3344)
- Document: Upgraded to use a faster model. [pull/3275](https://github.com/sourcegraph/cody/pull/3275)
- Properly throw an error when attempting to parse an incomplete SSE stream with the nodeClient. [pull/3479](https://github.com/sourcegraph/cody/pull/3479)

## [1.8.3]

### Fixed

- Fix crash upon initialization in the stable build if a prerelease version of the VS Code extension was used for chat after 2024-03-08. [pull/3394](https://github.com/sourcegraph/cody/pull/3394)

## [1.8.2]

### Added

- Debug: Added new commands (`Cody Debug: Enable Debug Mode` and `Cody Debug: Open Output Channel`) to the editor Command Palette and the `Settings & Support` sidebar to streamline the process of getting started with debugging Cody. [pull/3342](https://github.com/sourcegraph/cody/pull/3342)

### Fixed

- Chat: Fixed an issue where in some cases the entire document instead of just the visible portion would be included as context. [pull/3351](https://github.com/sourcegraph/cody/pull/3351)
- Chat: Fixed an issue where user aborts was not handled correctly for Claude 3. [pull/3355](https://github.com/sourcegraph/cody/pull/3355)

### Changed

- Autocomplete: Improved the stop sequences list for Ollama models. [pull/3352](https://github.com/sourcegraph/cody/pull/3352)
- Chat: Welcome message is only shown on new chat panel. [pull/3341](https://github.com/sourcegraph/cody/pull/3341)
- Chat: Wrap pasted code blocks in triple-backticks automatically. [pull/3357](https://github.com/sourcegraph/cody/pull/3357)
- Command: You can now choose a LLM model for the Generate Unit Test command. [pull/3343](https://github.com/sourcegraph/cody/pull/3343)

## [1.8.1]

### Added

### Fixed

- Fixed an issue with the new auth experience that could prevent you from opening a sign in link. [pull/3339](https://github.com/sourcegraph/cody/pull/3339)
- Custom Commands: Fixed an issue that blocked shell commands from running on Windows. [pull/3333](https://github.com/sourcegraph/cody/pull/3333)

### Changed

## [1.8.0]

### Added

- Chat: Adds experimental support for local Ollama chat models. Simply start the Ollama app. You should be able to find the models you have pulled from Ollama in the model dropdown list in your chat panel after restarting VS Code. For detailed instructions, see [pull/3282](https://github.com/sourcegraph/cody/pull/3282)
- Chat: Adds support for line ranges with @-mentioned files (Example: `Explain @src/README.md:1-5`). [pull/3174](https://github.com/sourcegraph/cody/pull/3174)
- Chat: Command prompts are now editable and compatible with @ mentions. [pull/3243](https://github.com/sourcegraph/cody/pull/3243)
- Chat: Add Claude 3 Sonnet and Claude 3 Opus for Pro users. [pull/3301](https://github.com/sourcegraph/cody/pull/3301)
- Commands: Updated the prompts for the `Explain Code` and `Find Code Smell` commands to include file ranges. [pull/3243](https://github.com/sourcegraph/cody/pull/3243)
- Custom Command: All custom commands are now listed individually under the `Custom Commands` section in the Cody sidebar. [pull/3245](https://github.com/sourcegraph/cody/pull/3245)
- Custom Commands: You can now assign keybindings to individual custom commands. Simply search for `cody.command.custom.{CUSTOM_COMMAND_NAME}` (e.g. `cody.command.custom.commit`) in the Keyboard Shortcuts editor to add keybinding. [pull/3242](https://github.com/sourcegraph/cody/pull/3242)
- Chat/Search: Local indexes are rebuilt automatically on a daily cadence when they are stale. Staleness is determined by checking whether files have changed across Git commits and in the set of working file updates not yet committed. [pull/3261](https://github.com/sourcegraph/cody/pull/3261)
- Debug: Added `Export Logs` functionality to `Settings & Support` sidebar for exporting output logs when `cody.debug.enabled` is enabled. Also available in the Command Palette under `Cody: Export Logs`. [pull/3256](https://github.com/sourcegraph/cody/pull/3256)
- Auth: Adds a new onboarding flow that does not require the redirect back to VS Code behind a feature flag. [pull/3244](https://github.com/sourcegraph/cody/pull/3244)
- Font: Adds Ollama logo. [pull/3281](https://github.com/sourcegraph/cody/pull/3281)

### Fixed

- Auth: Logging in via redirect should now work in Cursor. This requires Sourcegraph 5.3.2 or later. [pull/3241](https://github.com/sourcegraph/cody/pull/3241)
- Chat: Fixed error `found consecutive messages with the same speaker 'assistant'` that occurred when prompt length exceeded limit. [pull/3228](https://github.com/sourcegraph/cody/pull/3228)
- Edit: Fixed an issue where preceding and following text would not be included for instruction-based Edits. [pull/3309](https://github.com/sourcegraph/cody/pull/3309)

### Changed

- Debug: The `cody.debug.enabled` setting is now set to `true` by default. [pull/](https://github.com/sourcegraph/cody/pull/)

## [1.6.1]

### Changed

- Autocomplete: Reduce the adaptive timeout to match latency improvements. [pull/3283](https://github.com/sourcegraph/cody/pull/3283)

## [1.6.0]

### Added

- Autocomplete: Adds a new experimental throttling mechanism that should decrease latency and backend load. [pull/3186](https://github.com/sourcegraph/cody/pull/3186)
- Edit: Added keyboard shortcuts for codelens actions such as "Undo" and "Retry" [pull/2757][https://github.com/sourcegraph/cody/pull/2757]
- Chat: Displays warnings for large @-mentioned files during selection. [pull/3118](https://github.com/sourcegraph/cody/pull/3118)
- Once [sourcegraph/sourcegraph#60515](https://github.com/sourcegraph/sourcegraph/pull/60515) is deployed, login works in VSCodium. [pull/3167](https://github.com/sourcegraph/cody/pull/3167)

### Fixed

- Autocomplete: Fixed an issue where the loading indicator might get stuck in the loading state. [pull/3178](https://github.com/sourcegraph/cody/pull/3178)
- Autocomplete: Fixes an issue where Ollama results were sometimes not visible when the current line has text after the cursor. [pull/3213](https://github.com/sourcegraph/cody/pull/3213)
- Chat: Fixed an issue where Cody Chat steals focus from file editor after a request is completed. [pull/3147](https://github.com/sourcegraph/cody/pull/3147)
- Chat: Fixed an issue where the links in the welcome message for chat are unclickable. [pull/3155](https://github.com/sourcegraph/cody/pull/3155)
- Chat: File range is now displayed correctly in the chat view. [pull/3172](https://github.com/sourcegraph/cody/pull/3172)

### Changed

- Autocomplete: Removes the latency for cached completions. [pull/3138](https://github.com/sourcegraph/cody/pull/3138)
- Autocomplete: Enable the recent jaccard similarity improvements by default. [pull/3135](https://github.com/sourcegraph/cody/pull/3135)
- Autocomplete: Start retrieval phase earlier to improve latency. [pull/3149](https://github.com/sourcegraph/cody/pull/3149)
- Autocomplete: Trigger one LLM request instead of three for multiline completions to reduce the response latency. [pull/3176](https://github.com/sourcegraph/cody/pull/3176)
- Autocomplete: Allow the client to pick up feature flag changes that were previously requiring a client restart. [pull/2992](https://github.com/sourcegraph/cody/pull/2992)
- Chat: Add tracing. [pull/3168](https://github.com/sourcegraph/cody/pull/3168)
- Command: Leading slashes are removed from command names in the command menu. [pull/3061](https://github.com/sourcegraph/cody/pull/3061)

## [1.4.4]

### Added

### Fixed

- The signin menu now displays a warning for invalid URL input. [pull/3156](https://github.com/sourcegraph/cody/pull/3156)

### Changed

## [1.4.3]

### Added

- Autocomplete: Updated the BFG binary version. [pull/3130](https://github.com/sourcegraph/cody/pull/3130)

### Changed

## [1.4.2]

### Fixed

- Chat: Fixed an issue where Cody would sometimes exceed the context window limit for shorter context OpenAI models. [pull/3121](https://github.com/sourcegraph/cody/pull/3121)

## [1.4.1]

### Added

- Chat: Support `@-mentioned` in mid sentences. [pull/3043](https://github.com/sourcegraph/cody/pull/3043)
- Chat: Support `@-mentioned` in editing mode. [pull/3091](https://github.com/sourcegraph/cody/pull/3091)

### Fixed

- Autocomplete: Fixed the completion partial removal upon acceptance caused by `cody.autocomplete.formatOnAccept`. [pull/3083](https://github.com/sourcegraph/cody/pull/3083)

### Changed

- Autocomplete: Improve client side tracing to get a better understanding of the E2E latency. [pull/3034](https://github.com/sourcegraph/cody/pull/3034)
- Autocomplete: Move some work off the critical path in an attempt to further reduce latency. [pull/3096](https://github.com/sourcegraph/cody/pull/3096)
- Custom Command: The `description` field is now optional and will default to use the command prompt. [pull/3025](https://github.com/sourcegraph/cody/pull/3025)

## [1.4.0]

### Added

- Autocomplete: Add a new `cody.autocomplete.disableInsideComments` option to prevent completions from being displayed while writing code comments. [pull/3049](https://github.com/sourcegraph/cody/pull/3049)
- Autocomplete: Added a shortcut to go to the Autocomplete settings from the Cody Settings overlay. [pull/3048](https://github.com/sourcegraph/cody/pull/3048)
- Chat: Display Cody icon in the editor title of the chat panels when `cody.editorTitleCommandIcon` is enabled. [pull/2937](https://github.com/sourcegraph/cody/pull/2937)
- Command: The `Generate Unit Tests` command now functions as an inline edit command. When executed, the new tests will be automatically appended to the test file. If no existing test file is found, a temporary one will be created. [pull/2959](https://github.com/sourcegraph/cody/pull/2959)
- Command: You can now highlight the output in your terminal panel and right-click to `Ask Cody to Explain`. [pull/3008](https://github.com/sourcegraph/cody/pull/3008)
- Edit: Added a multi-model selector to the Edit input, allowing quick access to change the Edit LLM. [pull/2951](https://github.com/sourcegraph/cody/pull/2951)
- Edit: Added Cody Pro support for models: GPT-4, GPT-3.5, Claude 2.1 and Claude Instant. [pull/2951](https://github.com/sourcegraph/cody/pull/2951)
- Edit: Added new keyboard shortcuts for Edit (`Alt+K`) and Chat (`Alt+L`). [pull/2865](https://github.com/sourcegraph/cody/pull/2865)
- Edit: Improved the input UX. You can now adjust the range of the Edit, select from available symbols in the document, and get quick access to the "Document" and "Test" commands. [pull/2884](https://github.com/sourcegraph/cody/pull/2884)
- Edit/Chat: Added "ghost" text alongside code to showcase Edit and Chat commands. Enable it by setting `cody.commandHints.enabled` to true. [pull/2865](https://github.com/sourcegraph/cody/pull/2865)
- [Internal] Command: Added new code lenses for generating additional unit tests. [pull/2959](https://github.com/sourcegraph/cody/pull/2959)

### Fixed

- Chat: Messages without enhanced context should not include the sparkle emoji in context list. [pull/3006](https://github.com/sourcegraph/cody/pull/3006)
- Custom Command: Fixed an issue where custom commands could fail to load due to an invalid entry (e.g. missing prompt). [pull/3012](https://github.com/sourcegraph/cody/pull/3012)
- Edit: Fixed an issue where "Ask Cody to Explain" would result in an error. [pull/3015](https://github.com/sourcegraph/cody/pull/3015)

### Changed

- Autocomplete: Expanded the configuration list to include `astro`, `rust`, `svelte`, and `elixir` for enhanced detection of multiline triggers. [pulls/3044](https://github.com/sourcegraph/cody/pull/3044)
- Autocomplete: Improved the new jaccard similarity retriever and context mixing experiments. [pull/2898](https://github.com/sourcegraph/cody/pull/2898)
- Autocomplete: Multiline completions are now enabled only for languages from a predefined list. [pulls/3044](https://github.com/sourcegraph/cody/pull/3044)
- Autocomplete: Remove obvious prompt-continuations. [pull/2974](https://github.com/sourcegraph/cody/pull/2974)
- Autocomplete: Enables the new fast-path mode for all Cody community users to directly connect with our inference service. [pull/2927](https://github.com/sourcegraph/cody/pull/2927)
- Autocomplete: Rename `unstable-ollama` option to `experimental-ollama` to better communicate the current state. We still support `unstable-ollama` in the config for backward compatibility. [pull/3077](https://github.com/sourcegraph/cody/pull/3077)
- Chat: Edit buttons are disabled on messages generated by the default commands. [pull/3005](https://github.com/sourcegraph/cody/pull/3005)

## [1.2.3]

### Added

- Autocomplete: local inference support with [deepseek-coder](https://ollama.ai/library/deepseek-coder) powered by ollama. [pull/2966](https://github.com/sourcegraph/cody/pull/2966)
- Autocomplete: Add a new experimental fast-path mode for Cody community users that directly connections to our inference services. [pull/2927](https://github.com/sourcegraph/cody/pull/2927)

## [1.2.2]

### Fixed

- Fixed an issue where the natural language search panel would disappear instead of showing results. [pull/2981](https://github.com/sourcegraph/cody/pull/2981)

## [1.2.1]

### Fixed

- Fixed an authentication issue that caused users to be unable to sign in. [pull/2943](https://github.com/sourcegraph/cody/pull/2943)
- Chat: Updated Chat input tips as commands are no longer executable from chat. [pull/2934](https://github.com/sourcegraph/cody/pull/2934)
- Custom Command: Removed codebase as context option from the custom command menu. [pull/2932](https://github.com/sourcegraph/cody/pull/2932)
- Command: Add `/ask` back to the Cody command menu, which was removed by accident. [pull/2939](https://github.com/sourcegraph/cody/pull/2939)

### Changed

- Chat: Updated message placeholder to mention you can @# to include symbols. [pull/2866](https://github.com/sourcegraph/cody/pull/2866)

## [1.2.0]

### Added

- Chat: Add a history quick in the editor panel for chats grouped by last interaction timestamp. [pull/2250](https://github.com/sourcegraph/cody/pull/2250)
- Added support for the new `fireworks/starcoder` virtual model name when used in combination with an Enterprise instance. [pull/2714](https://github.com/sourcegraph/cody/pull/2714)
- Chat: Added support for editing any non-command chat messages. [pull/2826](https://github.com/sourcegraph/cody/pull/2826)
- Chat: New action buttons added above the chat input area for easy keyboard access. [pull/2826](https://github.com/sourcegraph/cody/pull/2826)
- Chat: Using 'Up'/'Down' to reuse previous chat messages will now correctly bring `@`-mentioned files [pull/2473](https://github.com/sourcegraph/cody/pull/2473)
- Chat: Enterprise users can now search multiple repositories for context. [pull/2879](https://github.com/sourcegraph/cody/pull/2879)
- [Internal] Edit/Chat: Added "ghost" text alongside code to showcase Edit and Chat commands. [pull/2611](https://github.com/sourcegraph/cody/pull/2611)
- [Internal] Edit/Chat: Added Cmd/Ctrl+K and Cmd/Ctrl+L commands to trigger Edit and Chat [pull/2611](https://github.com/sourcegraph/cody/pull/2611)

### Fixed

- Edit: Fixed an issue where concurrent applying edits could result in the incorrect insertion point for a new edit. [pull/2707](https://github.com/sourcegraph/cody/pull/2707)
- Edit: Fixed an issue where the file/symbol hint would remain even after the file/symbol prefix had been deleted. [pull/2712](https://github.com/sourcegraph/cody/pull/2712)
- Commands: Fixed an issue where Cody failed to register additional instructions followed by the command key when submitted from the command menu. [pull/2789](https://github.com/sourcegraph/cody/pull/2789)
- Chat: The title for the chat panel is now reset correctly on "Restart Chat Session"/"New Chat Session" button click. [pull/2786](https://github.com/sourcegraph/cody/pull/2786)
- Chat: Fixed an issue where Ctrl+Enter on Windows would not work (did not send a follow-on chat). [pull/2823](https://github.com/sourcegraph/cody/pull/2823)
- Fixes an issue where the codebase URL was not properly inferred for a git repo when the repo name contains dots. [pull/2901](https://github.com/sourcegraph/cody/pull/2901)
- Chat: Fixed an issue where the user authentication view appeared in the chat panel. [pull/2904](https://github.com/sourcegraph/cody/pull/2904)

### Changed

- Changed code block UI to show actions immediately instead of waiting for Cody's response to be completed. [pull/2737](https://github.com/sourcegraph/cody/pull/2737)
- Removed recipes, which were replaced by commands in November 2023 (version 0.18.0).
- Edit: Updated the codelens display to be more descriptive. [pull/2710](https://github.com/sourcegraph/cody/pull/2710)
- New chats are now the default when the user submits a new quesetion. Previously, follow-up questions were the default, but this frequently led to exceeding the LLM context window, which users interpreted as an error state. Follow-up questions are still accessible via ⌘-Enter or Ctrl-Enter. [pull/2768](https://github.com/sourcegraph/cody/pull/2768)
- We now allocate no more than 60% of the overall LLM context window for enhanced context. This preserves more room for follow-up questions and context. [pull/2768](https://github.com/sourcegraph/cody/pull/2768)
- Chat: Renamed the "Restart Chat Session" button to "New Chat Session". [pull/2786](https://github.com/sourcegraph/cody/pull/2786)
- Removed the `cody.experimental.chatPredictions` setting. [pull/2848](https://github.com/sourcegraph/cody/pull/2848)
- Removed support for the `context.codebase` custom command property. [pull/2848](https://github.com/sourcegraph/cody/pull/2848)
- Autocomplete: Better cancellation of requests that are no longer relevant. [pull/2855](https://github.com/sourcegraph/cody/pull/2855)
- Updated Enhanced Context popover copy and added a link to the docs. [pull/2864](https://github.com/sourcegraph/cody/pull/2864)
- Include meta information about unit test files in Autocomplete analytics. [pull/2868](https://github.com/sourcegraph/cody/pull/2868)
- Moved the Context Limit errors in chat into the deboug log output. [pull/2891](https://github.com/sourcegraph/cody/pull/2891)
- Cleaned up chat editor title buttons & history separators. [pull/2895](https://github.com/sourcegraph/cody/pull/2895)
- Context: Embeddings search by sourcegraph.com have been removed. For the moment, remote embeddings may still affect results for Sourcegraph Enterprise users through the new multi-repo search feature described above. Local embeddings are not affected by this change. [pull/2879](https://github.com/sourcegraph/cody/pull/2879)
- [Internal] New generate unit test available behind `cody.internal.unstable`. [pull/2646](https://github.com/sourcegraph/cody/pull/2646)
- Commands: Slash commands are no longer supported in chat panel. [pull/2869](https://github.com/sourcegraph/cody/pull/2869)
- Commands: The underlying prompt for the default chat commands will be displayed in the chat panel. [pull/2869](https://github.com/sourcegraph/cody/pull/2869)

## [1.1.3]

### Added

### Fixed

- Autocomplete: Fixes an issue where the context retriever would truncate the results too aggressively. [pull/2652](https://github.com/sourcegraph/cody/pull/2652)
- Autocomplete: Improve the stability of multiline completion truncation during streaming by gracefully handling missing brackets in incomplete code segments. [pull/2682](https://github.com/sourcegraph/cody/pull/2682)
- Autocomplete: Improves the jaccard similarity retriever to find better matches. [pull/2662](https://github.com/sourcegraph/cody/pull/2662)
- Fixed prompt construction issue for the edit command. [pull/2716](https://github.com/sourcegraph/cody/pull/2716)

### Changed

- Made the Enterprise login button more prominent. [pull/2672](https://github.com/sourcegraph/cody/pull/2672)
- Edit: Cody will now always generate new code when the cursor is on an empty line. [pull/2611](https://github.com/sourcegraph/cody/pull/2611)

## [1.1.2]

### Fixed

- Fixing Steal the cursor issue https://github.com/sourcegraph/cody/pull/2674

## [1.1.1]

### Fixed

- Fixed authentication issue when trying to connect to an enterprise instance. [pull/2667](https://github.com/sourcegraph/cody/pull/2667)

## [1.1.0]

### Added

- Edit: Added support for user-provided context. Use "@" to include files and "@#" to include specific symbols. [pull/2574](https://github.com/sourcegraph/cody/pull/2574)
- Autocomplete: Experimental support for inline completions with Code Llama via [Ollama](https://ollama.ai/) running locally. [pull/2635](https://github.com/sourcegraph/cody/pull/2635)

### Fixed

- Chat no longer shows "embeddings" as the source for all automatically included context files [issues/2244](https://github.com/sourcegraph/cody/issues/2244)/[pull/2408](https://github.com/sourcegraph/cody/pull/2408)
- Display the source and range of enhanced context correctly in UI. [pull/2542](https://github.com/sourcegraph/cody/pull/2542)
- Context from directory for commands and custom commands now shows up correctly under enhanced context. [issues/2548](https://github.com/sourcegraph/cody/issues/2548)/[pull/2542](https://github.com/sourcegraph/cody/pull/2542)
- @-mentioning the same file a second time in chat no longer duplicates the filename prefix [issues/2243](https://github.com/sourcegraph/cody/issues/2243)/[pull/2474](https://github.com/sourcegraph/cody/pull/2474)
- Do not automatically append open file name to display text for chat questions. [pull/2580](https://github.com/sourcegraph/cody/pull/2580)
- Fixed unresponsive stop button in chat when an error is presented. [pull/2588](https://github.com/sourcegraph/cody/pull/2588)
- Added existing `cody.useContext` config to chat to control context fetching strategy. [pull/2616](https://github.com/sourcegraph/cody/pull/2616)
- Fixed extension start up issue for enterprise users who do not have primary email set up. [pull/2665](https://github.com/sourcegraph/cody/pull/2665)
- All Chat windows are now closed properly on sign out. [pull/2665](https://github.com/sourcegraph/cody/pull/2665)
- Fixed issue with incorrect chat model selected on first chat session for DotCom users after reauthorization. [issues/2648](https://github.com/sourcegraph/cody/issues/2648)
- Fixed unresponsive dropdown menu for selecting chat model in Chat view. [pull/2627](https://github.com/sourcegraph/cody/pull/2627)
- [Internal] Opening files with non-file schemed URLs no longer breaks Autocomplete when `.cody/ignore` is enabled. [pull/2640](https://github.com/sourcegraph/cody/pull/2640)

### Changed

- Chat: Display chats in the treeview provider grouped by last interaction timestamp. [pull/2250](https://github.com/sourcegraph/cody/pull/2250)
- Autocomplete: Accepting a full line completion will not immedialty start another completion request on the same line. [pulls/2446](https://github.com/sourcegraph/cody/pull/2446)
- Folders named 'bin/' are no longer filtered out from chat `@`-mentions but instead ranked lower. [pull/2472](https://github.com/sourcegraph/cody/pull/2472)
- Files ignored in `.cody/ignore` (if the internal experiment is enabled) will no longer show up in chat `@`-mentions. [pull/2472](https://github.com/sourcegraph/cody/pull/2472)
- Adds a new experiment to test a higher parameter StarCoder model for single-line completions. [pull/2632](https://github.com/sourcegraph/cody/pull/2632)
- [Internal] All non-file schemed URLs are now ignored by default when `.cody/ignore` is enabled. [pull/2640](https://github.com/sourcegraph/cody/pull/2640)

## [1.0.5]

### Added

- [Internal] New `cody.internal.unstable` setting for enabling unstable experimental features for internal use only. Included `.cody/ignore` for internal testing. [pulls/1382](https://github.com/sourcegraph/cody/pull/1382)

### Fixed

- @-mentioning files on Windows no longer sometimes renders visible markdown for the links in the chat [issues/2388](https://github.com/sourcegraph/cody/issues/2388)/[pull/2398](https://github.com/sourcegraph/cody/pull/2398)
- Mentioning multiple files in chat no longer only includes the first file [issues/2402](https://github.com/sourcegraph/cody/issues/2402)/[pull/2405](https://github.com/sourcegraph/cody/pull/2405)
- Enhanced context is no longer added to commands and custom commands that do not require codebase context. [pulls/2537](https://github.com/sourcegraph/cody/pull/2537)
- Unblock `AltGraph` key on chat inputs. [pulls/2558](https://github.com/sourcegraph/cody/pull/2558)
- Display error messages from the LLM without replacing existing responses from Cody in the Chat UI. [pull/2566](https://github.com/sourcegraph/cody/pull/2566)

### Changed

- The `inline` mode for Custom Commands has been removed. [pull/2551](https://github.com/sourcegraph/cody/pull/2551)

## [1.0.4]

### Added

### Fixed

- Fixed config parsing to ensure we read the right remote server endpoint everywhere. [pulls/2456](https://github.com/sourcegraph/cody/pull/2456)

### Changed

- Autocomplete: Accepting a full line completion will not immediately start another completion request on the same line. [pulls/2446](https://github.com/sourcegraph/cody/pull/2446)
- Changes to the model in the new chat experience on the Cody Pro plan will now be remembered. [pull/2438](https://github.com/sourcegraph/cody/pull/2438)

## [1.0.3]

### Added

### Fixed

### Changed

- Logging improvements for accuracy. [pulls/2444](https://github.com/sourcegraph/cody/pull/2444)

## [1.0.2]

### Added

### Fixed

- Chat: Honor the cody.codebase setting for manually setting the remote codebase context. [pulls/2415](https://github.com/sourcegraph/cody/pull/2415)
- Fixes the Code Lenses feature. [issues/2428](https://github.com/sourcegraph/cody/issues/2428)

### Changed

- The chat history is now associated to the currently logged in account. [issues/2261](https://github.com/sourcegraph/cody/issues/2261)

## [1.0.1]

### Added

### Fixed

- Fixes an issue where GPT 3.5 requests were sometimes left hanging. [pull/2386](https://github.com/sourcegraph/cody/pull/2386)
- Chat: Use the proper token limits for enterprise users. [pulls/2395](https://github.com/sourcegraph/cody/pull/2395)

### Changed

- Hide the LLM dropdown in the new Chat UX for enterprise instances where there is no choice to switch models. [pulls/2393](https://github.com/sourcegraph/cody/pull/2393)

## [1.0.0]

### Added

- Adds support for Mixtral by Mistral in the LLM dropdown list. [issues/2307](https://github.com/sourcegraph/cody/issues/2307)

### Fixed

- Context: The "Continue Indexing" button works on Windows. [issues/2328](https://github.com/sourcegraph/cody/issues/2328)
- Context: The "Embeddings Incomplete" status bar item shows an accurate percent completion. Previously we showed the percent *in*complete, but labeled it percent complete. We no longer display a spurious "Cody Embeddings Index Complete" toast if indexing fails a second time. [pull/2368](https://github.com/sourcegraph/cody/pull/2368)

### Changed

- Updates the code smell icon so it does not stand out in some VS Code themes.

## [0.18.6]

### Added

- Context: Incomplete embeddings indexing status can seen in the status bar. On macOS and Linux, indexing can be resumed by clicking there. However Windows users will still see an OS error 5 (access denied) when retrying indexing. [pull/2265](https://github.com/sourcegraph/cody/pull/2265)
- Autocomplete: Add the `cody.autocomplete.formatOnAccept` user setting, which allows users to enable or disable the automatic formatting of autocomplete suggestions upon acceptance. [pull/2327](https://github.com/sourcegraph/cody/pull/2327)

### Fixed

- Autocomplete: Don't show loading indicator when a user is rate limited. [pull/2314](https://github.com/sourcegraph/cody/pull/2314)
- Fixes an issue where the wrong rate limit count was shown. [pull/2312](https://github.com/sourcegraph/cody/pull/2312)
- Chat: Fix icon rendering on the null state. [pull/2336](https://github.com/sourcegraph/cody/pull/2336)
- Chat: The current file, when included as context, is now shown as a relative path and is a clickable link. [pull/2344](https://github.com/sourcegraph/cody/pull/2344)
- Chat: Reopened chat panels now use the correct chat title. [pull/2345](https://github.com/sourcegraph/cody/pull/2345)
- Chat: Fixed an issue where the command settings menu would not open when clicked. [pull/2346](https://github.com/sourcegraph/cody/pull/2346)
- Fixed an issue where `/reset` command throws an error in the chat panel. [pull/2313](https://github.com/sourcegraph/cody/pull/2313)

### Changed

- Update Getting Started Guide. [pull/2279](https://github.com/sourcegraph/cody/pull/2279)
- Commands: Edit commands are no longer shown in the chat slash command menu. [pull/2339](https://github.com/sourcegraph/cody/pull/2339)
- Change Natural Language Search to Beta [pull/2351](https://github.com/sourcegraph/cody/pull/2351)

## [0.18.5]

### Added

### Fixed

- Chat: Fixed support for the `cody.chat.preInstruction` setting. [pull/2255](https://github.com/sourcegraph/cody/pull/2255)
- Fixes an issue where pasting into the document was not properly tracked. [pull/2293](https://github.com/sourcegraph/cody/pull/2293)
- Edit: Fixed an issue where the documentation command would incorrectly position inserted edits. [pull/2290](https://github.com/sourcegraph/cody/pull/2290)
- Edit: Fixed an issue where the documentation command would scroll to code that is already visible [pull/2296](https://github.com/sourcegraph/cody/pull/2296)

### Changed

- Settings: Relabel "symf Context" as "Search Context". [pull/2285](https://github.com/sourcegraph/cody/pull/2285)
- Chat: Removed 'Chat Suggestions' setting. [pull/2284](https://github.com/sourcegraph/cody/pull/2284)
- Edit: Completed edits are no longer scrolled back into view in the active file. [pull/2297](https://github.com/sourcegraph/cody/pull/2297)
- Chat: Update welcome message. [pull/2298](https://github.com/sourcegraph/cody/pull/2298)
- Edit: Decorations are no longer shown once an edit has been applied. [pull/2304](https://github.com/sourcegraph/cody/pull/2304)

## [0.18.4]

### Added

### Fixed

- Fixes an issue where the sidebar would not properly load when not signed in. [pull/2267](https://github.com/sourcegraph/cody/pull/2267)
- Fixes an issue where telemetry events were not properly logged with the new chat experience. [pull/2291](https://github.com/sourcegraph/cody/pull/2291)

### Changed

## [0.18.3]

### Added

- Autocomplete: Adds a new experimental option to improve the latency when showing the next line after accepting a completion (hot streak mode). [pull/2118](https://github.com/sourcegraph/cody/pull/2118)
- Chat: Add a settings button in the Chat panel to open extension settings. [pull/2117](https://github.com/sourcegraph/cody/pull/2117)

### Fixed

- Fix pre-release version numbers not being correctly detected. [pull/2240](https://github.com/sourcegraph/cody/pull/2240)
- Embeddings appear in the enhanced context selector when the user is already signed in and loads/reloads VSCode. [pull/2247](https://github.com/sourcegraph/cody/pull/2247)
- Embeddings status in the enhanced context selector has accurate messages when working in workspaces that aren't git repositories, or in git repositories which don't have remotes. [pull/2235](https://github.com/sourcegraph/cody/pull/2235)

### Changed

- Replace "Sign Out" with an account dialog. [pull/2233](https://github.com/sourcegraph/cody/pull/2233)
- Chat: Update chat icon and transcript gradient. [pull/2254](https://github.com/sourcegraph/cody/pull/2254)
- Remove the experimental `syntacticPostProcessing` flag. This behavior is now the default.

## [0.18.2]

### Added

### Fixed

- Chat: You can @-mention files starting with a dot. [pull/2209](https://github.com/sourcegraph/cody/pull/2209)
- Chat: Typing a complete filename when @-mentioning files and then pressing `<tab>` will no longer duplicate the filename [pull/2218](https://github.com/sourcegraph/cody/pull/2218)
- Autocomplete: Fixes an issue where changing user accounts caused some configuration issues. [pull/2182](https://github.com/sourcegraph/cody/pull/2182)
- Fixes an issue where focusing the VS Code extension window caused unexpected errors when connected to an Enterprise instance. [pull/2182](https://github.com/sourcegraph/cody/pull/2182)
- Embeddings: Send embeddings/initialize to the local embeddings controller. [pull/2183](https://github.com/sourcegraph/cody/pull/2183)
- Chat: Do not parse Windows file paths as URIs. [pull/2197](https://github.com/sourcegraph/cody/pull/2197)
- Search: Fix symf index dir on Windows. [pull/2207](https://github.com/sourcegraph/cody/pull/2207)
- Chat: You can @-mention files on Windows without generating an error. [pull/2197](https://github.com/sourcegraph/cody/pull/2197)
- Chat: You can @-mention files on Windows using backslashes and displayed filenames will use backslashes [pull/2215](https://github.com/sourcegraph/cody/pull/2215)
- Sidebar: Fix "Release Notes" label & link for pre-releases in sidebar. [pull/2210](https://github.com/sourcegraph/cody/pull/2210)
- Search: Send sigkill to symf when extension exits. [pull/2225](https://github.com/sourcegraph/cody/pull/2225)
- Search: Support cancelling index. [pull/2202](https://github.com/sourcegraph/cody/pull/2202)
- Chat Fix cursor blink issue and ensure proper chat initialization synchronization. [pull/2193](https://github.com/sourcegraph/cody/pull/2193)
- plg: display errors when autocomplete rate limits trigger [pull/2193](https://github.com/sourcegraph/cody/pull/2135)
- Mark Upgrade/Usage links as dot-com only [pull/2219](https://github.com/sourcegraph/cody/pull/2219)

### Changed

- Search: Only show search instructions on hover or focus [pull/2212](https://github.com/sourcegraph/cody/pull/2212)

## [0.18.1]

### Added

### Fixed

- Chat: Always include selection in Enhanced Context. [pull/2144](https://github.com/sourcegraph/cody/pull/2144)
- Chat: Fix abort. [pull/2159](https://github.com/sourcegraph/cody/pull/2159)
- Autocomplete: Fix rate limits messages for short time spans. [pull/2152](https://github.com/sourcegraph/cody/pull/2152)

### Changed

- Chat: Improve slash command heading padding. [pull/2173](https://github.com/sourcegraph/cody/pull/2173)

## [0.18.0]

### Added

- Edit: "Ask Cody to Generate" or the "Edit" command now stream incoming code directly to the document when only inserting new code. [pull/1883](https://github.com/sourcegraph/cody/pull/1883)
- Chat: New chat preview models `claude-2.1` is now avaliable for sourcegraph.com users. [pull/1860](https://github.com/sourcegraph/cody/pull/1860)
- Edit: Added context-aware code actions for "Generate", "Edit" and "Document" commands. [pull/1724](https://github.com/sourcegraph/cody/pull/1724)
- Chat: @'ing files now uses a case insensitive fuzzy search. [pull/1889](https://github.com/sourcegraph/cody/pull/1889)
- Edit: Added a faster, more optimized response for the "document" command. [pull/1900](https://github.com/sourcegraph/cody/pull/1900)
- Chat: Restore last opened chat panel on reload. [pull/1918](https://github.com/sourcegraph/cody/pull/1918)

### Fixed

- Chat: Display OS specific keybinding in chat welcome message. [pull/2051](https://github.com/sourcegraph/cody/pull/2051)
- Embeddings indexes can be generated and stored locally in repositories with a default fetch URL that is not already indexed by sourcegraph.com through the Enhanced Context selector. [pull/2069](https://github.com/sourcegraph/cody/pull/2069)
- Chat: Support chat input history on "up" and "down" arrow keys again. [pull/2059](https://github.com/sourcegraph/cody/pull/2059)
- Chat: Decreased debounce time for creating chat panels to improve responsiveness. [pull/2115](https://github.com/sourcegraph/cody/pull/2115)
- Chat: Fix infinite loop when searching for symbols. [pull/2114](https://github.com/sourcegraph/cody/pull/2114)
- Chat: Speed up chat panel debounce w/ trigger on leading edge too. [pull/2126](https://github.com/sourcegraph/cody/pull/2126)
- Chat: Fix message input overlapping with enhanced context button. [pull/2141](https://github.com/sourcegraph/cody/pull/2141)
- Support chat input history on "up" and "down" arrow keys again. [pull/2059](https://github.com/sourcegraph/cody/pull/2059)
- Edit: Fixed an issue where Cody would regularly include unrelated XML tags in the generated output. [pull/1789](https://github.com/sourcegraph/cody/pull/1789)
- Chat: Fixed an issue that caused Cody to be unable to locate active editors when running commands from the new chat panel. [pull/1793](https://github.com/sourcegraph/cody/pull/1793)
- Chat: Replaced uses of deprecated getWorkspaceRootPath that caused Cody to be unable to determine the current workspace in the chat panel. [pull/1793](https://github.com/sourcegraph/cody/pull/1793)
- Chat: Input history is now preserved between chat sessions. [pull/1826](https://github.com/sourcegraph/cody/pull/1826)
- Chat: Fixed chat command selection behavior in chat input box. [pull/1828](https://github.com/sourcegraph/cody/pull/1828)
- Chat: Add delays before sending webview ready events to prevent premature sending. This fixes issue where chat panel fails to load when multiple chat panels are opened simultaneously. [pull/1836](https://github.com/sourcegraph/cody/pull/1836)
- Autocomplete: Fixes a bug that caused autocomplete to be triggered at the end of a block or function invocation. [pull/1864](https://github.com/sourcegraph/cody/pull/1864)
- Edit: Incoming edits that are afixed to the selected code and now handled properly (e.g. docstrings). [pull/1724](https://github.com/sourcegraph/cody/pull/1724)
- Chat: Allowed backspace and delete keys to remove characters in chat messages input box.
- Edit: Retrying an edit will now correctly use the original intended range. [pull/1926](https://github.com/sourcegraph/cody/pull/1926)
- Chat: Allowed backspace and delete keys to remove characters in chat messages input box. [pull/1906](https://github.com/sourcegraph/cody/pull/1906)
- Chat: The commands display box in the chat input box now uses the same styles as the @ command results box. [pull/1962](https://github.com/sourcegraph/cody/pull/1962)
- Chat: Sort commands and prompts alphabetically in commands menu and chat. [pull/1998](https://github.com/sourcegraph/cody/pull/1998)
- Chat: Fix chat command selection to only filter on '/' prefix. [pull/1980](https://github.com/sourcegraph/cody/pull/1980)
- Chat: Improve @-file completion to better preserve input value. [pull/1980](https://github.com/sourcegraph/cody/pull/1980)
- Edit: Fixed "Ask Cody: Edit Code" no longer showing in the command palette. [pull/2004](https://github.com/sourcegraph/cody/pull/2004)
- Edit: Fixed an issue where Cody could incorrectly produce edits when repositioning code or moving your cursor onto new lines. [pull/2005](https://github.com/sourcegraph/cody/pull/2005)

### Changed

- Chat: Uses the new Chat UI by default. [pull/2079](https://github.com/sourcegraph/cody/pull/2079)
- Inline Chat is now deprecated and removed. [pull/2079](https://github.com/sourcegraph/cody/pull/2079)
- Fixup Tree View is now deprecated and removed. [pull/2079](https://github.com/sourcegraph/cody/pull/2079)
- Enhanced Context used to turn off automatically after the first chat. Now it stays enabled until you disable it. [pull/2069](https://github.com/sourcegraph/cody/pull/2069)
- Chat: Reuse existing New Chat panel to prevent having multiple new chats open at once. [pull/2087](https://github.com/sourcegraph/cody/pull/2087)
- Chat: Close the Enhanced Context popover on chat input focus. [pull/2091](https://github.com/sourcegraph/cody/pull/2091)
- Chat: Show onboarding glowy dot guide until first time opening Enhanced Context. [pull/2097](https://github.com/sourcegraph/cody/pull/2097)
- In 0.12, we simplified the sign-in process and removed the option to sign into
  Cody App from VScode. If you were still signed in to Cody App, we invite you to
  sign in to Sourcegraph.com directly. The extension will do this automatically if
  possible but you may need to sign in again. If you have set up embeddings in
  Cody App, VScode will now search your local embeddings automatically: You no
  longer need to have the Cody App open. Note, the sidebar chat indicator may
  say embeddings were not found while we work on improving chat.
  [pull/2099](https://github.com/sourcegraph/cody/pull/2099)
- Commands: Expose commands in the VS Code command palette and clean up the context menu. [pull/1209](https://github.com/sourcegraph/cody/pull/2109)
- Search: Style and UX improvements to the search panel. [pull/2138](https://github.com/sourcegraph/cody/pull/2138)
- Chat: Reduce size of chats list blank copy. [pull/2137](https://github.com/sourcegraph/cody/pull/2137)
- Chat: Update message input placeholder to mention slash commands. [pull/2142](https://github.com/sourcegraph/cody/pull/2142)
- Inline Chat will soon be deprecated in favor of the improved chat and command experience. It is now disabled by default and does not work when the new chat panel is enabled. [pull/1797](https://github.com/sourcegraph/cody/pull/1797)
- Chat: Updated the design and location for the `chat submit` button and `stop generating` button. [pull/1782](https://github.com/sourcegraph/cody/pull/1782)
- Commands: `Command Code Lenses` has been moved out of experimental feature and is now available to general. [pull/0000](https://github.com/sourcegraph/cody/pull/0000)
- Commands: `Custom Commands` has been moved out of experimental and is now at Beta. [pull/0000](https://github.com/sourcegraph/cody/pull/0000)
- Commands: The Custom Commands Menu now closes on click outside of the menu. [pull/1854](https://github.com/sourcegraph/cody/pull/1854)
- Autocomplete: Remove the frequency of unhelpful autocompletions. [pull/1862](https://github.com/sourcegraph/cody/pull/1862)
- Chat: The default chat model `claude-2` has been replaced with the pinned version `claude-2.0`. [pull/1860](https://github.com/sourcegraph/cody/pull/1860)
- Edit: Improved the response consistency for edits. Incoming code should now better match the surrounding code and contain less formatting errors [pull/1892](https://github.com/sourcegraph/cody/pull/1892)
- Command: Editor title icon will only show up in non-readonly file editor views. [pull/1909](https://github.com/sourcegraph/cody/pull/1909)
- Chat: Include text in dotCom chat events. [pull/1910](https://github.com/sourcegraph/cody/pull/1910)
- Chat: Replaced vscode links with custom "cody.chat.open.file" protocol when displaying file names in chat. [pull/1919](https://github.com/sourcegraph/cody/pull/1919)
- Chat: Change "Restart Chat Session" icon and add a confirmation. [pull/2002](https://github.com/sourcegraph/cody/pull/2002)
- Chat; Improve enhanced context popover and button styles. [pull/2075](https://github.com/sourcegraph/cody/pull/2075)

## [0.16.3]

### Added

### Fixed

### Changed

- Reverting back to v0.16.1 due to critical issue found in v0.16.2.

## [0.16.2]

### Added

- Chat: New chat preview models `claude-2.1` is now avaliable for sourcegraph.com users. [pull/1860](https://github.com/sourcegraph/cody/pull/1860)
- Edit: Added context-aware code actions for "Generate", "Edit" and "Document" commands. [pull/1724](https://github.com/sourcegraph/cody/pull/1724)
- Chat: @'ing files now uses a case insensitive fuzzy search. [pull/1889](https://github.com/sourcegraph/cody/pull/1889)
- Edit: Added a faster, more optimized response for the "document" command. [pull/1900](https://github.com/sourcegraph/cody/pull/1900)
- Chat: Restore last opened chat panel on reload. [pull/1918](https://github.com/sourcegraph/cody/pull/1918)
- Chat: Edit button to rename the chat history. [pull/1818](https://github.com/sourcegraph/cody/pull/1818)

### Fixed

- Edit: Fixed an issue where Cody would regularly include unrelated XML tags in the generated output. [pull/1789](https://github.com/sourcegraph/cody/pull/1789)
- Chat: Fixed an issue that caused Cody to be unable to locate active editors when running commands from the new chat panel. [pull/1793](https://github.com/sourcegraph/cody/pull/1793)
- Chat: Replaced uses of deprecated getWorkspaceRootPath that caused Cody to be unable to determine the current workspace in the chat panel. [pull/1793](https://github.com/sourcegraph/cody/pull/1793)
- Chat: Input history is now preserved between chat sessions. [pull/1826](https://github.com/sourcegraph/cody/pull/1826)
- Chat: Fixed chat command selection behavior in chat input box. [pull/1828](https://github.com/sourcegraph/cody/pull/1828)
- Chat: Add delays before sending webview ready events to prevent premature sending. This fixes issue where chat panel fails to load when multiple chat panels are opened simultaneously. [pull/1836](https://github.com/sourcegraph/cody/pull/1836)
- Autocomplete: Fixes a bug that caused autocomplete to be triggered at the end of a block or function invocation. [pull/1864](https://github.com/sourcegraph/cody/pull/1864)
- Edit: Incoming edits that are afixed to the selected code and now handled properly (e.g. docstrings). [pull/1724](https://github.com/sourcegraph/cody/pull/1724)
- Chat: Allowed backspace and delete keys to remove characters in chat messages input box.
- Edit: Retrying an edit will now correctly use the original intended range. [pull/1926](https://github.com/sourcegraph/cody/pull/1926)
- Chat: Allowed backspace and delete keys to remove characters in chat messages input box. [pull/1906](https://github.com/sourcegraph/cody/pull/1906)
- Chat: The commands display box in the chat input box now uses the same styles as the @ command results box. [pull/1962](https://github.com/sourcegraph/cody/pull/1962)
- Chat: Sort commands and prompts alphabetically in commands menu and chat. [pull/1998](https://github.com/sourcegraph/cody/pull/1998)
- Chat: Fix chat command selection to only filter on '/' prefix. [pull/1980](https://github.com/sourcegraph/cody/pull/1980)
- Chat: Improve @-file completion to better preserve input value. [pull/1980](https://github.com/sourcegraph/cody/pull/1980)
- Edit: Fixed "Ask Cody: Edit Code" no longer showing in the command palette. [pull/2004](https://github.com/sourcegraph/cody/pull/2004)
- Edit: Fixed an issue where Cody could incorrectly produce edits when repositioning code or moving your cursor onto new lines. [pull/2005](https://github.com/sourcegraph/cody/pull/2005)

### Changed

- Inline Chat will soon be deprecated in favor of the improved chat and command experience. It is now disabled by default and does not work when the new chat panel is enabled. [pull/1797](https://github.com/sourcegraph/cody/pull/1797)
- Chat: Updated the design and location for the `chat submit` button and `stop generating` button. [pull/1782](https://github.com/sourcegraph/cody/pull/1782)
- Commands: `Command Code Lenses` has been moved out of experimental feature and is now available to general. [pull/0000](https://github.com/sourcegraph/cody/pull/0000)
- Commands: `Custom Commands` has been moved out of experimental and is now at Beta. [pull/0000](https://github.com/sourcegraph/cody/pull/0000)
- Commands: The Custom Commands Menu now closes on click outside of the menu. [pull/1854](https://github.com/sourcegraph/cody/pull/1854)
- Autocomplete: Remove the frequency of unhelpful autocompletions. [pull/1862](https://github.com/sourcegraph/cody/pull/1862)
- Chat: The default chat model `claude-2` has been replaced with the pinned version `claude-2.0`. [pull/1860](https://github.com/sourcegraph/cody/pull/1860)
- Edit: Improved the response consistency for edits. Incoming code should now better match the surrounding code and contain less formatting errors [pull/1892](https://github.com/sourcegraph/cody/pull/1892)
- Command: Editor title icon will only show up in non-readonly file editor views. [pull/1909](https://github.com/sourcegraph/cody/pull/1909)
- Chat: Include text in dotCom chat events. [pull/1910](https://github.com/sourcegraph/cody/pull/1910)
- Chat: Replaced vscode links with custom "cody.chat.open.file" protocol when displaying file names in chat. [pull/1919](https://github.com/sourcegraph/cody/pull/1919)
- Chat: Change "Restart Chat Session" icon and add a confirmation. [pull/2002](https://github.com/sourcegraph/cody/pull/2002)
- Chat; Improve enhanced context popover and button styles. [pull/2075](https://github.com/sourcegraph/cody/pull/2075)

## [0.16.1]

### Added

### Fixed

### Changed

- Move decision about which autocomplete deployment to use for StarCoder to the server. [pull/1845](https://github.com/sourcegraph/cody/pull/1845)

## [0.16.0]

### Added

- Chat: A new chat model selection dropdown that allows selecting between different chat models when connected to the sourcegraph.com instance. [pull/1676](https://github.com/sourcegraph/cody/pull/1676)
- Chat: New button in editor title for restarting chat session in current chat panel (non-sidebar chat view). [pull/1687](https://github.com/sourcegraph/cody/pull/1687)
- Chat: New `@` command that allows you to attach files via the chat input box. [pull/1631](https://github.com/sourcegraph/cody/pull/1631)
- Edit: Added a specific, faster, response flow for fixes when triggered directly from code actions. [pull/1639](https://github.com/sourcegraph/cody/pull/1639)
- Edit: Improved context fetching for quick fixes to better include code related to the problem. [pull/1723](https://github.com/sourcegraph/cody/pull/1723)
- Chat: Added option to configure whether to add enhanced context from codebase for chat question in the new chat panel. [pull/1738](https://github.com/sourcegraph/cody/pull/1738)
- Autocomplete: Added new retrieval and mixing strategies to improve Autocomplete context. [pull/1752](https://github.com/sourcegraph/cody/pull/1752)
- Commands: Supports passing additional input text to commands via the chat input box. For example, adds additional instruction after the command key: `/explain response in Spanish`. [pull/1731](https://github.com/sourcegraph/cody/pull/1731)

### Fixed

- Edit: Updated the fixup create task to just use the previous command text. [pull/1615](https://github.com/sourcegraph/cody/pull/1615)
- Fixed an issue that would cause an aborted chat message to show an error "Cody did not respond with any text". [pull/1668](https://github.com/sourcegraph/cody/pull/1668)
- Chat: Opening files from the new chat panel will now show up beside the chat panel instead of on top of the chat panel. [pull/1677](https://github.com/sourcegraph/cody/pull/1677)
- Chat: Prevented default events on certain key combos when chat box is focused. [pull/1690](https://github.com/sourcegraph/cody/pull/1690)
- Command: Fixed an issue that opened a new chat window when running `/doc` and `/edit` commands from the command palette. [pull/1678](https://github.com/sourcegraph/cody/pull/1678)
- Chat: Prevent sidebar from opening when switching editor chat panels. [pull/1691](https://github.com/sourcegraph/cody/pull/1691)
- Chat: Prevent `"command 'cody.chat'panel.new' not found"` error when the new chat panel UI is disabled. [pull/1696](https://github.com/sourcegraph/cody/pull/1696)
- Autocomplete: Improved the multiline completions truncation logic. [pull/1709](https://github.com/sourcegraph/cody/pull/1709)
- Autocomplete: Fix an issue where typing as suggested causes the completion to behave unexpectedly. [pull/1701](https://github.com/sourcegraph/cody/pull/1701)
- Chat: Forbid style tags in DOMPurify config to prevent code block rendering issues. [pull/1747](https://github.com/sourcegraph/cody/pull/1747)
- Edit: Fix `selectedCode` and `problemCode` sometimes being added to the document after an edit. [pull/1765](https://github.com/sourcegraph/cody/pull/1765)
- Edit: Fix the code lens containing options to diff, undo and retry being automatically dismissed for users who have `autoSave` enabled. [pull/1767](https://github.com/sourcegraph/cody/pull/1767)

### Changed

- Edit: Fixed formatting issues with some editor formatters that required explict indendation configuration. [pull/1620](https://github.com/sourcegraph/cody/pull/1620)
- Edit: Fixed an issue where the diff for an edit could expand recursively each time it is viewed. [pull/1621](https://github.com/sourcegraph/cody/pull/1621)
- Editor Title Icon has been moved out of the experimental stage and is now enabled by default. [pull/1651](https://github.com/sourcegraph/cody/pull/1651)
- Clean up login page styles and make Enterprise login more prominent. [pull/1708](https://github.com/sourcegraph/cody/pull/1708)
- Autocomplete: Slightly increase the amount of time we wait for another keystroke before starting completion requests. [pull/1737](https://github.com/sourcegraph/cody/pull/1737)
- Improved new chat model selector styles. [pull/1750](https://github.com/sourcegraph/cody/pull/1750)
- Improved response time for chat, commands and edits on repositories without embeddings. [pull/1722](https://github.com/sourcegraph/cody/pull/1722)

## [0.14.5]

### Added

### Fixed

### Changed

- Added support to test a Sourcegraph specific StarCoder setup for dotcom. [pull/1670]

## [0.14.4]

### Added

### Fixed

- Chat: Fixed an issue where multiple action buttons were appended to each Code Block per chat message. [pull/1617](https://github.com/sourcegraph/cody/pull/1617)

### Changed

## [0.14.3]

### Added

- Autocomplete: Add completion intent to analytics events. [pull/1457](https://github.com/sourcegraph/cody/pull/1457)
- Edit: Added the ability to provide instructions when retrying an edit. [pull/1411](https://github.com/sourcegraph/cody/pull/1411)
- Edit: Added the ability to undo an applied edit. [pull/1411](https://github.com/sourcegraph/cody/pull/1411)
- Edit: Support applying edits in the background, instead of relying on the users' open file. [pull/1411](https://github.com/sourcegraph/cody/pull/1411)
- Assign requestID to each Code Block actions. [pull/1586](https://github.com/sourcegraph/cody/pull/1586)
- [Internal Experimental] Chat: New Experimental Chat View that appears in the editor panel instead of the sidebar when `cody.experimental.chatPanel` is enabled. [pull/1509](https://github.com/sourcegraph/cody/pull/1509)

### Fixed

- Commands: Smart selection not working on the first line of code. [pull/1508](https://github.com/sourcegraph/cody/pull/1508)
- Chat: Aborted messages are now saved to local chat history properly. [pull/1550](https://github.com/sourcegraph/cody/pull/1550)
- Adjust a completion range if it does not match the current line suffix. [pull/1507](https://github.com/sourcegraph/cody/pull/1507)
- Chat: Fix heading styles and inline code colors. [pull/1528](https://github.com/sourcegraph/cody/pull/1528)
- Custom Commands: Fix custom command menu not showing for a single custom command. [pull/1532](https://github.com/sourcegraph/cody/pull/1532)
- Chat: Focus chat input on mount even when notification for version update is shown. [pull/1556](https://github.com/sourcegraph/cody/pull/1556)
- Commands: Commands selector in chat will now scroll to the selected item's viewport automatically. [pull/1556](https://github.com/sourcegraph/cody/pull/1556)
- Edit: Errors are now shown separately to incoming edits, and will not be applied to the document. [pull/1376](https://github.com/sourcegraph/cody/pull/1376)
- Chat: Prevent cursor from moving during chat command selection. [pull/1592](https://github.com/sourcegraph/cody/pull/1592)

### Changed

- Chat: Start prompt mixin by default. [pull/1479](https://github.com/sourcegraph/cody/pull/1479)
- Edit: Incoming changes are now applied by default. [pull/1411](https://github.com/sourcegraph/cody/pull/1411)

## [0.14.2]

### Added

- Code applied from the `/edit` command will be formatted automatically through the VS Code `formatDocument` API. [pull/1441](https://github.com/sourcegraph/cody/pull/1441)

### Fixed

- User selection in active editor will not be replaced by smart selections for the `/edit` command. [pull/1429](https://github.com/sourcegraph/cody/pull/1429)
- Fixes an issue that caused part of the autocomplete response to be completed when selecting an item from the suggest widget. [pull/1477](https://github.com/sourcegraph/cody/pull/1477)
- Fixed issues where autocomplete suggestions displayed on the wrong line when connected to Anthropic as provider. [pull/1440](https://github.com/sourcegraph/cody/pull/1440)

### Changed

- Changed the "Ask Cody to Explain" Code Action to respond in the Cody sidebar instead of Inline Chat. [pull/1427](https://github.com/sourcegraph/cody/pull/1427)
- Updated prompt preambles and mixin for chat to mitigate hallucinations. [pull/1442](https://github.com/sourcegraph/cody/pull/1442)
- Cody can now respond in languages other than the default language of the user's editor. [pull/1442](https://github.com/sourcegraph/cody/pull/1442)

## [0.14.1]

### Added

- Added client-side request timeouts to Autocomplete requests. [pull/1355](https://github.com/sourcegraph/cody/pull/1355)
- Added telemetry on how long accepted autocomplete requests are kept in the document. [pull/1380](https://github.com/sourcegraph/cody/pull/1380)
- Added support for using (workspace) relative paths in `filePath`and `directoryPath` fields as context for Custom Commands. [pull/1385](https://github.com/sourcegraph/cody/pull/1385)
- [Internal] Added `CodyAutocompleteLowPerformanceDebounce` feature flag to increase debounce interval for autocomplete requests in low-performance environments. [pull/1409](https://github.com/sourcegraph/cody/pull/1409)
- New `Regenerate` Code Lens for `/edit` command that allows users to easily ask Cody to generate a new response for the current request. [pull/1383](https://github.com/sourcegraph/cody/pull/1383)

### Fixed

- Fixed an issue where autocomplete suggestions where sometimes not shown when the overlap with the next line was too large. [pull/1320](https://github.com/sourcegraph/cody/pull/1320)
- Fixed unresponsive UI for the `Configure Custom Commands` option inside the `Cody: Custom Command (Experimental)` menu. [pull/1416](https://github.com/sourcegraph/cody/pull/1416)
- Fixed last 5 used commands not showing up in the custom command history menu. [pull/1416](https://github.com/sourcegraph/cody/pull/1416)

### Changed

- Removed the unused `unstable-codegen` autocomplete provider. [pull/1364](https://github.com/sourcegraph/cody/pull/1364)
- The Fireworks autocomplete provider is now considered stable. [pull/1363](https://github.com/sourcegraph/cody/pull/1363)
- The `CodyAutocompleteMinimumLatency` feature flag is now split into three independent feature flags: `CodyAutocompleteLanguageLatency`, `CodyAutocompleteProviderLatency`, and `CodyAutocompleteUserLatency`. [pull/1351](https://github.com/sourcegraph/cody/pull/1351)
- Prevents unhelpful autocomplete suggestions at the end of file when cursor position is at 0 and the line above is also empty. [pull/1330](https://github.com/sourcegraph/cody/pull/1330)
- Adds popups to show the state of indexing for dotcom/Cody App in more situations. Fixes an issue where the database icon below the chat input status box was low contrast in some dark themes. [pull/1374](https://github.com/sourcegraph/cody/pull/1374)
- Workspace-level custom commands now works in [trusted workspaces](https://code.visualstudio.com/api/extension-guides/workspace-trust#what-is-workspace-trust) only. This does not apply to user-level custom commands. [pull/1415](https://github.com/sourcegraph/cody/pull/1415)
- Custom commands can no longer override default commands. [pull/1414](https://github.com/sourcegraph/cody/pull/1414)

## [0.14.0]

### Added

- Added information to host operating system to our analytic events. [pull/1254](https://github.com/sourcegraph/cody/pull/1254)
- Executed the `/doc` command now automatically adds the documentation directly above your selected code in your editor, instead of shown in chat. [pull/1116](https://github.com/sourcegraph/cody/pull/1116)
- New `mode` field in the Custom Commands config file enables a command to be configured on how the prompt should be run by Cody. Currently supports `inline` (run command prompt in inline chat), `edit` (run command prompt on selected code for refactoring purpose), and `insert` (run command prompt on selected code where Cody's response will be inserted on top of the selected code) modes. [pull/1116](https://github.com/sourcegraph/cody/pull/1116)
- Experimentally added `smart selection` which removes the need to manually highlight code before running the `/doc` and `/test` commands. [pull/1116](https://github.com/sourcegraph/cody/pull/1116)
- Show a notice on first autocomplete. [pull/1071](https://github.com/sourcegraph/cody/pull/1071)
- Autocomplete now takes the currently selected item in the suggest widget into account. This behavior can be disabled by setting `cody.autocomplete.suggestWidgetSelection` to `false`.
- Add the `cody.autocomplete.languages` user setting to enable or disable inline code suggestions for specified languages. [pull/1290](https://github.com/sourcegraph/cody/pull/1290)

### Fixed

- Improved quality of documentation created by the `/doc` command. [pull/1198](https://github.com/sourcegraph/cody/pull/1198)
- Removed chat and chat history created by `/edit` and `/doc` commands. [pull/1220](https://github.com/sourcegraph/cody/pull/1220)
- Only show "Ask Cody Inline" context menu item when signed in. [pull/1281](https://github.com/sourcegraph/cody/pull/1281)

### Changed

- Improved detection for the most common test runner files. [pull/1297](https://github.com/sourcegraph/cody/pull/1297)

## [0.12.4]

### Added

- New "Save Code to File.." button on code blocks. [pull/1119](https://github.com/sourcegraph/cody/pull/1119)
- Add logging for partially accepting completions. [pull/1214](https://github.com/sourcegraph/cody/pull/1214)

### Fixed

- Removed invalid variable from logs that stopped rate-limit errors from displaying properly. [pull/1205](https://github.com/sourcegraph/cody/pull/1205)
- Disable `Ask Cody Inline` in Cody Context Menu when `cody.InlineChat.enabled` is set to false. [pull/1209](https://github.com/sourcegraph/cody/pull/1209)

### Changed

- Moved "Insert at Cursor" and "Copy" buttons to the bottom of code blocks, and no longer just show on hover. [pull/1119](https://github.com/sourcegraph/cody/pull/1119)
- Increased the token limit for the selection Cody uses for the `/edit` command. [pull/1139](https://github.com/sourcegraph/cody/pull/1139)
- Autocomplete now supports infilling through the customized `claude-instant-infill` model created for Anthropic Claude Instant by default. [pull/1164](https://github.com/sourcegraph/cody/pull/1164)
- Expand the range used for code actions (thought `smart selection`) to the top-level enclosing range rather than just the line. This improves the quality of fixup actions by providing more context. [pull/1163](https://github.com/sourcegraph/cody/pull/1163)
- Autocomplete no longer triggers after the end of a block of function invocation. [pull/1218](https://github.com/sourcegraph/cody/pull/1218)

## [0.12.3]

### Added

- Add situation-based latency for unwanted autocomplete suggestions. [pull/1202](https://github.com/sourcegraph/cody/pull/1202)

### Fixed

### Changed

- Simplified sign-in in, added in 0.12.0 [pull/1036,](https://github.com/sourcegraph/cody/pull/1036) is now rolled out to 100% of new installs. [pull/1235](https://github.com/sourcegraph/cody/pull/1235)
- VScode can communicate with Cody App, even if App is started after the user has signed in to sourcegraph.com. VScode continues to monitor Cody App if it is started and stopped. [pull/1210](https://github.com/sourcegraph/cody/pull/1210)

## [0.12.2]

### Added

- Adds information about completion `items` to the `CompletionEvent` we send on every completion suggestion. [pull/1144](https://github.com/sourcegraph/cody/pull/1144)
- Clicking on the status indicator under the chat input box displays a popup to install Cody App, open Cody App, etc. The popups are only displayed under certain circumstances where Cody App can provide embeddings. [pull/1089](https://github.com/sourcegraph/cody/pull/1089)

### Fixed

### Changed

- Improves interop with the VS Code suggest widget when using the `completeSuggestWidgetSelection` feature flag. [pull/1158](https://github.com/sourcegraph/cody/pull/1158)
- Removes the need to set an Anthropic API key for the `/symf` command. The `symf` binary is now automatically downloaded. [pull/1207](https://github.com/sourcegraph/cody/pull/1207)
- Replace the "Fixup ready | Apply" buttons when you do a code edit with a single "Apply Edits" button. [pull/1201](https://github.com/sourcegraph/cody/pull/1201)
- Updated "Refactor Code" to be "Edit Code" in right click context menu. [pull/1200](https://github.com/sourcegraph/cody/pull/1200)

## [0.12.1]

### Added

### Fixed

- Fixes an issue that caused the `cody-autocomplete-claude-instant-infill` feature flag to have no effect. [pull/1132](https://github.com/sourcegraph/cody/pull/1132)

### Changed

## [0.12.0]

### Added

- Add a UI indicator when you're not signed in. [pull/970](https://github.com/sourcegraph/cody/pull/970)
- Added a completion statistics summary to the autocomplete trace view. [pull/973](https://github.com/sourcegraph/cody/pull/973)
- Add experimental option `claude-instant-infill` to the `cody.autocomplete.advanced.model` config option that enables users using the Claude Instant model to get suggestions with context awareness (infill). [pull/974](https://github.com/sourcegraph/cody/pull/974)
- New `cody.chat.preInstruction` configuration option for adding custom message at the start of all chat messages sent to Cody. Extension reload required. [pull/963](https://github.com/sourcegraph/cody/pull/963)
- Add a simplified sign-in. 50% of people will see these new sign-in buttons. [pull/1036](https://github.com/sourcegraph/cody/pull/1036)
- Now removes completions from cache when the initial suggestion prefix is deleted by users after a suggestion was displayed. This avoids unhelpful/stale suggestions from persisting. [pull/1105](https://github.com/sourcegraph/cody/pull/1105)
- VScode can now share a dotcom access token with future versions of Cody App. [pull/1090](https://github.com/sourcegraph/cody/pull/1090)

### Fixed

- Fix a potential race condition for autocomplete requests that happen when a completion is stored as the last shown candidate when it will not be shown. [pull/1059](https://github.com/sourcegraph/cody/pull/1059)
- Use `insert` instead of `replace` for `Insert at Cursor` button for inserting code to current cursor position. [pull/1118](https://github.com/sourcegraph/cody/pull/1118)
- Autocomplete: Fix support for working with CRLF line endings. [pull/1124](https://github.com/sourcegraph/cody/pull/1124)
- Fix issue that caused the custom commands menu to unable to execute commands. [pull/1123](https://github.com/sourcegraph/cody/pull/1123)

### Changed

- Remove `starter` and `premade` fields from the configuration files for custom commands (cody.json). [pull/939](https://github.com/sourcegraph/cody/pull/939)
- Enabled streaming responses for all autocomplete requests. [pull/995](https://github.com/sourcegraph/cody/pull/995)
- Sign out immediately instead of showing the quick-pick menu. [pull/1032](https://github.com/sourcegraph/cody/pull/1032)
- UX improvements to the custom command workflow (and new [custom command docs](https://sourcegraph.com/docs/cody/custom-commands)). [pull/992](https://github.com/sourcegraph/cody/pull/992)
- You can now use `alt` + `\` to trigger autocomplete requests manually. [pull/1060](https://github.com/sourcegraph/cody/pull/1060)
- Slightly reduce latency when manually triggering autocomplete requests. [pull/1060](https://github.com/sourcegraph/cody/pull/1060)
- Configure autocomplete provider based on cody LLM settings in site config. [pull/1035](https://github.com/sourcegraph/cody/pull/1035)
- Filters out single character autocomplete results. [pull/1109](https://github.com/sourcegraph/cody/pull/1109)
- Register inline completion provider for text files and notebooks only to ensure autocomplete works in environments that are fully supported. [pull/1114](https://github.com/sourcegraph/cody/pull/1114)
- The `Generate Unit Tests` command has been improved with an enhanced context fetching process that produces test results with better quality. [pull/907](https://github.com/sourcegraph/cody/pull/907)

## [0.10.2]

### Added

### Fixed

### Changed

- Use the same token limits for StarCoder as we do for Anthropic for the current experiments. [pull/1058](https://github.com/sourcegraph/cody/pull/1058)

## [0.10.1]

### Added

### Fixed

- Fix feature flag initialization for autocomplete providers. [pull/965](https://github.com/sourcegraph/cody/pull/965)

### Changed

## [0.10.0]

### Added

- New button in Chat UI to export chat history to a JSON file. [pull/829](https://github.com/sourcegraph/cody/pull/829)
- Rank autocomplete suggestion with tree-sitter when `cody.autocomplete.experimental.syntacticPostProcessing` is enabled. [pull/837](https://github.com/sourcegraph/cody/pull/837)
- Rate limit during autocomplete will now surface to the user through the status bar item. [pull/851](https://github.com/sourcegraph/cody/pull/851)

### Fixed

- Do not display error messages after clicking on the "stop-generating" button. [pull/776](https://github.com/sourcegraph/cody/pull/776)
- Add null check to Inline Controller on file change that caused the `Cannot read properties of undefined (reading 'scheme')` error when starting a new chat session. [pull/781](https://github.com/sourcegraph/cody/pull/781)
- Fixup: Resolved issue where `/fix` command incorrectly returned error "/fix is not a valid command". The `/fix` command now functions as expected when invoked in the sidebar chat. [pull/790](https://github.com/sourcegraph/cody/pull/790)
- Set font family and size in side chat code blocks to match editor font. [pull/813](https://github.com/sourcegraph/cody/pull/813)
- Add error handling to unblock Command Menu from being started up when invalid json file for custom commands is detected. [pull/827](https://github.com/sourcegraph/cody/pull/827)
- Enhanced the main quick pick menu items filtering logic. [pull/852](https://github.com/sourcegraph/cody/pull/852)
- Sidebar chat commands now match main quick pick menu commands. [pull/902](https://github.com/sourcegraph/cody/pull/902)

### Changed

- Trigger single-line completion instead of multi-line completion if the cursor is at the start of a non-empty block. [pull/913](https://github.com/sourcegraph/cody/pull/913)
- Autocomplete on VS Code desktop instances now reuses TCP connections to reduce latency. [pull/868](https://github.com/sourcegraph/cody/pull/868)
- Errors are now always logged to the output console, even if the debug mode is not enabled. [pull/851](https://github.com/sourcegraph/cody/pull/851)
- Changed default and custom commands format: slash command is now required. [pull/841](https://github.com/sourcegraph/cody/pull/841)
- The `Generate Unit Tests` command has been improved with an enhanced context fetching process that produces test results with better quality. [pull/907](https://github.com/sourcegraph/cody/pull/907)

## [0.8.0]

### Added

- Cody Commands: New `/smell` command, an improved version of the old `Find Code Smell` recipe. [pull/602](https://github.com/sourcegraph/cody/pull/602)
- Cody Commands: Display of clickable file path for current selection in chat view after executing a command. [pull/602](https://github.com/sourcegraph/cody/pull/602)
- Add a settings button to Cody pane header. [pull/701](https://github.com/sourcegraph/cody/pull/701)
- Compute suggestions based on the currently selected option in the suggest widget when `cody.autocomplete.experimental.completeSuggestWidgetSelection` is enabled. [pull/636](https://github.com/sourcegraph/cody/pull/636)
- Fixup: New `Discard` code lens to remove suggestions and decorations. [pull/711](https://github.com/sourcegraph/cody/pull/711)
- Adds an experiment to stream autocomplete responses in order to improve latency. [pull/723](https://github.com/sourcegraph/cody/pull/723)
- New chat message input, with auto-resizing and a command button. [pull/718](https://github.com/sourcegraph/cody/pull/718)
- Increased autocomplete debounce time feature flag support. [pull/733](https://github.com/sourcegraph/cody/pull/733)
- Show an update notice after extension updates. [pull/746](https://github.com/sourcegraph/cody/pull/746)
- Experimental user setting `cody.experimental.localSymbols` to enable inclusion of symbol definitions in the LLM context window. [pull/692](https://github.com/sourcegraph/cody/pull/692)
- Experimental command `/symf`, which uses a local keyword index to perform searches for symbols. Requires setting `cody.experimental.symf.path` and `cody.experimental.symf.anthropicKey`. [pull/728](https://github.com/sourcegraph/cody/pull/728).

### Fixed

- Inline Chat: Fix issue where state was not being set correctly, causing Cody Commands to use the selection range from the last created Inline Chat instead of the current selection. [pull/602](https://github.com/sourcegraph/cody/pull/602)
- Cody Commands: Commands that use the current file as context now correctly generate context message for the current file instead of using codebase context generated from current selection. [pull/683](https://github.com/sourcegraph/cody/pull/683)
- Improves the autocomplete responses on a new line after a comment. [pull/727](https://github.com/sourcegraph/cody/pull/727)
- Fixes an issue where the inline chat UI would render briefly when starting VS Code even when the feature is disabled. [pull/764](https://github.com/sourcegraph/cody/pull/764)

### Changed

- `Explain Code` command now includes visible content of the current file when no code is selected. [pull/602](https://github.com/sourcegraph/cody/pull/602)
- Cody Commands: Show errors in chat view instead of notification windows. [pull/602](https://github.com/sourcegraph/cody/pull/602)
- Cody Commands: Match commands on description in Cody menu. [pull/702](https://github.com/sourcegraph/cody/pull/702)
- Cody Commands: Don't require Esc to dismiss Cody menu. [pull/700](https://github.com/sourcegraph/cody/pull/700)
- Updated welcome chat words. [pull/748](https://github.com/sourcegraph/cody/pull/748)
- Autocomplete: Reduce network bandwidth with requests are resolved by previous responses. [pull/762](https://github.com/sourcegraph/cody/pull/762)
- Fixup: Remove `/document` and other command handling from the Refactor Menu. [pull/766](https://github.com/sourcegraph/cody/pull/766)
- The `/test` (Generate Unit Test) command was updated to use file dependencies and test examples when fetching context, in order to produce better results. To use this command, select code in your editor and run the `/test` command. It is recommended to set up test files before running the command to get optimal results. [pull/683](https://github.com/sourcegraph/cody/pull/683) [pull/602](https://github.com/sourcegraph/cody/pull/602)

## [0.6.7]

### Added

- Include token count for code generated and button click events. [pull/675](https://github.com/sourcegraph/cody/pull/675)

### Fixed

### Changed

- Include the number of accepted characters per autocomplete suggestion. [pull/674](https://github.com/sourcegraph/cody/pull/674)

## [0.6.6]

### Added

- Cody Commands: Add tab-to-complete & enter-to-complete behavior. [pull/606](https://github.com/sourcegraph/cody/pull/606)
- Option to toggle `cody.experimental.editorTitleCommandIcon` setting through status bar. [pull/611](https://github.com/sourcegraph/cody/pull/611)
- New walkthrough for Cody Commands. [pull/648](https://github.com/sourcegraph/cody/pull/648)

### Fixed

- Update file link color to match buttons. [pull/600](https://github.com/sourcegraph/cody/pull/600)
- Handle `socket hung up` errors that are not caused by the `stop generating` button. [pull/598](https://github.com/sourcegraph/cody/pull/598)
- Fix "Reload Window" appearing in all VS Code views. [pull/603](https://github.com/sourcegraph/cody/pull/603)
- Fixes issues where in some instances, suggested autocomplete events were under counted. [pull/649](https://github.com/sourcegraph/cody/pull/649)
- Various smaller tweaks to autocomplete analytics. [pull/644](https://github.com/sourcegraph/cody/pull/644)
- Includes the correct pre-release version in analytics events. [pull/641](https://github.com/sourcegraph/cody/pull/641)

### Changed

- Removed beta labels from Autocomplete and Inline Chat features. [pull/605](https://github.com/sourcegraph/cody/pull/605)
- Update shortcut for Cody Commands to `alt` + `c` due to conflict with existing keybinding for `fixup`. [pull/648](https://github.com/sourcegraph/cody/pull/648)

## [0.6.5]

### Added

- Custom Commands: An experimental feature for creating Cody chat commands with custom prompts and context. [pull/386](https://github.com/sourcegraph/cody/pull/386)
- Custom Commands: Quick pick menu for running default and custom commands. [pull/386](https://github.com/sourcegraph/cody/pull/386)
- New commands:
  - `/explain`: Explain Code
  - `/doc`: Document Code
  - `/fix`: Inline Fixup
  - `/test`: Generate Unit Tests
- Code Actions: You can now ask Cody to explain or fix errors and warnings that are highlighted in your editor. [pull/510](https://github.com/sourcegraph/cody/pull/510)
- Inline Fixup: You can now run parallel inline fixes, you do not need to wait for the previous fix to complete. [pull/510](https://github.com/sourcegraph/cody/pull/510)
- Inline Fixup: You no longer need to select code to generate an inline fix. [pull/510](https://github.com/sourcegraph/cody/pull/510)

### Fixed

- Bug: Fixes an issue where the codebase context was not correctly inferred to load embeddings context for autocomplete. [pull/525](https://github.com/sourcegraph/cody/pull/525)
- Inline Fixup: `/chat` will now redirect your question to the chat view correctly through the Non-Stop Fixup input box. [pull/386](https://github.com/sourcegraph/cody/pull/386)
- Fix REGEX issue for existing `/reset`, `/search`, and `/fix` commands. [pull/594](https://github.com/sourcegraph/cody/pull/594)

### Changed

- `Recipes` are removed in favor of `Commands`, which is the improved version of `Recipes`. [pull/386](https://github.com/sourcegraph/cody/pull/386)
- Remove `Header` and `Navbar` from `Chat` view due to removal of the `Recipes` tab. [pull/386](https://github.com/sourcegraph/cody/pull/386)
- Replace `Custom Recipes` with `Custom Commands`. [pull/386](https://github.com/sourcegraph/cody/pull/386)
- Inline Fixup: Integrated the input field into the command palette. [pull/510](https://github.com/sourcegraph/cody/pull/510)
- Inline Fixup: Using `/fix` from Inline Chat now triggers an improved fixup experience. [pull/510](https://github.com/sourcegraph/cody/pull/510)
- Autocomplete: Include current file name in anthropic prompt. [580](https://github.com/sourcegraph/cody/pull/580)
- Autocomplete: Requests can now be resolved while the network request is still in progress. [pull/559](https://github.com/sourcegraph/cody/pull/559)

## [0.6.4]

### Added

- Inline Fixups: Cody is now aware of errors, warnings and hints within your editor selection. [pull/376](https://github.com/sourcegraph/cody/pull/376)
- Experimental user setting `cody.experimental.localTokenPath` to store authentication token in local file system when keychain access is unavailable. This provides alternative to [settings sync keychain storage](https://code.visualstudio.com/docs/editor/settings-sync#_troubleshooting-keychain-issues), but is not the recommended method for storing tokens securely. Use at your own risk. [pull/471](https://github.com/sourcegraph/cody/pull/471)

### Fixed

- Bug: Chat History command shows chat view instead of history view. [pull/414](https://github.com/sourcegraph/cody/pull/414)
- Fix some bad trailing `}` autocomplete results. [pull/378](https://github.com/sourcegraph/cody/pull/378)

### Changed

- Inline Fixups: Added intent detection to improve prompt and context quality. [pull/376](https://github.com/sourcegraph/cody/pull/376)
- Layout cleanups: smaller header and single line message input. [pull/449](https://github.com/sourcegraph/cody/pull/449)
- Improve response feedback button behavior. [pull/451](https://github.com/sourcegraph/cody/pull/451)
- Remove in-chat onboarding buttons for new chats. [pull/450](https://github.com/sourcegraph/cody/pull/450)
- Improve the stability of autocomplete results. [pull/442](https://github.com/sourcegraph/cody/pull/442)

## [0.6.3]

### Added

- Added the functionality to drag and reorder the recipes. [pull/314](https://github.com/sourcegraph/cody/pull/314)

### Fixed

### Changed

- Removed the experimental hallucination detection that highlighted nonexistent file paths.
- Hide the feedback button in case of error assistant response. [pull/448](https://github.com/sourcegraph/cody/pull/448)

## [0.6.2]

### Added

- [Internal] `Custom Recipes`: An experimental feature now available behind the `cody.experimental.customRecipes` feature flag for internal testing purpose. [pull/348](https://github.com/sourcegraph/cody/pull/348)
- Inline Chat: Improved response quality by ensuring each inline chat maintains its own unique context, and doesn't share with the sidebar and other inline chats. This should also benefit response quality for inline /fix and /touch commands.
- Inline Chat: Added the option to 'Stop generating' from within the inline chat window.
- Inline Chat: Added the option to transfer a chat from the inline window to the Cody sidebar.

### Fixed

### Changed

- The setting `cody.autocomplete.experimental.triggerMoreEagerly` (which causes autocomplete to trigger earlier, before you type a space or other non-word character) now defaults to `true`.
- If you run the `Trigger Inline Suggestion` VS Code action, 3 suggestions instead of just 1 will be shown.

## [0.6.1]

### Added

- A new experimental user setting `cody.autocomplete.experimental.triggerMoreEagerly` causes autocomplete to trigger earlier, before you type a space or other non-word character.
- [Internal Only] `Custom Recipe`: Support context type selection when creating a new recipe via UI. [pull/279](https://github.com/sourcegraph/cody/pull/279)
- New `/open` command for opening workspace files from chat box. [pull/327](https://github.com/sourcegraph/cody/pull/327)

### Fixed

- Insert at Cusor now inserts the complete code snippets at cursor position. [pull/282](https://github.com/sourcegraph/cody/pull/282)
- Minimizing the change of Cody replying users with response related to the language-uage prompt. [pull/279](https://github.com/sourcegraph/cody/pull/279)
- Inline Chat: Add missing icons for Inline Chat and Inline Fixups decorations. [pull/320](https://github.com/sourcegraph/cody/pull/320)
- Fix the behaviour of input history down button. [pull/328](https://github.com/sourcegraph/cody/pull/328)

### Changed

- Exclude context for chat input with only one word. [pull/279](https://github.com/sourcegraph/cody/pull/279)
- [Internal Only] `Custom Recipe`: Store `cody.json` file for user recipes within the `.vscode` folder located in the $HOME directory. [pull/279](https://github.com/sourcegraph/cody/pull/279)
- Various autocomplete improvements. [pull/344](https://github.com/sourcegraph/cody/pull/344)

## [0.4.4]

### Added

- Added support for the CMD+K hotkey to clear the code chat history. [pull/245](https://github.com/sourcegraph/cody/pull/245)
- [Internal Only] `Custom Recipe` is available for S2 internal users for testing purpose. [pull/81](https://github.com/sourcegraph/cody/pull/81)

### Fixed

- Fixed a bug that caused messages to disappear when signed-in users encounter an authentication error. [pull/201](https://github.com/sourcegraph/cody/pull/201)
- Inline Chat: Since last version, running Inline Fixups would add an additional `</selection>` tag to the end of the code edited by Cody, which has now been removed. [pull/182](https://github.com/sourcegraph/cody/pull/182)
- Chat Command: Fixed an issue where /r(est) had a trailing space. [pull/245](https://github.com/sourcegraph/cody/pull/245)
- Inline Fixups: Fixed a regression where Cody's inline fixup suggestions were not properly replacing the user's selection. [pull/70](https://github.com/sourcegraph/cody/pull/70)

### Changed

## [0.4.3]

### Added

- Added support for server-side token limits to Chat. [pull/54488](https://github.com/sourcegraph/sourcegraph/pull/54488)
- Add "Find code smells" recipe to editor context menu and command pallette [pull/54432](https://github.com/sourcegraph/sourcegraph/pull/54432)
- Add a typewriter effect to Cody's responses to mimic typing in characters rather than varying chunks [pull/54522](https://github.com/sourcegraph/sourcegraph/pull/54522)
- Add suggested recipes to the new chat welcome message. [pull/54277](https://github.com/sourcegraph/sourcegraph/pull/54277)
- Inline Chat: Added the option to collapse all inline chats from within the inline chat window. [pull/54675](https://github.com/sourcegraph/sourcegraph/pull/54675)
- Inline Chat: We now stream messages rather than waiting for the response to be fully complete. This means you can read Cody's response as it is being generated. [pull/54665](https://github.com/sourcegraph/sourcegraph/pull/54665)
- Show network error message when connection is lost and a reload button to get back when network is restored. [pull/107](https://github.com/sourcegraph/cody/pull/107)

### Fixed

- Inline Chat: Update keybind when condition to `editorFocus`. [pull/54437](https://github.com/sourcegraph/sourcegraph/pull/54437)
- Inline Touch: Create a new `.test.` file when `test` or `tests` is included in the instruction. [pull/54437](https://github.com/sourcegraph/sourcegraph/pull/54437)
- Prevents errors from being displayed for a cancelled requests. [pull/54429](https://github.com/sourcegraph/sourcegraph/pull/54429)

### Changed

- Inline Touch: Remove Inline Touch from submenu and command palette. It can be started with `/touch` or `/t` from the Inline Chat due to current limitation. [pull/54437](https://github.com/sourcegraph/sourcegraph/pull/54437)
- Removed the Optimize Code recipe. [pull/54471](https://github.com/sourcegraph/sourcegraph/pull/54471)

## [0.4.2]

### Added

- Add support for onboarding Cody App users on Intel Mac and Linux. [pull/54405](https://github.com/sourcegraph/sourcegraph/pull/54405)

### Fixed

- Fixed HTML escaping in inline chat markdown. [pull/1349](https://github.com/sourcegraph/sourcegraph/pull/1349)

### Changed

## [0.4.1]

### Fixed

- Fixed `cody.customHeaders` never being passed through. [pull/54354](https://github.com/sourcegraph/sourcegraph/pull/54354)
- Fixed users are signed out on 0.4.0 update [pull/54367](https://github.com/sourcegraph/sourcegraph/pull/54367)

### Changed

- Provide more information on Cody App, and improved the login page design for Enterprise customers. [pull/54362](https://github.com/sourcegraph/sourcegraph/pull/54362)

## [0.4.0]

### Added

- The range of the editor selection, if present, is now displayed alongside the file name in the chat footer. [pull/53742](https://github.com/sourcegraph/sourcegraph/pull/53742)
- Support switching between multiple instances with `Switch Account`. [pull/53434](https://github.com/sourcegraph/sourcegraph/pull/53434)
- Automate sign-in flow with Cody App. [pull/53908](https://github.com/sourcegraph/sourcegraph/pull/53908)
- Add a warning message to recipes when the selection gets truncated. [pull/54025](https://github.com/sourcegraph/sourcegraph/pull/54025)
- Start up loading screen. [pull/54106](https://github.com/sourcegraph/sourcegraph/pull/54106)

### Fixed

- Autocomplete: Include the number of lines of an accepted autocomplete recommendation and fix an issue where sometimes accepted completions would not be logged correctly. [pull/53878](https://github.com/sourcegraph/sourcegraph/pull/53878)
- Stop-Generating button does not stop Cody from responding if pressed before answer is generating. [pull/53827](https://github.com/sourcegraph/sourcegraph/pull/53827)
- Endpoint setting out of sync issue. [pull/53434](https://github.com/sourcegraph/sourcegraph/pull/53434)
- Endpoint URL without protocol causing sign-ins to fail. [pull/53908](https://github.com/sourcegraph/sourcegraph/pull/53908)
- Autocomplete: Fix network issues when using remote VS Code setups. [pull/53956](https://github.com/sourcegraph/sourcegraph/pull/53956)
- Autocomplete: Fix an issue where the loading indicator would not reset when a network error ocurred. [pull/53956](https://github.com/sourcegraph/sourcegraph/pull/53956)
- Autocomplete: Improve local context performance. [pull/54124](https://github.com/sourcegraph/sourcegraph/pull/54124)
- Chat: Fix an issue where the window would automatically scroll to the bottom as Cody responds regardless of where the users scroll position was. [pull/54188](https://github.com/sourcegraph/sourcegraph/pull/54188)
- Codebase index status does not get updated on workspace change. [pull/54106](https://github.com/sourcegraph/sourcegraph/pull/54106)
- Button for connect to App after user is signed out. [pull/54106](https://github.com/sourcegraph/sourcegraph/pull/54106)
- Fixes an issue with link formatting. [pull/54200](https://github.com/sourcegraph/sourcegraph/pull/54200)
- Fixes am issue where Cody would sometimes not respond. [pull/54268](https://github.com/sourcegraph/sourcegraph/pull/54268)
- Fixes authentication related issues. [pull/54237](https://github.com/sourcegraph/sourcegraph/pull/54237)

### Changed

- Autocomplete: Improve completion quality. [pull/53720](https://github.com/sourcegraph/sourcegraph/pull/53720)
- Autocomplete: Completions are now referred to as autocomplete. [pull/53851](https://github.com/sourcegraph/sourcegraph/pull/53851)
- Autocomplete: Autocomplete is now turned on by default. [pull/54166](https://github.com/sourcegraph/sourcegraph/pull/54166)
- Improved the response quality when Cody is asked about a selected piece of code through the chat window. [pull/53742](https://github.com/sourcegraph/sourcegraph/pull/53742)
- Refactored authentication process. [pull/53434](https://github.com/sourcegraph/sourcegraph/pull/53434)
- New sign-in and sign-out flow. [pull/53434](https://github.com/sourcegraph/sourcegraph/pull/53434)
- Analytical logs are now displayed in the Output view. [pull/53870](https://github.com/sourcegraph/sourcegraph/pull/53870)
- Inline Chat: Renamed Inline Assist to Inline Chat. [pull/53725](https://github.com/sourcegraph/sourcegraph/pull/53725) [pull/54315](https://github.com/sourcegraph/sourcegraph/pull/54315)
- Chat: Link to the "Getting Started" guide directly from the first chat message instead of the external documentation website. [pull/54175](https://github.com/sourcegraph/sourcegraph/pull/54175)
- Codebase status icons. [pull/54262](https://github.com/sourcegraph/sourcegraph/pull/54262)
- Changed the keyboard shortcut for the file touch recipe to `ctrl+alt+/` to avoid conflicts. [pull/54275](https://github.com/sourcegraph/sourcegraph/pull/54275)
- Inline Chat: Do not change current focus when Inline Fixup is done. [pull/53980](https://github.com/sourcegraph/sourcegraph/pull/53980)
- Inline Chat: Replace Close CodeLens with Accept. [pull/53980](https://github.com/sourcegraph/sourcegraph/pull/53980)
- Inline Chat: Moved to Beta state. It is now enabled by default. [pull/54315](https://github.com/sourcegraph/sourcegraph/pull/54315)

## [0.2.5]

### Added

- `Stop Generating` button to cancel a request and stop Cody's response. [pull/53332](https://github.com/sourcegraph/sourcegraph/pull/53332)

### Fixed

- Fixes the rendering of duplicate context files in response. [pull/53662](https://github.com/sourcegraph/sourcegraph/pull/53662)
- Fixes an issue where local keyword context was trying to open binary files. [pull/53662](https://github.com/sourcegraph/sourcegraph/pull/53662)
- Fixes the hallucination detection behavior for directory, API and git refs pattern. [pull/53553](https://github.com/sourcegraph/sourcegraph/pull/53553)

### Changed

- Completions: Updating configuration no longer requires reloading the extension. [pull/53401](https://github.com/sourcegraph/sourcegraph/pull/53401)
- New chat layout. [pull/53332](https://github.com/sourcegraph/sourcegraph/pull/53332)
- Completions: Completions can now be used on unsaved files. [pull/53495](https://github.com/sourcegraph/sourcegraph/pull/53495)
- Completions: Add multi-line heuristics for C, C++, C#, and Java. [pull/53631](https://github.com/sourcegraph/sourcegraph/pull/53631)
- Completions: Add context summaries and language information to analytics. [pull/53746](https://github.com/sourcegraph/sourcegraph/pull/53746)
- More compact chat suggestion buttons. [pull/53755](https://github.com/sourcegraph/sourcegraph/pull/53755)

## [0.2.4]

### Added

- Hover tooltips to intent-detection underlines. [pull/52029](https://github.com/sourcegraph/sourcegraph/pull/52029)
- Notification to prompt users to setup Cody if it wasn't configured initially. [pull/53321](https://github.com/sourcegraph/sourcegraph/pull/53321)
- Added a new Cody status bar item to relay global loading states and allowing you to quickly enable/disable features. [pull/53307](https://github.com/sourcegraph/sourcegraph/pull/53307)

### Fixed

- Fix `Continue with Sourcegraph.com` callback URL. [pull/53418](https://github.com/sourcegraph/sourcegraph/pull/53418)

### Changed

- Simplified the appearance of commands in various parts of the UI [pull/53395](https://github.com/sourcegraph/sourcegraph/pull/53395)

## [0.2.3]

### Added

- Add delete button for removing individual history. [pull/52904](https://github.com/sourcegraph/sourcegraph/pull/52904)
- Load the recent ongoing chat on reload of window. [pull/52904](https://github.com/sourcegraph/sourcegraph/pull/52904)
- Handle URL callbacks from `vscode-insiders`. [pull/53313](https://github.com/sourcegraph/sourcegraph/pull/53313)
- Inline Assist: New Code Lens to undo `inline fix` performed by Cody. [pull/53348](https://github.com/sourcegraph/sourcegraph/pull/53348)

### Fixed

- Fix the loading of files and scroll chat to the end while restoring the history. [pull/52904](https://github.com/sourcegraph/sourcegraph/pull/52904)
- Open file paths from Cody's responses in a workspace with the correct protocol. [pull/53103](https://github.com/sourcegraph/sourcegraph/pull/53103)
- Cody completions: Fixes an issue where completions would often start in the next line. [pull/53246](https://github.com/sourcegraph/sourcegraph/pull/53246)

### Changed

- Save the current ongoing conversation to the chat history [pull/52904](https://github.com/sourcegraph/sourcegraph/pull/52904)
- Inline Assist: Updating configuration no longer requires reloading the extension. [pull/53348](https://github.com/sourcegraph/sourcegraph/pull/53348)
- Context quality has been improved when the repository has not been indexed. The LLM is used to generate keyword and filename queries, and the LLM also reranks results from multiple sources. Response latency has also improved on long user queries. [pull/52815](https://github.com/sourcegraph/sourcegraph/pull/52815)

## [0.2.2]

### Added

- New recipe: `Generate PR description`. Generate the PR description using the PR template guidelines for the changes made in the current branch. [pull/51721](https://github.com/sourcegraph/sourcegraph/pull/51721)
- Open context search results links as workspace file. [pull/52856](https://github.com/sourcegraph/sourcegraph/pull/52856)
- Cody Inline Assist: Decorations for `/fix` errors. [pull/52796](https://github.com/sourcegraph/sourcegraph/pull/52796)
- Open file paths from Cody's responses in workspace. [pull/53069](https://github.com/sourcegraph/sourcegraph/pull/53069)
- Help & Getting Started: Walkthrough to help users get setup with Cody and discover new features. [pull/52560](https://github.com/sourcegraph/sourcegraph/pull/52560)

### Fixed

- Cody Inline Assist: Decorations for `/fix` on light theme. [pull/52796](https://github.com/sourcegraph/sourcegraph/pull/52796)
- Cody Inline Assist: Use more than 1 context file for `/touch`. [pull/52796](https://github.com/sourcegraph/sourcegraph/pull/52796)
- Cody Inline Assist: Fixes cody processing indefinitely issue. [pull/52796](https://github.com/sourcegraph/sourcegraph/pull/52796)
- Cody completions: Various fixes for completion analytics. [pull/52935](https://github.com/sourcegraph/sourcegraph/pull/52935)
- Cody Inline Assist: Indentation on `/fix` [pull/53068](https://github.com/sourcegraph/sourcegraph/pull/53068)

### Changed

- Internal: Do not log events during tests. [pull/52865](https://github.com/sourcegraph/sourcegraph/pull/52865)
- Cody completions: Improved the number of completions presented and reduced the latency. [pull/52935](https://github.com/sourcegraph/sourcegraph/pull/52935)
- Cody completions: Various improvements to the context. [pull/53043](https://github.com/sourcegraph/sourcegraph/pull/53043)

## [0.2.1]

### Fixed

- Escape Windows path separator in fast file finder path pattern. [pull/52754](https://github.com/sourcegraph/sourcegraph/pull/52754)
- Only display errors from the embeddings clients for users connected to an indexed codebase. [pull/52780](https://github.com/sourcegraph/sourcegraph/pull/52780)

### Changed

## [0.2.0]

### Added

- Cody Inline Assist: New recipe for creating new files with `/touch` command. [pull/52511](https://github.com/sourcegraph/sourcegraph/pull/52511)
- Cody completions: Experimental support for multi-line inline completions for JavaScript, TypeScript, Go, and Python using indentation based truncation. [issues/52588](https://github.com/sourcegraph/sourcegraph/issues/52588)
- Display embeddings search, and connection error to the webview panel. [pull/52491](https://github.com/sourcegraph/sourcegraph/pull/52491)
- New recipe: `Optimize Code`. Optimize the time and space consumption of code. [pull/51974](https://github.com/sourcegraph/sourcegraph/pull/51974)
- Button to insert code block text at cursor position in text editor. [pull/52528](https://github.com/sourcegraph/sourcegraph/pull/52528)

### Fixed

- Cody completions: Fixed interop between spaces and tabs. [pull/52497](https://github.com/sourcegraph/sourcegraph/pull/52497)
- Fixes an issue where new conversations did not bring the chat into the foreground. [pull/52363](https://github.com/sourcegraph/sourcegraph/pull/52363)
- Cody completions: Prevent completions for lines that have a word in the suffix. [issues/52582](https://github.com/sourcegraph/sourcegraph/issues/52582)
- Cody completions: Fixes an issue where multi-line inline completions closed the current block even if it already had content. [pull/52615](https://github.com/sourcegraph/sourcegraph/52615)
- Cody completions: Fixed an issue where the Cody response starts with a newline and was previously ignored. [issues/52586](https://github.com/sourcegraph/sourcegraph/issues/52586)

### Changed

- Cody is now using `major.EVEN_NUMBER.patch` for release versions and `major.ODD_NUMBER.patch` for pre-release versions. [pull/52412](https://github.com/sourcegraph/sourcegraph/pull/52412)
- Cody completions: Fixed an issue where the Cody response starts with a newline and was previously ignored [issues/52586](https://github.com/sourcegraph/sourcegraph/issues/52586)
- Cody completions: Improves the behavior of the completions cache when characters are deleted from the editor. [pull/52695](https://github.com/sourcegraph/sourcegraph/pull/52695)

### Changed

- Cody completions: Improve completion logger and measure the duration a completion is displayed for. [pull/52695](https://github.com/sourcegraph/sourcegraph/pull/52695)

## [0.1.5]

### Added

### Fixed

- Inline Assist broken decorations for Inline-Fixup tasks [pull/52322](https://github.com/sourcegraph/sourcegraph/pull/52322)

### Changed

- Various Cody completions related improvements [pull/52365](https://github.com/sourcegraph/sourcegraph/pull/52365)

## [0.1.4]

### Added

- Added support for local keyword search on Windows. [pull/52251](https://github.com/sourcegraph/sourcegraph/pull/52251)

### Fixed

- Setting `cody.useContext` to `none` will now limit Cody to using only the currently open file. [pull/52126](https://github.com/sourcegraph/sourcegraph/pull/52126)
- Fixes race condition in telemetry. [pull/52279](https://github.com/sourcegraph/sourcegraph/pull/52279)
- Don't search for file paths if no file paths to validate. [pull/52267](https://github.com/sourcegraph/sourcegraph/pull/52267)
- Fix handling of embeddings search backward compatibility. [pull/52286](https://github.com/sourcegraph/sourcegraph/pull/52286)

### Changed

- Cleanup the design of the VSCode history view. [pull/51246](https://github.com/sourcegraph/sourcegraph/pull/51246)
- Changed menu icons and order. [pull/52263](https://github.com/sourcegraph/sourcegraph/pull/52263)
- Deprecate `cody.debug` for three new settings: `cody.debug.enable`, `cody.debug.verbose`, and `cody.debug.filter`. [pull/52236](https://github.com/sourcegraph/sourcegraph/pull/52236)

## [0.1.3]

### Added

- Add support for connecting to Sourcegraph App when a supported version is installed. [pull/52075](https://github.com/sourcegraph/sourcegraph/pull/52075)

### Fixed

- Displays error banners on all view instead of chat view only. [pull/51883](https://github.com/sourcegraph/sourcegraph/pull/51883)
- Surfaces errors for corrupted token from secret storage. [pull/51883](https://github.com/sourcegraph/sourcegraph/pull/51883)
- Inline Assist add code lenses to all open files [pull/52014](https://github.com/sourcegraph/sourcegraph/pull/52014)

### Changed

- Removes unused configuration option: `cody.enabled`. [pull/51883](https://github.com/sourcegraph/sourcegraph/pull/51883)
- Arrow key behavior: you can now navigate forwards through messages with the down arrow; additionally the up and down arrows will navigate backwards and forwards only if you're at the start or end of the drafted text, respectively. [pull/51586](https://github.com/sourcegraph/sourcegraph/pull/51586)
- Display a more user-friendly error message when the user is connected to sourcegraph.com and doesn't have a verified email. [pull/51870](https://github.com/sourcegraph/sourcegraph/pull/51870)
- Keyword context: Excludes files larger than 1M and adds a 30sec timeout period [pull/52038](https://github.com/sourcegraph/sourcegraph/pull/52038)

## [0.1.2]

### Added

- `Inline Assist`: a new way to interact with Cody inside your files. To enable this feature, please set the `cody.experimental.inline` option to true. [pull/51679](https://github.com/sourcegraph/sourcegraph/pull/51679)

### Fixed

- UI bug that capped buttons at 300px max-width with visible border [pull/51726](https://github.com/sourcegraph/sourcegraph/pull/51726)
- Fixes anonymous user id resetting after logout [pull/51532](https://github.com/sourcegraph/sourcegraph/pull/51532)
- Add error message on top of Cody's response instead of overriding it [pull/51762](https://github.com/sourcegraph/sourcegraph/pull/51762)
- Fixes an issue where chat input messages where not rendered in the UI immediately [pull/51783](https://github.com/sourcegraph/sourcegraph/pull/51783)
- Fixes an issue where file where the hallucination detection was not working properly [pull/51785](https://github.com/sourcegraph/sourcegraph/pull/51785)
- Aligns Edit button style with feedback buttons [pull/51767](https://github.com/sourcegraph/sourcegraph/pull/51767)

### Changed

- Pressing the icon to reset the clear history now makes sure that the chat tab is shown [pull/51786](https://github.com/sourcegraph/sourcegraph/pull/51786)
- Rename the extension from "Sourcegraph Cody" to "Cody AI by Sourcegraph" [pull/51702](https://github.com/sourcegraph/sourcegraph/pull/51702)
- Remove HTML escaping artifacts [pull/51797](https://github.com/sourcegraph/sourcegraph/pull/51797)

## [0.1.1]

### Fixed

- Remove system alerts from non-actionable items [pull/51714](https://github.com/sourcegraph/sourcegraph/pull/51714)

## [0.1.0]

### Added

- New recipe: `Codebase Context Search`. Run an approximate search across the codebase. It searches within the embeddings when available to provide relevant code context. [pull/51077](https://github.com/sourcegraph/sourcegraph/pull/51077)
- Add support to slash commands `/` in chat. [pull/51077](https://github.com/sourcegraph/sourcegraph/pull/51077)
  - `/r` or `/reset` to reset chat
  - `/s` or `/search` to perform codebase context search
- Adds usage metrics to the experimental chat predictions feature [pull/51474](https://github.com/sourcegraph/sourcegraph/pull/51474)
- Add highlighted code to context message automatically [pull/51585](https://github.com/sourcegraph/sourcegraph/pull/51585)
- New recipe: `Generate Release Notes` --generate release notes based on the available tags or the selected commits for the time period. It summarises the git commits into standard release notes format of new features, bugs fixed, docs improvements. [pull/51481](https://github.com/sourcegraph/sourcegraph/pull/51481)
- New recipe: `Generate Release Notes`. Generate release notes based on the available tags or the selected commits for the time period. It summarizes the git commits into standard release notes format of new features, bugs fixed, docs improvements. [pull/51481](https://github.com/sourcegraph/sourcegraph/pull/51481)

### Fixed

- Error notification display pattern for rate limit [pull/51521](https://github.com/sourcegraph/sourcegraph/pull/51521)
- Fixes issues with branch switching and file deletions when using the experimental completions feature [pull/51565](https://github.com/sourcegraph/sourcegraph/pull/51565)
- Improves performance of hallucination detection for file paths and supports paths relative to the project root [pull/51558](https://github.com/sourcegraph/sourcegraph/pull/51558), [pull/51625](https://github.com/sourcegraph/sourcegraph/pull/51625)
- Fixes an issue where inline code blocks were unexpectedly escaped [pull/51576](https://github.com/sourcegraph/sourcegraph/pull/51576)

### Changed

- Promote Cody from experimental to beta [pull/](https://github.com/sourcegraph/sourcegraph/pull/)
- Various improvements to the experimental completions feature

## [0.0.10]

### Added

- Adds usage metrics to the experimental completions feature [pull/51350](https://github.com/sourcegraph/sourcegraph/pull/51350)
- Updating `cody.codebase` does not require reloading VS Code [pull/51274](https://github.com/sourcegraph/sourcegraph/pull/51274)

### Fixed

- Fixes an issue where code blocks were unexpectedly escaped [pull/51247](https://github.com/sourcegraph/sourcegraph/pull/51247)

### Changed

- Improved Cody header and layout details [pull/51348](https://github.com/sourcegraph/sourcegraph/pull/51348)
- Replace `Cody: Set Access Token` command with `Cody: Sign in` [pull/51274](https://github.com/sourcegraph/sourcegraph/pull/51274)
- Various improvements to the experimental completions feature

## [0.0.9]

### Added

- Adds new experimental chat predictions feature to suggest follow-up conversations. Enable it with the new `cody.experimental.chatPredictions` feature flag. [pull/51201](https://github.com/sourcegraph/sourcegraph/pull/51201)
- Auto update `cody.codebase` setting from current open file [pull/51045](https://github.com/sourcegraph/sourcegraph/pull/51045)
- Properly render rate-limiting on requests [pull/51200](https://github.com/sourcegraph/sourcegraph/pull/51200)
- Error display in UI [pull/51005](https://github.com/sourcegraph/sourcegraph/pull/51005)
- Edit buttons for editing last submitted message [pull/51009](https://github.com/sourcegraph/sourcegraph/pull/51009)
- [Security] Content security policy to webview [pull/51152](https://github.com/sourcegraph/sourcegraph/pull/51152)

### Fixed

- Escaped HTML issue [pull/51144](https://github.com/sourcegraph/sourcegraph/pull/51151)
- Unauthorized sessions [pull/51005](https://github.com/sourcegraph/sourcegraph/pull/51005)

### Changed

- Various improvements to the experimental completions feature [pull/51161](https://github.com/sourcegraph/sourcegraph/pull/51161) [51046](https://github.com/sourcegraph/sourcegraph/pull/51046)
- Visual improvements to the history page, ability to resume past conversations [pull/51159](https://github.com/sourcegraph/sourcegraph/pull/51159)

## [Template]

### Added

### Fixed

### Changed
