# Search
(*client.search*)

## Overview

### Available Operations

* [queryAsAdmin](#queryasadmin) - Search the index (admin)
* [autocomplete](#autocomplete) - Autocomplete
* [retrieveFeed](#retrievefeed) - Feed of documents and events
* [recommendations](#recommendations) - Recommend documents
* [query](#query) - Search

## queryAsAdmin

Retrieves results for search query without respect for permissions. This is available only to privileged users.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.search.queryAsAdmin({
    trackingToken: "trackingToken",
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
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
                  facetBucketSize: 51090,
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
                    startIndex: 636850,
                  },
                  {
                    startIndex: 559323,
                  },
                  {
                    startIndex: 639917,
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
                  facetBucketSize: 855317,
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
                  facetBucketSize: 899726,
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
        owner: {
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
        mentionedPeople: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
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
            attribution: {
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
            updatedBy: {
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
          },
        ],
        assignedTo: {
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
        updatedBy: {
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
        collections: [
          {
            name: "<value>",
            description: "mmm video mid",
            addedRoles: [
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
            id: 524051,
            creator: {
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
            updatedBy: {
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
            items: [
              {
                collectionId: 75113,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "COLLECTION",
              },
              {
                collectionId: 744767,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "DOCUMENT",
              },
            ],
          },
          {
            name: "<value>",
            description: "brr finally hastily amused needily if uh-huh outside wrongly too",
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
            id: 448428,
            creator: {
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
            updatedBy: {
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
          },
        ],
        interactions: {
          reacts: [
            {
              reactors: [
                {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              ],
            },
            {},
            {},
          ],
          shares: [
            {
              numDaysAgo: 876677,
              sharer: {
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
            },
          ],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
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
            reminders: [
              {
                assignee: {
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
                requestor: {
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
                remindAt: 854607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 214607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 204917,
              },
            ],
            lastReminder: {
              assignee: {
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
              requestor: {
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
              remindAt: 554738,
            },
            candidateVerifiers: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
          },
        },
        shortcuts: [
          {
            inputAlias: "<value>",
            createdBy: {
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
            updatedBy: {
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
          },
        ],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
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
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    query: "vacation policy",
    inputDetails: {
      hasCopyPaste: true,
    },
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
      facetBucketSize: 171751,
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
    timeoutMillis: 5000,
    people: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
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
import { clientSearchQueryAsAdmin } from "@gleanwork/api-client/funcs/clientSearchQueryAsAdmin.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientSearchQueryAsAdmin(glean, {
    trackingToken: "trackingToken",
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
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
                  facetBucketSize: 51090,
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
                    startIndex: 636850,
                  },
                  {
                    startIndex: 559323,
                  },
                  {
                    startIndex: 639917,
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
                  facetBucketSize: 855317,
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
                  facetBucketSize: 899726,
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
        owner: {
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
        mentionedPeople: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
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
            attribution: {
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
            updatedBy: {
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
          },
        ],
        assignedTo: {
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
        updatedBy: {
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
        collections: [
          {
            name: "<value>",
            description: "mmm video mid",
            addedRoles: [
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
            id: 524051,
            creator: {
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
            updatedBy: {
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
            items: [
              {
                collectionId: 75113,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "COLLECTION",
              },
              {
                collectionId: 744767,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "DOCUMENT",
              },
            ],
          },
          {
            name: "<value>",
            description: "brr finally hastily amused needily if uh-huh outside wrongly too",
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
            id: 448428,
            creator: {
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
            updatedBy: {
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
          },
        ],
        interactions: {
          reacts: [
            {
              reactors: [
                {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              ],
            },
            {},
            {},
          ],
          shares: [
            {
              numDaysAgo: 876677,
              sharer: {
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
            },
          ],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
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
            reminders: [
              {
                assignee: {
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
                requestor: {
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
                remindAt: 854607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 214607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 204917,
              },
            ],
            lastReminder: {
              assignee: {
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
              requestor: {
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
              remindAt: 554738,
            },
            candidateVerifiers: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
          },
        },
        shortcuts: [
          {
            inputAlias: "<value>",
            createdBy: {
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
            updatedBy: {
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
          },
        ],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
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
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    query: "vacation policy",
    inputDetails: {
      hasCopyPaste: true,
    },
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
      facetBucketSize: 171751,
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
    timeoutMillis: 5000,
    people: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
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
  useClientSearchQueryAsAdminMutation
} from "@gleanwork/api-client/react-query/clientSearchQueryAsAdmin.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SearchRequest](../../models/components/searchrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.GleanDataError | 403, 422              | application/json      |
| errors.GleanError     | 4XX, 5XX              | \*/\*                 |

## autocomplete

Retrieve query suggestions, operators and documents for the given partially typed query.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.search.autocomplete({
    trackingToken: "trackingToken",
    query: "San Fra",
    datasource: "GDRIVE",
    resultSize: 10,
    authTokens: [
      {
        accessToken: "123abc",
        datasource: "gmail",
        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
        tokenType: "Bearer",
        authUser: "1",
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
import { clientSearchAutocomplete } from "@gleanwork/api-client/funcs/clientSearchAutocomplete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientSearchAutocomplete(glean, {
    trackingToken: "trackingToken",
    query: "San Fra",
    datasource: "GDRIVE",
    resultSize: 10,
    authTokens: [
      {
        accessToken: "123abc",
        datasource: "gmail",
        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
        tokenType: "Bearer",
        authUser: "1",
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
  useClientSearchAutocompleteMutation
} from "@gleanwork/api-client/react-query/clientSearchAutocomplete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AutocompleteRequest](../../models/components/autocompleterequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AutocompleteResponse](../../models/components/autocompleteresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## retrieveFeed

The personalized feed/home includes different types of contents including suggestions, recents, calendar events and many more.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.search.retrieveFeed({
    timeoutMillis: 5000,
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
import { clientSearchRetrieveFeed } from "@gleanwork/api-client/funcs/clientSearchRetrieveFeed.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientSearchRetrieveFeed(glean, {
    timeoutMillis: 5000,
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
  useClientSearchRetrieveFeedMutation
} from "@gleanwork/api-client/react-query/clientSearchRetrieveFeed.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FeedRequest](../../models/components/feedrequest.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeedResponse](../../models/components/feedresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## recommendations

Retrieve recommended documents for the given URL or Glean Document ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.search.recommendations({
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
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
                  facetBucketSize: 236211,
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
                    startIndex: 818990,
                  },
                  {
                    startIndex: 38651,
                  },
                  {
                    startIndex: 996660,
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
                  facetBucketSize: 485964,
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
                  facetBucketSize: 793380,
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
        owner: {
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
        mentionedPeople: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
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
            attribution: {
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
            updatedBy: {
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
          },
        ],
        assignedTo: {
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
        updatedBy: {
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
        collections: [
          {
            name: "<value>",
            description: "rust whisper oh in seagull",
            addedRoles: [
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
                role: "VERIFIER",
              },
            ],
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
            id: 532535,
            creator: {
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
            updatedBy: {
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
            items: [
              {
                collectionId: 354858,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                  ],
                },
                itemType: "TEXT",
              },
            ],
          },
          {
            name: "<value>",
            description: "rotating finally marimba gnaw consequently",
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
            id: 354405,
            creator: {
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
            updatedBy: {
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
          },
          {
            name: "<value>",
            description: "backburn elver ugh",
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
            id: 418504,
            creator: {
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
            updatedBy: {
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
          },
        ],
        interactions: {
          reacts: [
            {
              reactors: [
                {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              ],
            },
            {},
          ],
          shares: [
            {
              numDaysAgo: 208065,
              sharer: {
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
            },
            {
              numDaysAgo: 29685,
              sharer: {
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
            },
          ],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
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
            reminders: [
              {
                assignee: {
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
                requestor: {
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
                remindAt: 770893,
              },
            ],
            lastReminder: {
              assignee: {
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
              requestor: {
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
              remindAt: 578719,
            },
            candidateVerifiers: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
          },
        },
        shortcuts: [
          {
            inputAlias: "<value>",
            createdBy: {
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
            updatedBy: {
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
          },
        ],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
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
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    requestOptions: {
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
      context: {
        metadata: {
          datasource: "datasource",
          objectType: "Feature Request",
          container: "container",
          parentId: "JIRA_EN-1337",
          mimeType: "mimeType",
          documentId: "documentId",
          createTime: new Date("2000-01-23T04:56:07.000Z"),
          updateTime: new Date("2000-01-23T04:56:07.000Z"),
          author: {
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
          owner: {
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
          components: [
            "Backend",
            "Networking",
          ],
          status: "[\"Done\"]",
          assignedTo: {
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
          updatedBy: {
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
          interactions: {},
          verification: {
            state: "VERIFIED",
            metadata: {
              lastVerifier: {
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
              lastReminder: {
                assignee: {
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
                requestor: {
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
                remindAt: 23690,
              },
            },
          },
          customData: {
            "someCustomField": {},
          },
          contactPerson: {
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
        },
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
import { clientSearchRecommendations } from "@gleanwork/api-client/funcs/clientSearchRecommendations.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientSearchRecommendations(glean, {
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
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
                  facetBucketSize: 236211,
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
                    startIndex: 818990,
                  },
                  {
                    startIndex: 38651,
                  },
                  {
                    startIndex: 996660,
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
                  facetBucketSize: 485964,
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
                  facetBucketSize: 793380,
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
        owner: {
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
        mentionedPeople: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
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
            attribution: {
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
            updatedBy: {
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
          },
        ],
        assignedTo: {
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
        updatedBy: {
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
        collections: [
          {
            name: "<value>",
            description: "rust whisper oh in seagull",
            addedRoles: [
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
                role: "VERIFIER",
              },
            ],
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
            id: 532535,
            creator: {
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
            updatedBy: {
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
            items: [
              {
                collectionId: 354858,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                  ],
                },
                itemType: "TEXT",
              },
            ],
          },
          {
            name: "<value>",
            description: "rotating finally marimba gnaw consequently",
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
            id: 354405,
            creator: {
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
            updatedBy: {
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
          },
          {
            name: "<value>",
            description: "backburn elver ugh",
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
            id: 418504,
            creator: {
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
            updatedBy: {
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
          },
        ],
        interactions: {
          reacts: [
            {
              reactors: [
                {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              ],
            },
            {},
          ],
          shares: [
            {
              numDaysAgo: 208065,
              sharer: {
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
            },
            {
              numDaysAgo: 29685,
              sharer: {
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
            },
          ],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
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
            reminders: [
              {
                assignee: {
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
                requestor: {
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
                remindAt: 770893,
              },
            ],
            lastReminder: {
              assignee: {
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
              requestor: {
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
              remindAt: 578719,
            },
            candidateVerifiers: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
          },
        },
        shortcuts: [
          {
            inputAlias: "<value>",
            createdBy: {
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
            updatedBy: {
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
          },
        ],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
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
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    requestOptions: {
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
      context: {
        metadata: {
          datasource: "datasource",
          objectType: "Feature Request",
          container: "container",
          parentId: "JIRA_EN-1337",
          mimeType: "mimeType",
          documentId: "documentId",
          createTime: new Date("2000-01-23T04:56:07.000Z"),
          updateTime: new Date("2000-01-23T04:56:07.000Z"),
          author: {
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
          owner: {
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
          components: [
            "Backend",
            "Networking",
          ],
          status: "[\"Done\"]",
          assignedTo: {
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
          updatedBy: {
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
          interactions: {},
          verification: {
            state: "VERIFIED",
            metadata: {
              lastVerifier: {
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
              lastReminder: {
                assignee: {
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
                requestor: {
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
                remindAt: 23690,
              },
            },
          },
          customData: {
            "someCustomField": {},
          },
          contactPerson: {
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
        },
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
  useClientSearchRecommendationsMutation
} from "@gleanwork/api-client/react-query/clientSearchRecommendations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.RecommendationsRequest](../../models/components/recommendationsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResultsResponse](../../models/components/resultsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## query

Retrieve results from the index for the given query and filters.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.search.query({
    trackingToken: "trackingToken",
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
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
                  facetBucketSize: 51090,
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
                    startIndex: 636850,
                  },
                  {
                    startIndex: 559323,
                  },
                  {
                    startIndex: 639917,
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
                  facetBucketSize: 855317,
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
                  facetBucketSize: 899726,
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
        owner: {
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
        mentionedPeople: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
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
            attribution: {
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
            updatedBy: {
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
          },
        ],
        assignedTo: {
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
        updatedBy: {
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
        collections: [
          {
            name: "<value>",
            description: "mmm video mid",
            addedRoles: [
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
            id: 524051,
            creator: {
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
            updatedBy: {
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
            items: [
              {
                collectionId: 75113,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "COLLECTION",
              },
              {
                collectionId: 744767,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "DOCUMENT",
              },
            ],
          },
          {
            name: "<value>",
            description: "brr finally hastily amused needily if uh-huh outside wrongly too",
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
            id: 448428,
            creator: {
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
            updatedBy: {
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
          },
        ],
        interactions: {
          reacts: [
            {
              reactors: [
                {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              ],
            },
            {},
            {},
          ],
          shares: [
            {
              numDaysAgo: 876677,
              sharer: {
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
            },
          ],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
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
            reminders: [
              {
                assignee: {
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
                requestor: {
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
                remindAt: 854607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 214607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 204917,
              },
            ],
            lastReminder: {
              assignee: {
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
              requestor: {
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
              remindAt: 554738,
            },
            candidateVerifiers: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
          },
        },
        shortcuts: [
          {
            inputAlias: "<value>",
            createdBy: {
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
            updatedBy: {
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
          },
        ],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
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
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    query: "vacation policy",
    inputDetails: {
      hasCopyPaste: true,
    },
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
      facetBucketSize: 171751,
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
    timeoutMillis: 5000,
    people: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
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
import { clientSearchQuery } from "@gleanwork/api-client/funcs/clientSearchQuery.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientSearchQuery(glean, {
    trackingToken: "trackingToken",
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
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
                  facetBucketSize: 51090,
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
                    startIndex: 636850,
                  },
                  {
                    startIndex: 559323,
                  },
                  {
                    startIndex: 639917,
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
                  facetBucketSize: 855317,
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
                  facetBucketSize: 899726,
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
        owner: {
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
        mentionedPeople: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
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
            attribution: {
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
            updatedBy: {
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
          },
        ],
        assignedTo: {
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
        updatedBy: {
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
        collections: [
          {
            name: "<value>",
            description: "mmm video mid",
            addedRoles: [
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
            id: 524051,
            creator: {
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
            updatedBy: {
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
            items: [
              {
                collectionId: 75113,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "COLLECTION",
              },
              {
                collectionId: 744767,
                createdBy: {
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
                shortcut: {
                  inputAlias: "<value>",
                  createdBy: {
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
                  updatedBy: {
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
                },
                itemType: "DOCUMENT",
              },
            ],
          },
          {
            name: "<value>",
            description: "brr finally hastily amused needily if uh-huh outside wrongly too",
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
            id: 448428,
            creator: {
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
            updatedBy: {
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
          },
        ],
        interactions: {
          reacts: [
            {
              reactors: [
                {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              ],
            },
            {},
            {},
          ],
          shares: [
            {
              numDaysAgo: 876677,
              sharer: {
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
            },
          ],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
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
            reminders: [
              {
                assignee: {
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
                requestor: {
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
                remindAt: 854607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 214607,
              },
              {
                assignee: {
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
                requestor: {
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
                remindAt: 204917,
              },
            ],
            lastReminder: {
              assignee: {
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
              requestor: {
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
              remindAt: 554738,
            },
            candidateVerifiers: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
          },
        },
        shortcuts: [
          {
            inputAlias: "<value>",
            createdBy: {
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
            updatedBy: {
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
          },
        ],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
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
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    query: "vacation policy",
    inputDetails: {
      hasCopyPaste: true,
    },
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
      facetBucketSize: 171751,
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
    timeoutMillis: 5000,
    people: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
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
  useClientSearchQueryMutation
} from "@gleanwork/api-client/react-query/clientSearchQuery.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SearchRequest](../../models/components/searchrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.GleanDataError | 403, 422              | application/json      |
| errors.GleanError     | 4XX, 5XX              | \*/\*                 |