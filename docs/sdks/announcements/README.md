# Announcements
(*client.announcements*)

## Overview

### Available Operations

* [create](#create) - Create Announcement
* [delete](#delete) - Delete Announcement
* [update](#update) - Update Announcement

## create

Create a textual announcement visible to some set of users based on department and location.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.announcements.create({
    startTime: new Date("2024-06-17T07:14:55.338Z"),
    endTime: new Date("2024-11-30T17:06:07.804Z"),
    title: "<value>",
    body: {
      text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                        facetBucketSize: 796474,
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
                          startIndex: 86,
                        },
                        {
                          startIndex: 169727,
                        },
                        {
                          startIndex: 89964,
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
                  description: "yuck mortally round",
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
                  id: 924484,
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
                      collectionId: 583353,
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
                  ],
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
                    numDaysAgo: 540711,
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
                  {
                    numDaysAgo: 198175,
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
                    numDaysAgo: 353531,
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
                state: "DEPRECATED",
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
                      remindAt: 295558,
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
                      remindAt: 712214,
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
                      remindAt: 212775,
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
                    remindAt: 608384,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                    remindAt: 930830,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
      ],
    },
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
import { clientAnnouncementsCreate } from "@gleanwork/api-client/funcs/clientAnnouncementsCreate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientAnnouncementsCreate(glean, {
    startTime: new Date("2024-06-17T07:14:55.338Z"),
    endTime: new Date("2024-11-30T17:06:07.804Z"),
    title: "<value>",
    body: {
      text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                        facetBucketSize: 796474,
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
                          startIndex: 86,
                        },
                        {
                          startIndex: 169727,
                        },
                        {
                          startIndex: 89964,
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
                  description: "yuck mortally round",
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
                  id: 924484,
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
                      collectionId: 583353,
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
                  ],
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
                    numDaysAgo: 540711,
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
                  {
                    numDaysAgo: 198175,
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
                    numDaysAgo: 353531,
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
                state: "DEPRECATED",
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
                      remindAt: 295558,
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
                      remindAt: 712214,
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
                      remindAt: 212775,
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
                    remindAt: 608384,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                    remindAt: 930830,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
      ],
    },
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
  useClientAnnouncementsCreateMutation
} from "@gleanwork/api-client/react-query/clientAnnouncementsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateAnnouncementRequest](../../models/components/createannouncementrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Announcement](../../models/components/announcement.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## delete

Delete an existing user-generated announcement.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  await glean.client.announcements.delete({
    id: 545907,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnnouncementsDelete } from "@gleanwork/api-client/funcs/clientAnnouncementsDelete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientAnnouncementsDelete(glean, {
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
  useClientAnnouncementsDeleteMutation
} from "@gleanwork/api-client/react-query/clientAnnouncementsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeleteAnnouncementRequest](../../models/components/deleteannouncementrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Update a textual announcement visible to some set of users based on department and location.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.announcements.update({
    startTime: new Date("2025-07-28T19:04:48.565Z"),
    endTime: new Date("2024-10-16T10:52:42.015Z"),
    title: "<value>",
    body: {
      text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                        ],
                        facetBucketSize: 488852,
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
                          startIndex: 54062,
                        },
                        {
                          startIndex: 896501,
                        },
                        {
                          startIndex: 446863,
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
                        facetBucketSize: 249440,
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
                        facetBucketSize: 789275,
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
                  description: "daintily certainly yak surprised beyond blah intensely",
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
                  id: 249026,
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
                      collectionId: 784089,
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
                            role: "VIEWER",
                          },
                        ],
                      },
                      itemType: "DOCUMENT",
                    },
                    {
                      collectionId: 911620,
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
                      },
                      itemType: "URL",
                    },
                  ],
                },
                {
                  name: "<value>",
                  description: "ultimately in likely opera please antelope",
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
                  id: 256393,
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
                  description: "up vibrant sternly translation scrutinise condense lovingly following and",
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
                  id: 472933,
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
                ],
                shares: [
                  {
                    numDaysAgo: 315330,
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
                      remindAt: 402083,
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
                    remindAt: 753191,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                state: "DEPRECATED",
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
                    remindAt: 817980,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
      ],
    },
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
    id: 174577,
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
import { clientAnnouncementsUpdate } from "@gleanwork/api-client/funcs/clientAnnouncementsUpdate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientAnnouncementsUpdate(glean, {
    startTime: new Date("2025-07-28T19:04:48.565Z"),
    endTime: new Date("2024-10-16T10:52:42.015Z"),
    title: "<value>",
    body: {
      text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                        ],
                        facetBucketSize: 488852,
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
                          startIndex: 54062,
                        },
                        {
                          startIndex: 896501,
                        },
                        {
                          startIndex: 446863,
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
                        facetBucketSize: 249440,
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
                        facetBucketSize: 789275,
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
                  description: "daintily certainly yak surprised beyond blah intensely",
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
                  id: 249026,
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
                      collectionId: 784089,
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
                            role: "VIEWER",
                          },
                        ],
                      },
                      itemType: "DOCUMENT",
                    },
                    {
                      collectionId: 911620,
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
                      },
                      itemType: "URL",
                    },
                  ],
                },
                {
                  name: "<value>",
                  description: "ultimately in likely opera please antelope",
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
                  id: 256393,
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
                  description: "up vibrant sternly translation scrutinise condense lovingly following and",
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
                  id: 472933,
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
                ],
                shares: [
                  {
                    numDaysAgo: 315330,
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
                      remindAt: 402083,
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
                    remindAt: 753191,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
        {
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                state: "DEPRECATED",
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
                    remindAt: 817980,
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
          text: "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
        },
      ],
    },
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
    id: 174577,
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
  useClientAnnouncementsUpdateMutation
} from "@gleanwork/api-client/react-query/clientAnnouncementsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateAnnouncementRequest](../../models/components/updateannouncementrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Announcement](../../models/components/announcement.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |