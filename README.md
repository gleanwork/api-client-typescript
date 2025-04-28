# Glean TypeScript API Client

<!-- No Summary [summary] -->

The Glean TypeScript SDK provides convenient access to the Glean REST API in both browser and Node.js environments. It offers full TypeScript types, modern async/await support, and uses the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API under the hood.

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Glean TypeScript API Client](#glean-typescript-api-client)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @gleanwork/api-client
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add @gleanwork/api-client
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add @gleanwork/api-client
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add @gleanwork/api-client zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `GLEAN_BEARER_AUTH`  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [agents](docs/sdks/agents/README.md)

* [runagent](docs/sdks/agents/README.md#runagent) - Runs an Agent.
* [listagents](docs/sdks/agents/README.md#listagents) - Lists all agents.
* [getagentinputs](docs/sdks/agents/README.md#getagentinputs) - Gets the inputs to an agent.

### [client](docs/sdks/client/README.md)


#### [client.activities](docs/sdks/activities/README.md)

* [reportActivity](docs/sdks/activities/README.md#reportactivity) - Report client activity

#### [client.activity](docs/sdks/activity/README.md)

* [report](docs/sdks/activity/README.md#report) - Report document activity

#### [client.announcements](docs/sdks/announcements/README.md)

* [create](docs/sdks/announcements/README.md#create) - Create Announcement
* [createDraft](docs/sdks/announcements/README.md#createdraft) - Create draft Announcement
* [delete](docs/sdks/announcements/README.md#delete) - Delete Announcement
* [deleteDraft](docs/sdks/announcements/README.md#deletedraft) - Delete draft Announcement
* [get](docs/sdks/announcements/README.md#get) - Read Announcement
* [getDraft](docs/sdks/announcements/README.md#getdraft) - Read draft Announcement
* [list](docs/sdks/announcements/README.md#list) - List Announcements
* [preview](docs/sdks/announcements/README.md#preview) - Preview Announcement
* [previewDraft](docs/sdks/announcements/README.md#previewdraft) - Preview draft Announcement
* [publish](docs/sdks/announcements/README.md#publish) - Publish draft Announcement
* [unpublish](docs/sdks/announcements/README.md#unpublish) - Unpublish Announcement
* [update](docs/sdks/announcements/README.md#update) - Update Announcement
* [updateDraft](docs/sdks/announcements/README.md#updatedraft) - Update draft Announcement

#### [client.answers](docs/sdks/answers/README.md)

* [create](docs/sdks/answers/README.md#create) - Create Answer
* [delete](docs/sdks/answers/README.md#delete) - Delete Answer
* [edit](docs/sdks/answers/README.md#edit) - Update Answer
* [get](docs/sdks/answers/README.md#get) - Read Answer
* [list](docs/sdks/answers/README.md#list) - List Answers
* [preview](docs/sdks/answers/README.md#preview) - Preview Answer
* [previewDraft](docs/sdks/answers/README.md#previewdraft) - Preview draft Answer
* [updateLikes](docs/sdks/answers/README.md#updatelikes) - Update Answer likes
* [~~createBoard~~](docs/sdks/answers/README.md#createboard) - Create Answer Board :warning: **Deprecated**
* [~~deleteBoard~~](docs/sdks/answers/README.md#deleteboard) - Delete Answer Board :warning: **Deprecated**
* [~~updateBoard~~](docs/sdks/answers/README.md#updateboard) - Update Answer Board :warning: **Deprecated**
* [~~getBoard~~](docs/sdks/answers/README.md#getboard) - Read Answer Board :warning: **Deprecated**
* [~~listBoards~~](docs/sdks/answers/README.md#listboards) - List Answer Boards :warning: **Deprecated**

#### [client.authentication](docs/sdks/clientauthentication/README.md)

* [createAnonymousToken](docs/sdks/clientauthentication/README.md#createanonymoustoken) - Create anonymous token
* [createToken](docs/sdks/clientauthentication/README.md#createtoken) - Create authentication token

#### [client.calendar](docs/sdks/calendar/README.md)

* [getEvents](docs/sdks/calendar/README.md#getevents) - Read events

#### [client.chat](docs/sdks/chat/README.md)

* [ask](docs/sdks/chat/README.md#ask) - Detect and answer questions
* [start](docs/sdks/chat/README.md#start) - Chat
* [deleteAll](docs/sdks/chat/README.md#deleteall) - Deletes all saved Chats owned by a user
* [delete](docs/sdks/chat/README.md#delete) - Deletes saved Chats
* [get](docs/sdks/chat/README.md#get) - Retrieves a Chat
* [list](docs/sdks/chat/README.md#list) - Retrieves all saved Chats
* [getApplication](docs/sdks/chat/README.md#getapplication) - Gets the metadata for a custom Chat application
* [uploadFiles](docs/sdks/chat/README.md#uploadfiles) - Upload files for Chat.
* [getFiles](docs/sdks/chat/README.md#getfiles) - Get files uploaded by a user for Chat.
* [deleteFiles](docs/sdks/chat/README.md#deletefiles) - Delete files uploaded by a user for chat.

#### [client.collections](docs/sdks/collections/README.md)

* [addItems](docs/sdks/collections/README.md#additems) - Add Collection item
* [create](docs/sdks/collections/README.md#create) - Create Collection
* [delete](docs/sdks/collections/README.md#delete) - Delete Collection
* [deleteItem](docs/sdks/collections/README.md#deleteitem) - Delete Collection item
* [update](docs/sdks/collections/README.md#update) - Update Collection
* [editItem](docs/sdks/collections/README.md#edititem) - Update Collection item
* [edit](docs/sdks/collections/README.md#edit) - Update document Collections
* [get](docs/sdks/collections/README.md#get) - Read Collection
* [list](docs/sdks/collections/README.md#list) - List Collections
* [moveItem](docs/sdks/collections/README.md#moveitem) - Move Collection item
* [pin](docs/sdks/collections/README.md#pin) - Pin Collection

#### [client.displayableLists](docs/sdks/displayablelists/README.md)

* [create](docs/sdks/displayablelists/README.md#create) - Create displayable lists
* [delete](docs/sdks/displayablelists/README.md#delete) - Delete displayable lists
* [get](docs/sdks/displayablelists/README.md#get) - Read displayable lists
* [update](docs/sdks/displayablelists/README.md#update) - Update displayable lists

#### [client.documents](docs/sdks/clientdocuments/README.md)

* [getPermissions](docs/sdks/clientdocuments/README.md#getpermissions) - Read document permissions
* [get](docs/sdks/clientdocuments/README.md#get) - Read documents
* [getByFacets](docs/sdks/clientdocuments/README.md#getbyfacets) - Read documents by facets
* [getAnalytics](docs/sdks/clientdocuments/README.md#getanalytics) - Read document analytics

#### [client.entities](docs/sdks/entities/README.md)

* [list](docs/sdks/entities/README.md#list) - List entities
* [readPeople](docs/sdks/entities/README.md#readpeople) - Read people
* [getTeams](docs/sdks/entities/README.md#getteams) - Read teams

#### [client.images](docs/sdks/images/README.md)

* [get](docs/sdks/images/README.md#get) - Get image
* [upload](docs/sdks/images/README.md#upload) - Upload images

#### [client.insights](docs/sdks/insights/README.md)

* [get](docs/sdks/insights/README.md#get) - Read insights

#### [client.messages](docs/sdks/messages/README.md)

* [get](docs/sdks/messages/README.md#get) - Read messages

#### [client.pins](docs/sdks/pins/README.md)

* [edit](docs/sdks/pins/README.md#edit) - Update pin
* [get](docs/sdks/pins/README.md#get) - Read pin
* [list](docs/sdks/pins/README.md#list) - List pins
* [create](docs/sdks/pins/README.md#create) - Create pin
* [remove](docs/sdks/pins/README.md#remove) - Delete pin

#### [client.search](docs/sdks/search/README.md)

* [admin](docs/sdks/search/README.md#admin) - Search the index (admin)
* [autocomplete](docs/sdks/search/README.md#autocomplete) - Autocomplete
* [getFeed](docs/sdks/search/README.md#getfeed) - Feed of documents and events
* [suggestPeople](docs/sdks/search/README.md#suggestpeople) - Suggest people
* [suggestPeopleAdmin](docs/sdks/search/README.md#suggestpeopleadmin) - Suggest people (admin)
* [recommendations](docs/sdks/search/README.md#recommendations) - Recommend documents
* [execute](docs/sdks/search/README.md#execute) - Search

#### [client.shortcuts](docs/sdks/clientshortcuts/README.md)

* [create](docs/sdks/clientshortcuts/README.md#create) - Create shortcut
* [delete](docs/sdks/clientshortcuts/README.md#delete) - Delete shortcut
* [get](docs/sdks/clientshortcuts/README.md#get) - Read shortcut
* [getSimilar](docs/sdks/clientshortcuts/README.md#getsimilar) - Get similar shortcuts
* [list](docs/sdks/clientshortcuts/README.md#list) - List shortcuts
* [preview](docs/sdks/clientshortcuts/README.md#preview) - Preview shortcut
* [update](docs/sdks/clientshortcuts/README.md#update) - Update shortcut
* [upload](docs/sdks/clientshortcuts/README.md#upload) - Upload shortcuts

#### [client.summarize](docs/sdks/summarize/README.md)

* [generate](docs/sdks/summarize/README.md#generate) - Summarize documents

#### [client.user](docs/sdks/user/README.md)

* [addCredential](docs/sdks/user/README.md#addcredential) - Create credentials
* [deleteQueryHistory](docs/sdks/user/README.md#deletequeryhistory) - Delete query history
* [invite](docs/sdks/user/README.md#invite) - Send invitation
* [getPublicConfig](docs/sdks/user/README.md#getpublicconfig) - Read public client configuration
* [removeCredential](docs/sdks/user/README.md#removecredential) - Delete credentials
* [sendSupportEmail](docs/sdks/user/README.md#sendsupportemail) - Send support email

#### [client.verification](docs/sdks/verification/README.md)

* [addReminder](docs/sdks/verification/README.md#addreminder) - Create verification
* [list](docs/sdks/verification/README.md#list) - List verifications
* [verify](docs/sdks/verification/README.md#verify) - Update verification


### [indexing](docs/sdks/indexing/README.md)


#### [indexing.authentication](docs/sdks/indexingauthentication/README.md)

* [rotateToken](docs/sdks/indexingauthentication/README.md#rotatetoken) - Rotate token

#### [indexing.datasources](docs/sdks/datasources/README.md)

* [add](docs/sdks/datasources/README.md#add) - Add or update datasource
* [getConfig](docs/sdks/datasources/README.md#getconfig) - Get datasource config

#### [indexing.documents](docs/sdks/indexingdocuments/README.md)

* [addOrUpdate](docs/sdks/indexingdocuments/README.md#addorupdate) - Index document
* [index](docs/sdks/indexingdocuments/README.md#index) - Index documents
* [bulkIndex](docs/sdks/indexingdocuments/README.md#bulkindex) - Bulk index documents
* [processAll](docs/sdks/indexingdocuments/README.md#processall) - Schedules the processing of uploaded documents
* [delete](docs/sdks/indexingdocuments/README.md#delete) - Delete document

#### [indexing.people](docs/sdks/people/README.md)

* [index](docs/sdks/people/README.md#index) - Index employee
* [bulkIndexEmployees](docs/sdks/people/README.md#bulkindexemployees) - Bulk index employees
* [~~bulkIndex~~](docs/sdks/people/README.md#bulkindex) - Bulk index employees :warning: **Deprecated**
* [processAllEmployeesAndTeams](docs/sdks/people/README.md#processallemployeesandteams) - Schedules the processing of uploaded employees and teams
* [delete](docs/sdks/people/README.md#delete) - Delete employee
* [indexTeam](docs/sdks/people/README.md#indexteam) - Index team
* [deleteTeam](docs/sdks/people/README.md#deleteteam) - Delete team
* [bulkIndexTeams](docs/sdks/people/README.md#bulkindexteams) - Bulk index teams

#### [indexing.permissions](docs/sdks/permissions/README.md)

* [updatePermissions](docs/sdks/permissions/README.md#updatepermissions) - Update document permissions
* [indexUser](docs/sdks/permissions/README.md#indexuser) - Index user
* [bulkIndexUsers](docs/sdks/permissions/README.md#bulkindexusers) - Bulk index users
* [indexGroup](docs/sdks/permissions/README.md#indexgroup) - Index group
* [bulkIndexGroups](docs/sdks/permissions/README.md#bulkindexgroups) - Bulk index groups
* [indexMembership](docs/sdks/permissions/README.md#indexmembership) - Index membership
* [bulkIndexMemberships](docs/sdks/permissions/README.md#bulkindexmemberships) - Bulk index memberships for a group
* [processMemberships](docs/sdks/permissions/README.md#processmemberships) - Schedules the processing of group memberships
* [deleteUser](docs/sdks/permissions/README.md#deleteuser) - Delete user
* [deleteGroup](docs/sdks/permissions/README.md#deletegroup) - Delete group
* [deleteMembership](docs/sdks/permissions/README.md#deletemembership) - Delete membership
* [authorizeBetaUsers](docs/sdks/permissions/README.md#authorizebetausers) - Beta users

#### [indexing.shortcuts](docs/sdks/indexingshortcuts/README.md)

* [bulkIndex](docs/sdks/indexingshortcuts/README.md#bulkindex) - Bulk index external shortcuts

#### [indexing.troubleshooting](docs/sdks/troubleshooting/README.md)

* [getDatasourceStatus](docs/sdks/troubleshooting/README.md#getdatasourcestatus) - Beta: Get datasource status

* [postDocumentDebug](docs/sdks/troubleshooting/README.md#postdocumentdebug) - Beta: Get document information

* [postDocumentsDebug](docs/sdks/troubleshooting/README.md#postdocumentsdebug) - Beta: Get information of a batch of documents

* [debugUser](docs/sdks/troubleshooting/README.md#debuguser) - Beta: Get user information

* [checkAccess](docs/sdks/troubleshooting/README.md#checkaccess) - Check document access
* [~~getStatus~~](docs/sdks/troubleshooting/README.md#getstatus) - Get document upload and indexing status :warning: **Deprecated**
* [~~getDocumentCount~~](docs/sdks/troubleshooting/README.md#getdocumentcount) - Get document count :warning: **Deprecated**
* [~~getUserCount~~](docs/sdks/troubleshooting/README.md#getusercount) - Get user count :warning: **Deprecated**

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentsGetagentinputs`](docs/sdks/agents/README.md#getagentinputs) - Gets the inputs to an agent.
- [`agentsListagents`](docs/sdks/agents/README.md#listagents) - Lists all agents.
- [`agentsRunagent`](docs/sdks/agents/README.md#runagent) - Runs an Agent.
- [`clientActivitiesReportActivity`](docs/sdks/activities/README.md#reportactivity) - Report client activity
- [`clientActivityReport`](docs/sdks/activity/README.md#report) - Report document activity
- [`clientAnnouncementsCreate`](docs/sdks/announcements/README.md#create) - Create Announcement
- [`clientAnnouncementsCreateDraft`](docs/sdks/announcements/README.md#createdraft) - Create draft Announcement
- [`clientAnnouncementsDelete`](docs/sdks/announcements/README.md#delete) - Delete Announcement
- [`clientAnnouncementsDeleteDraft`](docs/sdks/announcements/README.md#deletedraft) - Delete draft Announcement
- [`clientAnnouncementsGet`](docs/sdks/announcements/README.md#get) - Read Announcement
- [`clientAnnouncementsGetDraft`](docs/sdks/announcements/README.md#getdraft) - Read draft Announcement
- [`clientAnnouncementsList`](docs/sdks/announcements/README.md#list) - List Announcements
- [`clientAnnouncementsPreview`](docs/sdks/announcements/README.md#preview) - Preview Announcement
- [`clientAnnouncementsPreviewDraft`](docs/sdks/announcements/README.md#previewdraft) - Preview draft Announcement
- [`clientAnnouncementsPublish`](docs/sdks/announcements/README.md#publish) - Publish draft Announcement
- [`clientAnnouncementsUnpublish`](docs/sdks/announcements/README.md#unpublish) - Unpublish Announcement
- [`clientAnnouncementsUpdate`](docs/sdks/announcements/README.md#update) - Update Announcement
- [`clientAnnouncementsUpdateDraft`](docs/sdks/announcements/README.md#updatedraft) - Update draft Announcement
- [`clientAnswersCreate`](docs/sdks/answers/README.md#create) - Create Answer
- [`clientAnswersDelete`](docs/sdks/answers/README.md#delete) - Delete Answer
- [`clientAnswersEdit`](docs/sdks/answers/README.md#edit) - Update Answer
- [`clientAnswersGet`](docs/sdks/answers/README.md#get) - Read Answer
- [`clientAnswersList`](docs/sdks/answers/README.md#list) - List Answers
- [`clientAnswersPreview`](docs/sdks/answers/README.md#preview) - Preview Answer
- [`clientAnswersPreviewDraft`](docs/sdks/answers/README.md#previewdraft) - Preview draft Answer
- [`clientAnswersUpdateLikes`](docs/sdks/answers/README.md#updatelikes) - Update Answer likes
- [`clientAuthenticationCreateAnonymousToken`](docs/sdks/clientauthentication/README.md#createanonymoustoken) - Create anonymous token
- [`clientAuthenticationCreateToken`](docs/sdks/clientauthentication/README.md#createtoken) - Create authentication token
- [`clientCalendarGetEvents`](docs/sdks/calendar/README.md#getevents) - Read events
- [`clientChatAsk`](docs/sdks/chat/README.md#ask) - Detect and answer questions
- [`clientChatDelete`](docs/sdks/chat/README.md#delete) - Deletes saved Chats
- [`clientChatDeleteAll`](docs/sdks/chat/README.md#deleteall) - Deletes all saved Chats owned by a user
- [`clientChatDeleteFiles`](docs/sdks/chat/README.md#deletefiles) - Delete files uploaded by a user for chat.
- [`clientChatGet`](docs/sdks/chat/README.md#get) - Retrieves a Chat
- [`clientChatGetApplication`](docs/sdks/chat/README.md#getapplication) - Gets the metadata for a custom Chat application
- [`clientChatGetFiles`](docs/sdks/chat/README.md#getfiles) - Get files uploaded by a user for Chat.
- [`clientChatList`](docs/sdks/chat/README.md#list) - Retrieves all saved Chats
- [`clientChatStart`](docs/sdks/chat/README.md#start) - Chat
- [`clientChatUploadFiles`](docs/sdks/chat/README.md#uploadfiles) - Upload files for Chat.
- [`clientCollectionsAddItems`](docs/sdks/collections/README.md#additems) - Add Collection item
- [`clientCollectionsCreate`](docs/sdks/collections/README.md#create) - Create Collection
- [`clientCollectionsDelete`](docs/sdks/collections/README.md#delete) - Delete Collection
- [`clientCollectionsDeleteItem`](docs/sdks/collections/README.md#deleteitem) - Delete Collection item
- [`clientCollectionsEdit`](docs/sdks/collections/README.md#edit) - Update document Collections
- [`clientCollectionsEditItem`](docs/sdks/collections/README.md#edititem) - Update Collection item
- [`clientCollectionsGet`](docs/sdks/collections/README.md#get) - Read Collection
- [`clientCollectionsList`](docs/sdks/collections/README.md#list) - List Collections
- [`clientCollectionsMoveItem`](docs/sdks/collections/README.md#moveitem) - Move Collection item
- [`clientCollectionsPin`](docs/sdks/collections/README.md#pin) - Pin Collection
- [`clientCollectionsUpdate`](docs/sdks/collections/README.md#update) - Update Collection
- [`clientDisplayableListsCreate`](docs/sdks/displayablelists/README.md#create) - Create displayable lists
- [`clientDisplayableListsDelete`](docs/sdks/displayablelists/README.md#delete) - Delete displayable lists
- [`clientDisplayableListsGet`](docs/sdks/displayablelists/README.md#get) - Read displayable lists
- [`clientDisplayableListsUpdate`](docs/sdks/displayablelists/README.md#update) - Update displayable lists
- [`clientDocumentsGet`](docs/sdks/clientdocuments/README.md#get) - Read documents
- [`clientDocumentsGetAnalytics`](docs/sdks/clientdocuments/README.md#getanalytics) - Read document analytics
- [`clientDocumentsGetByFacets`](docs/sdks/clientdocuments/README.md#getbyfacets) - Read documents by facets
- [`clientDocumentsGetPermissions`](docs/sdks/clientdocuments/README.md#getpermissions) - Read document permissions
- [`clientEntitiesGetTeams`](docs/sdks/entities/README.md#getteams) - Read teams
- [`clientEntitiesList`](docs/sdks/entities/README.md#list) - List entities
- [`clientEntitiesReadPeople`](docs/sdks/entities/README.md#readpeople) - Read people
- [`clientImagesGet`](docs/sdks/images/README.md#get) - Get image
- [`clientImagesUpload`](docs/sdks/images/README.md#upload) - Upload images
- [`clientInsightsGet`](docs/sdks/insights/README.md#get) - Read insights
- [`clientMessagesGet`](docs/sdks/messages/README.md#get) - Read messages
- [`clientPinsCreate`](docs/sdks/pins/README.md#create) - Create pin
- [`clientPinsEdit`](docs/sdks/pins/README.md#edit) - Update pin
- [`clientPinsGet`](docs/sdks/pins/README.md#get) - Read pin
- [`clientPinsList`](docs/sdks/pins/README.md#list) - List pins
- [`clientPinsRemove`](docs/sdks/pins/README.md#remove) - Delete pin
- [`clientSearchAdmin`](docs/sdks/search/README.md#admin) - Search the index (admin)
- [`clientSearchAutocomplete`](docs/sdks/search/README.md#autocomplete) - Autocomplete
- [`clientSearchExecute`](docs/sdks/search/README.md#execute) - Search
- [`clientSearchGetFeed`](docs/sdks/search/README.md#getfeed) - Feed of documents and events
- [`clientSearchRecommendations`](docs/sdks/search/README.md#recommendations) - Recommend documents
- [`clientSearchSuggestPeople`](docs/sdks/search/README.md#suggestpeople) - Suggest people
- [`clientSearchSuggestPeopleAdmin`](docs/sdks/search/README.md#suggestpeopleadmin) - Suggest people (admin)
- [`clientShortcutsCreate`](docs/sdks/clientshortcuts/README.md#create) - Create shortcut
- [`clientShortcutsDelete`](docs/sdks/clientshortcuts/README.md#delete) - Delete shortcut
- [`clientShortcutsGet`](docs/sdks/clientshortcuts/README.md#get) - Read shortcut
- [`clientShortcutsGetSimilar`](docs/sdks/clientshortcuts/README.md#getsimilar) - Get similar shortcuts
- [`clientShortcutsList`](docs/sdks/clientshortcuts/README.md#list) - List shortcuts
- [`clientShortcutsPreview`](docs/sdks/clientshortcuts/README.md#preview) - Preview shortcut
- [`clientShortcutsUpdate`](docs/sdks/clientshortcuts/README.md#update) - Update shortcut
- [`clientShortcutsUpload`](docs/sdks/clientshortcuts/README.md#upload) - Upload shortcuts
- [`clientSummarizeGenerate`](docs/sdks/summarize/README.md#generate) - Summarize documents
- [`clientUserAddCredential`](docs/sdks/user/README.md#addcredential) - Create credentials
- [`clientUserDeleteQueryHistory`](docs/sdks/user/README.md#deletequeryhistory) - Delete query history
- [`clientUserGetPublicConfig`](docs/sdks/user/README.md#getpublicconfig) - Read public client configuration
- [`clientUserInvite`](docs/sdks/user/README.md#invite) - Send invitation
- [`clientUserRemoveCredential`](docs/sdks/user/README.md#removecredential) - Delete credentials
- [`clientUserSendSupportEmail`](docs/sdks/user/README.md#sendsupportemail) - Send support email
- [`clientVerificationAddReminder`](docs/sdks/verification/README.md#addreminder) - Create verification
- [`clientVerificationList`](docs/sdks/verification/README.md#list) - List verifications
- [`clientVerificationVerify`](docs/sdks/verification/README.md#verify) - Update verification
- [`indexingAuthenticationRotateToken`](docs/sdks/indexingauthentication/README.md#rotatetoken) - Rotate token
- [`indexingDatasourcesAdd`](docs/sdks/datasources/README.md#add) - Add or update datasource
- [`indexingDatasourcesGetConfig`](docs/sdks/datasources/README.md#getconfig) - Get datasource config
- [`indexingDocumentsAddOrUpdate`](docs/sdks/indexingdocuments/README.md#addorupdate) - Index document
- [`indexingDocumentsBulkIndex`](docs/sdks/indexingdocuments/README.md#bulkindex) - Bulk index documents
- [`indexingDocumentsDelete`](docs/sdks/indexingdocuments/README.md#delete) - Delete document
- [`indexingDocumentsIndex`](docs/sdks/indexingdocuments/README.md#index) - Index documents
- [`indexingDocumentsProcessAll`](docs/sdks/indexingdocuments/README.md#processall) - Schedules the processing of uploaded documents
- [`indexingPeopleBulkIndexEmployees`](docs/sdks/people/README.md#bulkindexemployees) - Bulk index employees
- [`indexingPeopleBulkIndexTeams`](docs/sdks/people/README.md#bulkindexteams) - Bulk index teams
- [`indexingPeopleDelete`](docs/sdks/people/README.md#delete) - Delete employee
- [`indexingPeopleDeleteTeam`](docs/sdks/people/README.md#deleteteam) - Delete team
- [`indexingPeopleIndex`](docs/sdks/people/README.md#index) - Index employee
- [`indexingPeopleIndexTeam`](docs/sdks/people/README.md#indexteam) - Index team
- [`indexingPeopleProcessAllEmployeesAndTeams`](docs/sdks/people/README.md#processallemployeesandteams) - Schedules the processing of uploaded employees and teams
- [`indexingPermissionsAuthorizeBetaUsers`](docs/sdks/permissions/README.md#authorizebetausers) - Beta users
- [`indexingPermissionsBulkIndexGroups`](docs/sdks/permissions/README.md#bulkindexgroups) - Bulk index groups
- [`indexingPermissionsBulkIndexMemberships`](docs/sdks/permissions/README.md#bulkindexmemberships) - Bulk index memberships for a group
- [`indexingPermissionsBulkIndexUsers`](docs/sdks/permissions/README.md#bulkindexusers) - Bulk index users
- [`indexingPermissionsDeleteGroup`](docs/sdks/permissions/README.md#deletegroup) - Delete group
- [`indexingPermissionsDeleteMembership`](docs/sdks/permissions/README.md#deletemembership) - Delete membership
- [`indexingPermissionsDeleteUser`](docs/sdks/permissions/README.md#deleteuser) - Delete user
- [`indexingPermissionsIndexGroup`](docs/sdks/permissions/README.md#indexgroup) - Index group
- [`indexingPermissionsIndexMembership`](docs/sdks/permissions/README.md#indexmembership) - Index membership
- [`indexingPermissionsIndexUser`](docs/sdks/permissions/README.md#indexuser) - Index user
- [`indexingPermissionsProcessMemberships`](docs/sdks/permissions/README.md#processmemberships) - Schedules the processing of group memberships
- [`indexingPermissionsUpdatePermissions`](docs/sdks/permissions/README.md#updatepermissions) - Update document permissions
- [`indexingShortcutsBulkIndex`](docs/sdks/indexingshortcuts/README.md#bulkindex) - Bulk index external shortcuts
- [`indexingTroubleshootingCheckAccess`](docs/sdks/troubleshooting/README.md#checkaccess) - Check document access
- [`indexingTroubleshootingDebugUser`](docs/sdks/troubleshooting/README.md#debuguser) - Beta: Get user information

- [`indexingTroubleshootingGetDatasourceStatus`](docs/sdks/troubleshooting/README.md#getdatasourcestatus) - Beta: Get datasource status

- [`indexingTroubleshootingPostDocumentDebug`](docs/sdks/troubleshooting/README.md#postdocumentdebug) - Beta: Get document information

- [`indexingTroubleshootingPostDocumentsDebug`](docs/sdks/troubleshooting/README.md#postdocumentsdebug) - Beta: Get information of a batch of documents

- ~~[`clientAnswersCreateBoard`](docs/sdks/answers/README.md#createboard)~~ - Create Answer Board :warning: **Deprecated**
- ~~[`clientAnswersDeleteBoard`](docs/sdks/answers/README.md#deleteboard)~~ - Delete Answer Board :warning: **Deprecated**
- ~~[`clientAnswersGetBoard`](docs/sdks/answers/README.md#getboard)~~ - Read Answer Board :warning: **Deprecated**
- ~~[`clientAnswersListBoards`](docs/sdks/answers/README.md#listboards)~~ - List Answer Boards :warning: **Deprecated**
- ~~[`clientAnswersUpdateBoard`](docs/sdks/answers/README.md#updateboard)~~ - Update Answer Board :warning: **Deprecated**
- ~~[`indexingPeopleBulkIndex`](docs/sdks/people/README.md#bulkindex)~~ - Bulk index employees :warning: **Deprecated**
- ~~[`indexingTroubleshootingGetDocumentCount`](docs/sdks/troubleshooting/README.md#getdocumentcount)~~ - Get document count :warning: **Deprecated**
- ~~[`indexingTroubleshootingGetStatus`](docs/sdks/troubleshooting/README.md#getstatus)~~ - Get document upload and indexing status :warning: **Deprecated**
- ~~[`indexingTroubleshootingGetUserCount`](docs/sdks/troubleshooting/README.md#getusercount)~~ - Get user count :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useAgentsGetagentinputsMutation`](docs/sdks/agents/README.md#getagentinputs) - Gets the inputs to an agent.
- [`useAgentsListagentsMutation`](docs/sdks/agents/README.md#listagents) - Lists all agents.
- [`useAgentsRunagentMutation`](docs/sdks/agents/README.md#runagent) - Runs an Agent.
- [`useClientActivitiesReportActivityMutation`](docs/sdks/activities/README.md#reportactivity) - Report client activity
- [`useClientActivityReportMutation`](docs/sdks/activity/README.md#report) - Report document activity
- [`useClientAnnouncementsCreateDraftMutation`](docs/sdks/announcements/README.md#createdraft) - Create draft Announcement
- [`useClientAnnouncementsCreateMutation`](docs/sdks/announcements/README.md#create) - Create Announcement
- [`useClientAnnouncementsDeleteDraftMutation`](docs/sdks/announcements/README.md#deletedraft) - Delete draft Announcement
- [`useClientAnnouncementsDeleteMutation`](docs/sdks/announcements/README.md#delete) - Delete Announcement
- [`useClientAnnouncementsGetDraftMutation`](docs/sdks/announcements/README.md#getdraft) - Read draft Announcement
- [`useClientAnnouncementsGetMutation`](docs/sdks/announcements/README.md#get) - Read Announcement
- [`useClientAnnouncementsListMutation`](docs/sdks/announcements/README.md#list) - List Announcements
- [`useClientAnnouncementsPreviewDraftMutation`](docs/sdks/announcements/README.md#previewdraft) - Preview draft Announcement
- [`useClientAnnouncementsPreviewMutation`](docs/sdks/announcements/README.md#preview) - Preview Announcement
- [`useClientAnnouncementsPublishMutation`](docs/sdks/announcements/README.md#publish) - Publish draft Announcement
- [`useClientAnnouncementsUnpublishMutation`](docs/sdks/announcements/README.md#unpublish) - Unpublish Announcement
- [`useClientAnnouncementsUpdateDraftMutation`](docs/sdks/announcements/README.md#updatedraft) - Update draft Announcement
- [`useClientAnnouncementsUpdateMutation`](docs/sdks/announcements/README.md#update) - Update Announcement
- [`useClientAnswersCreateMutation`](docs/sdks/answers/README.md#create) - Create Answer
- [`useClientAnswersDeleteMutation`](docs/sdks/answers/README.md#delete) - Delete Answer
- [`useClientAnswersEditMutation`](docs/sdks/answers/README.md#edit) - Update Answer
- [`useClientAnswersGetMutation`](docs/sdks/answers/README.md#get) - Read Answer
- [`useClientAnswersListMutation`](docs/sdks/answers/README.md#list) - List Answers
- [`useClientAnswersPreviewDraftMutation`](docs/sdks/answers/README.md#previewdraft) - Preview draft Answer
- [`useClientAnswersPreviewMutation`](docs/sdks/answers/README.md#preview) - Preview Answer
- [`useClientAnswersUpdateLikesMutation`](docs/sdks/answers/README.md#updatelikes) - Update Answer likes
- [`useClientAuthenticationCreateAnonymousTokenMutation`](docs/sdks/clientauthentication/README.md#createanonymoustoken) - Create anonymous token
- [`useClientAuthenticationCreateTokenMutation`](docs/sdks/clientauthentication/README.md#createtoken) - Create authentication token
- [`useClientCalendarGetEventsMutation`](docs/sdks/calendar/README.md#getevents) - Read events
- [`useClientChatAskMutation`](docs/sdks/chat/README.md#ask) - Detect and answer questions
- [`useClientChatDeleteAllMutation`](docs/sdks/chat/README.md#deleteall) - Deletes all saved Chats owned by a user
- [`useClientChatDeleteFilesMutation`](docs/sdks/chat/README.md#deletefiles) - Delete files uploaded by a user for chat.
- [`useClientChatDeleteMutation`](docs/sdks/chat/README.md#delete) - Deletes saved Chats
- [`useClientChatGetApplicationMutation`](docs/sdks/chat/README.md#getapplication) - Gets the metadata for a custom Chat application
- [`useClientChatGetFilesMutation`](docs/sdks/chat/README.md#getfiles) - Get files uploaded by a user for Chat.
- [`useClientChatGetMutation`](docs/sdks/chat/README.md#get) - Retrieves a Chat
- [`useClientChatListMutation`](docs/sdks/chat/README.md#list) - Retrieves all saved Chats
- [`useClientChatStartMutation`](docs/sdks/chat/README.md#start) - Chat
- [`useClientChatUploadFilesMutation`](docs/sdks/chat/README.md#uploadfiles) - Upload files for Chat.
- [`useClientCollectionsAddItemsMutation`](docs/sdks/collections/README.md#additems) - Add Collection item
- [`useClientCollectionsCreateMutation`](docs/sdks/collections/README.md#create) - Create Collection
- [`useClientCollectionsDeleteItemMutation`](docs/sdks/collections/README.md#deleteitem) - Delete Collection item
- [`useClientCollectionsDeleteMutation`](docs/sdks/collections/README.md#delete) - Delete Collection
- [`useClientCollectionsEditItemMutation`](docs/sdks/collections/README.md#edititem) - Update Collection item
- [`useClientCollectionsEditMutation`](docs/sdks/collections/README.md#edit) - Update document Collections
- [`useClientCollectionsGetMutation`](docs/sdks/collections/README.md#get) - Read Collection
- [`useClientCollectionsListMutation`](docs/sdks/collections/README.md#list) - List Collections
- [`useClientCollectionsMoveItemMutation`](docs/sdks/collections/README.md#moveitem) - Move Collection item
- [`useClientCollectionsPinMutation`](docs/sdks/collections/README.md#pin) - Pin Collection
- [`useClientCollectionsUpdateMutation`](docs/sdks/collections/README.md#update) - Update Collection
- [`useClientDisplayableListsCreateMutation`](docs/sdks/displayablelists/README.md#create) - Create displayable lists
- [`useClientDisplayableListsDeleteMutation`](docs/sdks/displayablelists/README.md#delete) - Delete displayable lists
- [`useClientDisplayableListsGetMutation`](docs/sdks/displayablelists/README.md#get) - Read displayable lists
- [`useClientDisplayableListsUpdateMutation`](docs/sdks/displayablelists/README.md#update) - Update displayable lists
- [`useClientDocumentsGetAnalyticsMutation`](docs/sdks/clientdocuments/README.md#getanalytics) - Read document analytics
- [`useClientDocumentsGetByFacetsMutation`](docs/sdks/clientdocuments/README.md#getbyfacets) - Read documents by facets
- [`useClientDocumentsGetMutation`](docs/sdks/clientdocuments/README.md#get) - Read documents
- [`useClientDocumentsGetPermissionsMutation`](docs/sdks/clientdocuments/README.md#getpermissions) - Read document permissions
- [`useClientEntitiesGetTeamsMutation`](docs/sdks/entities/README.md#getteams) - Read teams
- [`useClientEntitiesListMutation`](docs/sdks/entities/README.md#list) - List entities
- [`useClientEntitiesReadPeopleMutation`](docs/sdks/entities/README.md#readpeople) - Read people
- [`useClientImagesGet`](docs/sdks/images/README.md#get) - Get image
- [`useClientImagesUploadMutation`](docs/sdks/images/README.md#upload) - Upload images
- [`useClientInsightsGetMutation`](docs/sdks/insights/README.md#get) - Read insights
- [`useClientMessagesGetMutation`](docs/sdks/messages/README.md#get) - Read messages
- [`useClientPinsCreateMutation`](docs/sdks/pins/README.md#create) - Create pin
- [`useClientPinsEditMutation`](docs/sdks/pins/README.md#edit) - Update pin
- [`useClientPinsGetMutation`](docs/sdks/pins/README.md#get) - Read pin
- [`useClientPinsListMutation`](docs/sdks/pins/README.md#list) - List pins
- [`useClientPinsRemoveMutation`](docs/sdks/pins/README.md#remove) - Delete pin
- [`useClientSearchAdminMutation`](docs/sdks/search/README.md#admin) - Search the index (admin)
- [`useClientSearchAutocompleteMutation`](docs/sdks/search/README.md#autocomplete) - Autocomplete
- [`useClientSearchExecuteMutation`](docs/sdks/search/README.md#execute) - Search
- [`useClientSearchGetFeedMutation`](docs/sdks/search/README.md#getfeed) - Feed of documents and events
- [`useClientSearchRecommendationsMutation`](docs/sdks/search/README.md#recommendations) - Recommend documents
- [`useClientSearchSuggestPeopleAdminMutation`](docs/sdks/search/README.md#suggestpeopleadmin) - Suggest people (admin)
- [`useClientSearchSuggestPeopleMutation`](docs/sdks/search/README.md#suggestpeople) - Suggest people
- [`useClientShortcutsCreateMutation`](docs/sdks/clientshortcuts/README.md#create) - Create shortcut
- [`useClientShortcutsDeleteMutation`](docs/sdks/clientshortcuts/README.md#delete) - Delete shortcut
- [`useClientShortcutsGetMutation`](docs/sdks/clientshortcuts/README.md#get) - Read shortcut
- [`useClientShortcutsGetSimilarMutation`](docs/sdks/clientshortcuts/README.md#getsimilar) - Get similar shortcuts
- [`useClientShortcutsListMutation`](docs/sdks/clientshortcuts/README.md#list) - List shortcuts
- [`useClientShortcutsPreviewMutation`](docs/sdks/clientshortcuts/README.md#preview) - Preview shortcut
- [`useClientShortcutsUpdateMutation`](docs/sdks/clientshortcuts/README.md#update) - Update shortcut
- [`useClientShortcutsUploadMutation`](docs/sdks/clientshortcuts/README.md#upload) - Upload shortcuts
- [`useClientSummarizeGenerateMutation`](docs/sdks/summarize/README.md#generate) - Summarize documents
- [`useClientUserAddCredentialMutation`](docs/sdks/user/README.md#addcredential) - Create credentials
- [`useClientUserDeleteQueryHistoryMutation`](docs/sdks/user/README.md#deletequeryhistory) - Delete query history
- [`useClientUserGetPublicConfigMutation`](docs/sdks/user/README.md#getpublicconfig) - Read public client configuration
- [`useClientUserInviteMutation`](docs/sdks/user/README.md#invite) - Send invitation
- [`useClientUserRemoveCredentialMutation`](docs/sdks/user/README.md#removecredential) - Delete credentials
- [`useClientUserSendSupportEmailMutation`](docs/sdks/user/README.md#sendsupportemail) - Send support email
- [`useClientVerificationAddReminderMutation`](docs/sdks/verification/README.md#addreminder) - Create verification
- [`useClientVerificationListMutation`](docs/sdks/verification/README.md#list) - List verifications
- [`useClientVerificationVerifyMutation`](docs/sdks/verification/README.md#verify) - Update verification
- [`useIndexingAuthenticationRotateTokenMutation`](docs/sdks/indexingauthentication/README.md#rotatetoken) - Rotate token
- [`useIndexingDatasourcesAddMutation`](docs/sdks/datasources/README.md#add) - Add or update datasource
- [`useIndexingDatasourcesGetConfigMutation`](docs/sdks/datasources/README.md#getconfig) - Get datasource config
- [`useIndexingDocumentsAddOrUpdateMutation`](docs/sdks/indexingdocuments/README.md#addorupdate) - Index document
- [`useIndexingDocumentsBulkIndexMutation`](docs/sdks/indexingdocuments/README.md#bulkindex) - Bulk index documents
- [`useIndexingDocumentsDeleteMutation`](docs/sdks/indexingdocuments/README.md#delete) - Delete document
- [`useIndexingDocumentsIndexMutation`](docs/sdks/indexingdocuments/README.md#index) - Index documents
- [`useIndexingDocumentsProcessAllMutation`](docs/sdks/indexingdocuments/README.md#processall) - Schedules the processing of uploaded documents
- [`useIndexingPeopleBulkIndexEmployeesMutation`](docs/sdks/people/README.md#bulkindexemployees) - Bulk index employees
- [`useIndexingPeopleBulkIndexTeamsMutation`](docs/sdks/people/README.md#bulkindexteams) - Bulk index teams
- [`useIndexingPeopleDeleteMutation`](docs/sdks/people/README.md#delete) - Delete employee
- [`useIndexingPeopleDeleteTeamMutation`](docs/sdks/people/README.md#deleteteam) - Delete team
- [`useIndexingPeopleIndexMutation`](docs/sdks/people/README.md#index) - Index employee
- [`useIndexingPeopleIndexTeamMutation`](docs/sdks/people/README.md#indexteam) - Index team
- [`useIndexingPeopleProcessAllEmployeesAndTeamsMutation`](docs/sdks/people/README.md#processallemployeesandteams) - Schedules the processing of uploaded employees and teams
- [`useIndexingPermissionsAuthorizeBetaUsersMutation`](docs/sdks/permissions/README.md#authorizebetausers) - Beta users
- [`useIndexingPermissionsBulkIndexGroupsMutation`](docs/sdks/permissions/README.md#bulkindexgroups) - Bulk index groups
- [`useIndexingPermissionsBulkIndexMembershipsMutation`](docs/sdks/permissions/README.md#bulkindexmemberships) - Bulk index memberships for a group
- [`useIndexingPermissionsBulkIndexUsersMutation`](docs/sdks/permissions/README.md#bulkindexusers) - Bulk index users
- [`useIndexingPermissionsDeleteGroupMutation`](docs/sdks/permissions/README.md#deletegroup) - Delete group
- [`useIndexingPermissionsDeleteMembershipMutation`](docs/sdks/permissions/README.md#deletemembership) - Delete membership
- [`useIndexingPermissionsDeleteUserMutation`](docs/sdks/permissions/README.md#deleteuser) - Delete user
- [`useIndexingPermissionsIndexGroupMutation`](docs/sdks/permissions/README.md#indexgroup) - Index group
- [`useIndexingPermissionsIndexMembershipMutation`](docs/sdks/permissions/README.md#indexmembership) - Index membership
- [`useIndexingPermissionsIndexUserMutation`](docs/sdks/permissions/README.md#indexuser) - Index user
- [`useIndexingPermissionsProcessMembershipsMutation`](docs/sdks/permissions/README.md#processmemberships) - Schedules the processing of group memberships
- [`useIndexingPermissionsUpdatePermissionsMutation`](docs/sdks/permissions/README.md#updatepermissions) - Update document permissions
- [`useIndexingShortcutsBulkIndexMutation`](docs/sdks/indexingshortcuts/README.md#bulkindex) - Bulk index external shortcuts
- [`useIndexingTroubleshootingCheckAccessMutation`](docs/sdks/troubleshooting/README.md#checkaccess) - Check document access
- [`useIndexingTroubleshootingDebugUserMutation`](docs/sdks/troubleshooting/README.md#debuguser) - Beta: Get user information

- [`useIndexingTroubleshootingGetDatasourceStatusMutation`](docs/sdks/troubleshooting/README.md#getdatasourcestatus) - Beta: Get datasource status

- [`useIndexingTroubleshootingPostDocumentDebugMutation`](docs/sdks/troubleshooting/README.md#postdocumentdebug) - Beta: Get document information

- [`useIndexingTroubleshootingPostDocumentsDebugMutation`](docs/sdks/troubleshooting/README.md#postdocumentsdebug) - Beta: Get information of a batch of documents

- ~~[`useClientAnswersCreateBoardMutation`](docs/sdks/answers/README.md#createboard)~~ - Create Answer Board :warning: **Deprecated**
- ~~[`useClientAnswersDeleteBoardMutation`](docs/sdks/answers/README.md#deleteboard)~~ - Delete Answer Board :warning: **Deprecated**
- ~~[`useClientAnswersGetBoardMutation`](docs/sdks/answers/README.md#getboard)~~ - Read Answer Board :warning: **Deprecated**
- ~~[`useClientAnswersListBoardsMutation`](docs/sdks/answers/README.md#listboards)~~ - List Answer Boards :warning: **Deprecated**
- ~~[`useClientAnswersUpdateBoardMutation`](docs/sdks/answers/README.md#updateboard)~~ - Update Answer Board :warning: **Deprecated**
- ~~[`useIndexingPeopleBulkIndexMutation`](docs/sdks/people/README.md#bulkindex)~~ - Bulk index employees :warning: **Deprecated**
- ~~[`useIndexingTroubleshootingGetDocumentCountMutation`](docs/sdks/troubleshooting/README.md#getdocumentcount)~~ - Get document count :warning: **Deprecated**
- ~~[`useIndexingTroubleshootingGetStatusMutation`](docs/sdks/troubleshooting/README.md#getstatus)~~ - Get document upload and indexing status :warning: **Deprecated**
- ~~[`useIndexingTroubleshootingGetUserCountMutation`](docs/sdks/troubleshooting/README.md#getusercount)~~ - Get user count :warning: **Deprecated**

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Glean } from "@gleanwork/api-client";
import { openAsBlob } from "node:fs";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.images.upload({
    requestBody: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End Retries [retries] -->

## Error Handling

The following errors may be thrown by the SDK:

| Status Code | Description             | Error Type             | Content Type     |
| ----------- | ----------------------- | ---------------------- | ---------------- |
| 400         | Invalid Request         | errors.GleanError      | \*/\*            |
| 401         | Not Authorized          | errors.GleanError      | \*/\*            |
| 403         | Permission Denied       | errors.GleanDataError  | application/json |
| 408         | Request Timeout         | errors.GleanError      | \*/\*            |
| 422         | Invalid Query           | errors.GleanDataError  | application/json |
| 429         | Too Many Requests       | errors.GleanError      | \*/\*            |
| 4XX         | Other Client Errors     | errors.GleanError      | \*/\*            |
| 5XX         | Internal Server Errors  | errors.GleanError      | \*/\*            |

### Example

```typescript
import { Glean } from "glean";
import { GleanDataError, GleanError } from "glean/models/errors";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

try {
  const data = await glean.chat.ask({});
  console.log(data);
} catch (error) {
  if (error instanceof GleanError) {
    console.error(error.message);
    console.error(error.statusCode);
    console.error(error.rawResponse);
    console.error(error.body);
  }

  // If the server returned structured data
  if (error instanceof GleanDataError) {
    console.error(error.errorMessages);
    console.error(error.invalidOperators);
  }
}

```

### Advanced Error Handling

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- No Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `https://{domain}-be.glean.com` contains variables and is set to `https://domain-be.glean.com` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable | Parameter        | Default    | Description                                                              |
| -------- | ---------------- | ---------- | ------------------------------------------------------------------------ |
| `domain` | `domain: string` | `"domain"` | Email domain (without extension) that determines the deployment backend. |

#### Example

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  domain: "scared-pearl.biz",
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  serverURL: "https://domain-be.glean.com",
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Glean } from "@gleanwork/api-client";
import { HTTPClient } from "@gleanwork/api-client/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Glean({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Glean } from "@gleanwork/api-client";

const sdk = new Glean({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `GLEAN_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=glean&utm_campaign=typescript)
