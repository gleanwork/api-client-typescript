# ClientShortcuts
(*client.shortcuts*)

## Overview

### Available Operations

* [create](#create) - Create shortcut
* [delete](#delete) - Delete shortcut
* [retrieve](#retrieve) - Read shortcut
* [list](#list) - List shortcuts
* [update](#update) - Update shortcut

## create

Create a user-generated shortcut that contains an alias and destination URL.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.shortcuts.create({
    data: {
      addedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [
              {
                querySuggestion: {
                  query: "app:github type:pull author:mortimer",
                  searchProviderInfo: {
                    name: "Google",
                    searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                  },
                  label: "Mortimer's PRs",
                  datasource: "github",
                  requestOptions: {
                    datasourceFilter: "JIRA",
                    datasourcesFilter: [
                      "JIRA",
                    ],
                    queryOverridesFacetFilters: true,
                    facetFilters: [
                      {
                        fieldName: "type",
                        values: [
                          {
                            value: "Spreadsheet",
                            relationType: "EQUALS",
                          },
                          {
                            value: "Presentation",
                            relationType: "EQUALS",
                          },
                        ],
                      },
                    ],
                    facetFilterSets: [
                      {
                        filters: [
                          {
                            fieldName: "type",
                            values: [
                              {
                                value: "Spreadsheet",
                                relationType: "EQUALS",
                              },
                              {
                                value: "Presentation",
                                relationType: "EQUALS",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        filters: [
                          {
                            fieldName: "type",
                            values: [
                              {
                                value: "Spreadsheet",
                                relationType: "EQUALS",
                              },
                              {
                                value: "Presentation",
                                relationType: "EQUALS",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    facetBucketSize: 134365,
                    authTokens: [
                      {
                        accessToken: "123abc",
                        datasource: "gmail",
                        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                        tokenType: "Bearer",
                        authUser: "1",
                      },
                    ],
                  },
                  ranges: [
                    {
                      startIndex: 796474,
                      document: {
                        metadata: {
                          datasource: "datasource",
                          objectType: "Feature Request",
                          container: "container",
                          parentId: "JIRA_EN-1337",
                          mimeType: "mimeType",
                          documentId: "documentId",
                          createTime: new Date("2000-01-23T04:56:07.000Z"),
                          updateTime: new Date("2000-01-23T04:56:07.000Z"),
                          components: [
                            "Backend",
                            "Networking",
                          ],
                          status: "[\"Done\"]",
                          pins: [
                            {
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              documentId: "<id>",
                            },
                            {
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              documentId: "<id>",
                            },
                            {
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              documentId: "<id>",
                            },
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "fumigate convection though zowie",
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              id: 496323,
                              items: [
                                {
                                  collectionId: 782367,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "URL",
                                },
                              ],
                            },
                          ],
                          interactions: {
                            reacts: [
                              {},
                              {},
                              {},
                            ],
                            shares: [
                              {
                                numDaysAgo: 219974,
                              },
                              {
                                numDaysAgo: 449221,
                              },
                              {
                                numDaysAgo: 427887,
                              },
                            ],
                          },
                          verification: {
                            state: "VERIFIED",
                            metadata: {
                              reminders: [
                                {
                                  assignee: {
                                    name: "George Clooney",
                                    obfuscatedId: "abc123",
                                  },
                                  remindAt: 491427,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 490420,
                              },
                            },
                          },
                          shortcuts: [
                            {
                              inputAlias: "<value>",
                            },
                          ],
                          customData: {
                            "someCustomField": {},
                          },
                        },
                      },
                    },
                  ],
                  inputDetails: {
                    hasCopyPaste: true,
                  },
                },
                results: [
                  {
                    title: "title",
                    url: "https://example.com/foo/bar",
                    nativeAppUrl: "slack://foo/bar",
                    snippets: [
                      {
                        snippet: "snippet",
                        mimeType: "mimeType",
                      },
                    ],
                  },
                ],
              },
              {
                querySuggestion: {
                  query: "app:github type:pull author:mortimer",
                  searchProviderInfo: {
                    name: "Google",
                    searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                  },
                  label: "Mortimer's PRs",
                  datasource: "github",
                  requestOptions: {
                    datasourceFilter: "JIRA",
                    datasourcesFilter: [
                      "JIRA",
                    ],
                    queryOverridesFacetFilters: true,
                    facetFilters: [
                      {
                        fieldName: "type",
                        values: [
                          {
                            value: "Spreadsheet",
                            relationType: "EQUALS",
                          },
                          {
                            value: "Presentation",
                            relationType: "EQUALS",
                          },
                        ],
                      },
                    ],
                    facetFilterSets: [
                      {
                        filters: [
                          {
                            fieldName: "type",
                            values: [
                              {
                                value: "Spreadsheet",
                                relationType: "EQUALS",
                              },
                              {
                                value: "Presentation",
                                relationType: "EQUALS",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    facetBucketSize: 129663,
                    authTokens: [
                      {
                        accessToken: "123abc",
                        datasource: "gmail",
                        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                        tokenType: "Bearer",
                        authUser: "1",
                      },
                    ],
                  },
                  inputDetails: {
                    hasCopyPaste: true,
                  },
                },
              },
            ],
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {
                suggestions: [
                  {
                    query: "app:github type:pull author:mortimer",
                    label: "Mortimer's PRs",
                    datasource: "github",
                  },
                ],
              },
              inviteInfo: {
                invites: [
                  {},
                  {},
                ],
              },
              customFields: [
                {
                  label: "<value>",
                  values: [
                    {},
                  ],
                },
                {
                  label: "<value>",
                  values: [],
                },
              ],
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "OWNER",
        },
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "VERIFIER",
        },
      ],
      removedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "VERIFIER",
        },
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
                {
                  datasource: "github",
                  handle: "<value>",
                },
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "ANSWER_MODERATOR",
        },
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "OWNER",
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientShortcutsCreate } from "@gleanwork/api-client/funcs/clientShortcutsCreate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientShortcutsCreate(glean, {
    data: {
      addedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [
              {
                querySuggestion: {
                  query: "app:github type:pull author:mortimer",
                  searchProviderInfo: {
                    name: "Google",
                    searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                  },
                  label: "Mortimer's PRs",
                  datasource: "github",
                  requestOptions: {
                    datasourceFilter: "JIRA",
                    datasourcesFilter: [
                      "JIRA",
                    ],
                    queryOverridesFacetFilters: true,
                    facetFilters: [
                      {
                        fieldName: "type",
                        values: [
                          {
                            value: "Spreadsheet",
                            relationType: "EQUALS",
                          },
                          {
                            value: "Presentation",
                            relationType: "EQUALS",
                          },
                        ],
                      },
                    ],
                    facetFilterSets: [
                      {
                        filters: [
                          {
                            fieldName: "type",
                            values: [
                              {
                                value: "Spreadsheet",
                                relationType: "EQUALS",
                              },
                              {
                                value: "Presentation",
                                relationType: "EQUALS",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        filters: [
                          {
                            fieldName: "type",
                            values: [
                              {
                                value: "Spreadsheet",
                                relationType: "EQUALS",
                              },
                              {
                                value: "Presentation",
                                relationType: "EQUALS",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    facetBucketSize: 134365,
                    authTokens: [
                      {
                        accessToken: "123abc",
                        datasource: "gmail",
                        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                        tokenType: "Bearer",
                        authUser: "1",
                      },
                    ],
                  },
                  ranges: [
                    {
                      startIndex: 796474,
                      document: {
                        metadata: {
                          datasource: "datasource",
                          objectType: "Feature Request",
                          container: "container",
                          parentId: "JIRA_EN-1337",
                          mimeType: "mimeType",
                          documentId: "documentId",
                          createTime: new Date("2000-01-23T04:56:07.000Z"),
                          updateTime: new Date("2000-01-23T04:56:07.000Z"),
                          components: [
                            "Backend",
                            "Networking",
                          ],
                          status: "[\"Done\"]",
                          pins: [
                            {
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              documentId: "<id>",
                            },
                            {
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              documentId: "<id>",
                            },
                            {
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              documentId: "<id>",
                            },
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "fumigate convection though zowie",
                              audienceFilters: [
                                {
                                  fieldName: "type",
                                  values: [
                                    {
                                      value: "Spreadsheet",
                                      relationType: "EQUALS",
                                    },
                                    {
                                      value: "Presentation",
                                      relationType: "EQUALS",
                                    },
                                  ],
                                },
                              ],
                              id: 496323,
                              items: [
                                {
                                  collectionId: 782367,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "URL",
                                },
                              ],
                            },
                          ],
                          interactions: {
                            reacts: [
                              {},
                              {},
                              {},
                            ],
                            shares: [
                              {
                                numDaysAgo: 219974,
                              },
                              {
                                numDaysAgo: 449221,
                              },
                              {
                                numDaysAgo: 427887,
                              },
                            ],
                          },
                          verification: {
                            state: "VERIFIED",
                            metadata: {
                              reminders: [
                                {
                                  assignee: {
                                    name: "George Clooney",
                                    obfuscatedId: "abc123",
                                  },
                                  remindAt: 491427,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 490420,
                              },
                            },
                          },
                          shortcuts: [
                            {
                              inputAlias: "<value>",
                            },
                          ],
                          customData: {
                            "someCustomField": {},
                          },
                        },
                      },
                    },
                  ],
                  inputDetails: {
                    hasCopyPaste: true,
                  },
                },
                results: [
                  {
                    title: "title",
                    url: "https://example.com/foo/bar",
                    nativeAppUrl: "slack://foo/bar",
                    snippets: [
                      {
                        snippet: "snippet",
                        mimeType: "mimeType",
                      },
                    ],
                  },
                ],
              },
              {
                querySuggestion: {
                  query: "app:github type:pull author:mortimer",
                  searchProviderInfo: {
                    name: "Google",
                    searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                  },
                  label: "Mortimer's PRs",
                  datasource: "github",
                  requestOptions: {
                    datasourceFilter: "JIRA",
                    datasourcesFilter: [
                      "JIRA",
                    ],
                    queryOverridesFacetFilters: true,
                    facetFilters: [
                      {
                        fieldName: "type",
                        values: [
                          {
                            value: "Spreadsheet",
                            relationType: "EQUALS",
                          },
                          {
                            value: "Presentation",
                            relationType: "EQUALS",
                          },
                        ],
                      },
                    ],
                    facetFilterSets: [
                      {
                        filters: [
                          {
                            fieldName: "type",
                            values: [
                              {
                                value: "Spreadsheet",
                                relationType: "EQUALS",
                              },
                              {
                                value: "Presentation",
                                relationType: "EQUALS",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    facetBucketSize: 129663,
                    authTokens: [
                      {
                        accessToken: "123abc",
                        datasource: "gmail",
                        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                        tokenType: "Bearer",
                        authUser: "1",
                      },
                    ],
                  },
                  inputDetails: {
                    hasCopyPaste: true,
                  },
                },
              },
            ],
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {
                suggestions: [
                  {
                    query: "app:github type:pull author:mortimer",
                    label: "Mortimer's PRs",
                    datasource: "github",
                  },
                ],
              },
              inviteInfo: {
                invites: [
                  {},
                  {},
                ],
              },
              customFields: [
                {
                  label: "<value>",
                  values: [
                    {},
                  ],
                },
                {
                  label: "<value>",
                  values: [],
                },
              ],
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "OWNER",
        },
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "VERIFIER",
        },
      ],
      removedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "VERIFIER",
        },
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
                {
                  datasource: "github",
                  handle: "<value>",
                },
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "ANSWER_MODERATOR",
        },
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {},
              inviteInfo: {},
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "OWNER",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientShortcutsCreateMutation
} from "@gleanwork/api-client/react-query/clientShortcutsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateShortcutRequest](../../models/components/createshortcutrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateShortcutResponse](../../models/components/createshortcutresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## delete

Delete an existing user-generated shortcut.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  await glean.client.shortcuts.delete({
    id: 545907,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientShortcutsDelete } from "@gleanwork/api-client/funcs/clientShortcutsDelete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientShortcutsDelete(glean, {
    id: 545907,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientShortcutsDeleteMutation
} from "@gleanwork/api-client/react-query/clientShortcutsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeleteShortcutRequest](../../models/components/deleteshortcutrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## retrieve

Read a particular shortcut's details given its ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.shortcuts.retrieve({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientShortcutsRetrieve } from "@gleanwork/api-client/funcs/clientShortcutsRetrieve.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientShortcutsRetrieve(glean, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientShortcutsRetrieveMutation
} from "@gleanwork/api-client/react-query/clientShortcutsRetrieve.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.GetShortcutRequestUnion](../../models/components/getshortcutrequestunion.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetShortcutResponse](../../models/components/getshortcutresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## list

List shortcuts editable/owned by the currently authenticated user.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.shortcuts.list({
    pageSize: 10,
    filters: [
      {
        fieldName: "type",
        values: [
          {
            value: "Spreadsheet",
            relationType: "EQUALS",
          },
          {
            value: "Presentation",
            relationType: "EQUALS",
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientShortcutsList } from "@gleanwork/api-client/funcs/clientShortcutsList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientShortcutsList(glean, {
    pageSize: 10,
    filters: [
      {
        fieldName: "type",
        values: [
          {
            value: "Spreadsheet",
            relationType: "EQUALS",
          },
          {
            value: "Presentation",
            relationType: "EQUALS",
          },
        ],
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientShortcutsListMutation
} from "@gleanwork/api-client/react-query/clientShortcutsList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ListShortcutsPaginatedRequest](../../models/components/listshortcutspaginatedrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListShortcutsPaginatedResponse](../../models/components/listshortcutspaginatedresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## update

Updates the shortcut with the given ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.shortcuts.update({
    id: 857478,
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
                    {
                      fieldName: "type",
                      values: [
                        {
                          value: "Spreadsheet",
                          relationType: "EQUALS",
                        },
                        {
                          value: "Presentation",
                          relationType: "EQUALS",
                        },
                      ],
                    },
                  ],
                  facetFilterSets: [
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  facetBucketSize: 627690,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 984008,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "for drat underneath sticky yuck even",
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            id: 996168,
                            items: [
                              {
                                collectionId: 392671,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 845914,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "URL",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "duh now mechanically during since anxiously lightly ultimately",
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            id: 958595,
                          },
                          {
                            name: "<value>",
                            description: "whereas anenst habit onto worriedly revoke hm eminent sham",
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            id: 115263,
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 691669,
                            },
                            {
                              numDaysAgo: 202116,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 246216,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 778241,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                  {
                    startIndex: 698908,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        interactions: {},
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 451776,
                            },
                          },
                        },
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
                    {
                      fieldName: "type",
                      values: [
                        {
                          value: "Spreadsheet",
                          relationType: "EQUALS",
                        },
                        {
                          value: "Presentation",
                          relationType: "EQUALS",
                        },
                      ],
                    },
                  ],
                  facetFilterSets: [
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  facetBucketSize: 158724,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
            },
          ],
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
              ],
            },
            customFields: [
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
              {
                label: "<value>",
                values: [],
              },
            ],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "ANSWER_MODERATOR",
      },
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "EDITOR",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VIEWER",
      },
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "OWNER",
      },
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VIEWER",
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientShortcutsUpdate } from "@gleanwork/api-client/funcs/clientShortcutsUpdate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientShortcutsUpdate(glean, {
    id: 857478,
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
                    {
                      fieldName: "type",
                      values: [
                        {
                          value: "Spreadsheet",
                          relationType: "EQUALS",
                        },
                        {
                          value: "Presentation",
                          relationType: "EQUALS",
                        },
                      ],
                    },
                  ],
                  facetFilterSets: [
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  facetBucketSize: 627690,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 984008,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "for drat underneath sticky yuck even",
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            id: 996168,
                            items: [
                              {
                                collectionId: 392671,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 845914,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "URL",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "duh now mechanically during since anxiously lightly ultimately",
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            id: 958595,
                          },
                          {
                            name: "<value>",
                            description: "whereas anenst habit onto worriedly revoke hm eminent sham",
                            audienceFilters: [
                              {
                                fieldName: "type",
                                values: [
                                  {
                                    value: "Spreadsheet",
                                    relationType: "EQUALS",
                                  },
                                  {
                                    value: "Presentation",
                                    relationType: "EQUALS",
                                  },
                                ],
                              },
                            ],
                            id: 115263,
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 691669,
                            },
                            {
                              numDaysAgo: 202116,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 246216,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 778241,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                  {
                    startIndex: 698908,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        interactions: {},
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 451776,
                            },
                          },
                        },
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
                    {
                      fieldName: "type",
                      values: [
                        {
                          value: "Spreadsheet",
                          relationType: "EQUALS",
                        },
                        {
                          value: "Presentation",
                          relationType: "EQUALS",
                        },
                      ],
                    },
                  ],
                  facetFilterSets: [
                    {
                      filters: [
                        {
                          fieldName: "type",
                          values: [
                            {
                              value: "Spreadsheet",
                              relationType: "EQUALS",
                            },
                            {
                              value: "Presentation",
                              relationType: "EQUALS",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  facetBucketSize: 158724,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
            },
          ],
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
              ],
            },
            customFields: [
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
              {
                label: "<value>",
                values: [],
              },
            ],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "ANSWER_MODERATOR",
      },
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "EDITOR",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VIEWER",
      },
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "OWNER",
      },
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {},
            inviteInfo: {},
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VIEWER",
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientShortcutsUpdateMutation
} from "@gleanwork/api-client/react-query/clientShortcutsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateShortcutRequest](../../models/components/updateshortcutrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateShortcutResponse](../../models/components/updateshortcutresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |