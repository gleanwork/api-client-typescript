# Answers
(*client.answers*)

## Overview

### Available Operations

* [create](#create) - Create Answer
* [delete](#delete) - Delete Answer
* [update](#update) - Update Answer
* [retrieve](#retrieve) - Read Answer
* [list](#list) - List Answers

## create

Create a user-generated Answer that contains a question and answer.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.answers.create({
    data: {
      question: "Why is the sky blue?",
      bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
                    ],
                    facetBucketSize: 708564,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                    facetBucketSize: 708564,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                  values: [
                    {},
                    {},
                    {},
                  ],
                },
                {
                  label: "<value>",
                  values: [
                    {},
                    {},
                    {},
                  ],
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
      roles: [
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
      combinedAnswerText: {
        text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      },
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
import { clientAnswersCreate } from "@gleanwork/api-client/funcs/clientAnswersCreate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientAnswersCreate(glean, {
    data: {
      question: "Why is the sky blue?",
      bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
                    ],
                    facetBucketSize: 708564,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                    facetBucketSize: 708564,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                      startIndex: 945729,
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
                          ],
                          collections: [
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                              ],
                            },
                            {
                              name: "<value>",
                              description: "via vain astride question",
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
                              id: 51416,
                              items: [
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
                                },
                                {
                                  collectionId: 33920,
                                  shortcut: {
                                    inputAlias: "<value>",
                                  },
                                  itemType: "TEXT",
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
                                numDaysAgo: 85387,
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
                                  remindAt: 161639,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 613051,
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
                  values: [
                    {},
                    {},
                    {},
                  ],
                },
                {
                  label: "<value>",
                  values: [
                    {},
                    {},
                    {},
                  ],
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
      roles: [
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
      combinedAnswerText: {
        text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      },
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
  useClientAnswersCreateMutation
} from "@gleanwork/api-client/react-query/clientAnswersCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateAnswerRequest](../../models/components/createanswerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Answer](../../models/components/answer.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## delete

Delete an existing user-generated Answer.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  await glean.client.answers.delete({
    id: 3,
    docId: "ANSWERS_answer_3",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersDelete } from "@gleanwork/api-client/funcs/clientAnswersDelete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientAnswersDelete(glean, {
    id: 3,
    docId: "ANSWERS_answer_3",
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
  useClientAnswersDeleteMutation
} from "@gleanwork/api-client/react-query/clientAnswersDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeleteAnswerRequest](../../models/components/deleteanswerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## update

Update an existing user-generated Answer.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.answers.update({
    id: 3,
    docId: "ANSWERS_answer_3",
    question: "Why is the sky blue?",
    bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
                  facetBucketSize: 552856,
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
                    startIndex: 23264,
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
                            description: "boohoo hunger energetic who whoa grimy vibrant wisely",
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
                            id: 919335,
                            items: [
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 439797,
                            },
                            {
                              numDaysAgo: 439797,
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
                                remindAt: 996442,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 996442,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 886538,
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
              ],
            },
            customFields: [
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
                  facetBucketSize: 552856,
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
                    startIndex: 23264,
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
                            description: "boohoo hunger energetic who whoa grimy vibrant wisely",
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
                            id: 919335,
                            items: [
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 439797,
                            },
                            {
                              numDaysAgo: 439797,
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
                                remindAt: 996442,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 996442,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 886538,
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
              ],
            },
            customFields: [
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
              ],
            },
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
              ],
            },
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
              ],
            },
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
    roles: [
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
              ],
            },
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
    combinedAnswerText: {
      text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
import { clientAnswersUpdate } from "@gleanwork/api-client/funcs/clientAnswersUpdate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientAnswersUpdate(glean, {
    id: 3,
    docId: "ANSWERS_answer_3",
    question: "Why is the sky blue?",
    bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
                  facetBucketSize: 552856,
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
                    startIndex: 23264,
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
                            description: "boohoo hunger energetic who whoa grimy vibrant wisely",
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
                            id: 919335,
                            items: [
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 439797,
                            },
                            {
                              numDaysAgo: 439797,
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
                                remindAt: 996442,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 996442,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 886538,
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
              ],
            },
            customFields: [
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
                  facetBucketSize: 552856,
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
                    startIndex: 23264,
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
                            description: "boohoo hunger energetic who whoa grimy vibrant wisely",
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
                            id: 919335,
                            items: [
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 972120,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 439797,
                            },
                            {
                              numDaysAgo: 439797,
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
                                remindAt: 996442,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 996442,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 886538,
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
              ],
            },
            customFields: [
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
              ],
            },
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
              ],
            },
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
              ],
            },
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
    roles: [
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
              ],
            },
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
    combinedAnswerText: {
      text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
  useClientAnswersUpdateMutation
} from "@gleanwork/api-client/react-query/clientAnswersUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.EditAnswerRequest](../../models/components/editanswerrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Answer](../../models/components/answer.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## retrieve

Read the details of a particular Answer given its ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.answers.retrieve({
    id: 3,
    docId: "ANSWERS_answer_3",
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
import { clientAnswersRetrieve } from "@gleanwork/api-client/funcs/clientAnswersRetrieve.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientAnswersRetrieve(glean, {
    id: 3,
    docId: "ANSWERS_answer_3",
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
  useClientAnswersRetrieveMutation
} from "@gleanwork/api-client/react-query/clientAnswersRetrieve.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.GetAnswerRequest](../../models/components/getanswerrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAnswerResponse](../../models/components/getanswerresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## list

List Answers created by the current user.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.answers.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersList } from "@gleanwork/api-client/funcs/clientAnswersList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientAnswersList(glean, {});

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
  useClientAnswersListMutation
} from "@gleanwork/api-client/react-query/clientAnswersList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ListAnswersRequest](../../models/components/listanswersrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListAnswersResponse](../../models/components/listanswersresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |