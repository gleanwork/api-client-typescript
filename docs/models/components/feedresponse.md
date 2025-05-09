# FeedResponse

## Example Usage

```typescript
import { FeedResponse } from "@gleanwork/api-client/models/components";

let value: FeedResponse = {
  serverTimestamp: 603266,
  results: [
    {
      category: "TRENDING_DOCUMENT",
      primaryEntry: {
        title: "<value>",
        createdBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        document: {
          containerDocument: {
            parentDocument: {
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
                  name: "name",
                  obfuscatedId: "<id>",
                },
                components: [
                  "Backend",
                  "Networking",
                ],
                status: "[\"Done\"]",
                customData: {
                  "someCustomField": {},
                },
              },
            },
          },
        },
        event: {
          id: "<id>",
          url: "https://shadowy-typeface.name",
          attendees: {
            people: [],
          },
          generatedAttachments: [
            {
              documents: [
                {},
              ],
              person: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              customer: {
                id: "<id>",
                company: {
                  name: "<value>",
                  location: "New York City",
                  industry: "Finances",
                  about:
                    "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
                },
                poc: [
                  {
                    name: "George Clooney",
                    obfuscatedId: "abc123",
                  },
                ],
                mergedCustomers: [],
                notes: "CIO is interested in trying out the product.",
              },
              externalLinks: [
                {
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
              content: [
                {
                  displayHeader: "Action Items",
                },
              ],
            },
          ],
        },
        announcement: {
          draftId: 342,
        },
        collection: {
          name: "<value>",
          description: "to anxiously decent quit zowie overtrain",
          addedRoles: [],
          removedRoles: [],
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
          id: 467031,
          creator: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          updatedBy: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          items: [],
          children: [],
          roles: [],
        },
        collectionItem: {
          collectionId: 130670,
          shortcut: {
            inputAlias: "<value>",
            destinationDocument: {},
          },
          itemType: "TEXT",
        },
        promptTemplate: {
          promptTemplate: {
            template: "<value>",
            addedRoles: [
              {
                role: "VERIFIER",
              },
            ],
            removedRoles: [
              {
                role: "VERIFIER",
              },
            ],
            lastUpdatedBy: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            roles: [
              {
                role: "ANSWER_MODERATOR",
              },
            ],
          },
        },
        workflow: {
          workflow: {},
        },
        activities: [
          {
            actor: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
          },
        ],
      },
      secondaryEntries: [
        {
          title: "<value>",
          event: {
            id: "<id>",
            url: "https://joyful-fellow.com",
            generatedAttachments: [
              {
                documents: [
                  {},
                ],
                externalLinks: [
                  {
                    iconConfig: {
                      color: "#343CED",
                      key: "person_icon",
                      iconType: "GLYPH",
                      name: "user",
                    },
                  },
                ],
                content: [
                  {
                    displayHeader: "Action Items",
                  },
                ],
              },
            ],
          },
          announcement: {
            draftId: 342,
          },
          promptTemplate: {
            promptTemplate: {
              template: "<value>",
              addedRoles: [
                {
                  role: "ANSWER_MODERATOR",
                },
              ],
              removedRoles: [
                {
                  role: "EDITOR",
                },
              ],
              roles: [
                {
                  role: "VERIFIER",
                },
              ],
            },
          },
          workflow: {
            workflow: {},
          },
          activities: [
            {},
          ],
        },
      ],
    },
  ],
  facetResults: {
    "key": [
      {
        sourceName: "container_name",
        operatorName: "SelectMultiple",
        buckets: [
          {
            count: 1,
            datasource: "jira",
            percentage: 5,
            value: {
              stringValue: "engineering",
              integerValue: 5,
              displayLabel: "engineering",
              iconConfig: {
                color: "#343CED",
                key: "person_icon",
                iconType: "GLYPH",
                name: "user",
              },
            },
          },
        ],
        hasMoreBuckets: false,
        groupName: "Service Cloud",
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `experimentIds`                                                                         | *number*[]                                                                              | :heavy_minus_sign:                                                                      | List of experiment ids for the corresponding request.                                   |
| `trackingToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | An opaque token that represents this particular feed response.                          |
| `serverTimestamp`                                                                       | *number*                                                                                | :heavy_check_mark:                                                                      | Server unix timestamp (in seconds since epoch UTC).                                     |
| `results`                                                                               | [components.FeedResult](../../models/components/feedresult.md)[]                        | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `facetResults`                                                                          | Record<string, [components.FacetResult](../../models/components/facetresult.md)[]>      | :heavy_minus_sign:                                                                      | Map from category to the list of facets that can be used to filter the entry's content. |
| `mentionsTimeWindowInHours`                                                             | *number*                                                                                | :heavy_minus_sign:                                                                      | The time window (in hours) used for generating user mentions.                           |