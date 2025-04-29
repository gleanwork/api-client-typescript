# ResultsResponse

## Example Usage

```typescript
import { ResultsResponse } from "@gleanwork/api-client/models/components";

let value: ResultsResponse = {
  results: [
    {
      title: "title",
      url: "https://example.com/foo/bar",
      nativeAppUrl: "slack://foo/bar",
      snippets: [],
      mustIncludeSuggestions: {},
    },
  ],
  structuredResults: [
    {
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
        poc: [],
        mergedCustomers: [],
        notes: "CIO is interested in trying out the product.",
      },
      team: {
        id: "<id>",
        name: "<value>",
        members: [],
        customFields: [],
        datasourceProfiles: [
          {
            datasource: "github",
            handle: "<value>",
          },
        ],
      },
      customEntity: {
        roles: [],
      },
      answer: {
        id: 3,
        docId: "ANSWERS_answer_3",
        question: "Why is the sky blue?",
        bodyText:
          "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
        addedRoles: [],
        removedRoles: [],
        combinedAnswerText: {
          text:
            "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
          structuredList: [],
        },
        likes: {
          likedBy: [],
          likedByUser: false,
          numLikes: 648069,
        },
        updatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        verification: {
          state: "VERIFIED",
          metadata: {
            lastVerifier: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            reminders: [],
            lastReminder: {
              assignee: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              requestor: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              remindAt: 80002,
            },
            candidateVerifiers: [],
          },
        },
        board: {
          name: "<value>",
          description: "among diligently mid",
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
          id: 35122,
          creator: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        },
        collections: [],
        sourceDocument: {},
      },
      extractedQnA: {
        questionResult: {
          title: "title",
          url: "https://example.com/foo/bar",
          nativeAppUrl: "slack://foo/bar",
        },
      },
      meeting: {
        attendees: {
          people: [],
        },
      },
      collection: {
        name: "<value>",
        description: "why before boo destock",
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
        id: 116252,
        items: [],
        children: [],
      },
      answerBoard: {
        name: "<value>",
        description: "safe slimy except whoever huzzah cruel",
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
        id: 369574,
      },
      code: {
        repoName: "scio",
        fileName: "README.md",
      },
      querySuggestions: {
        suggestions: [],
      },
      relatedDocuments: [],
      relatedQuestion: {
        ranges: [],
      },
    },
  ],
  generatedQnaResult: {
    ranges: [
      {
        startIndex: 559226,
      },
    ],
  },
  backendTimeMillis: 1100,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `trackingToken`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A token that should be passed for additional requests related to this request (such as more results requests). |                                                                                                                |
| `sessionInfo`                                                                                                  | [components.SessionInfo](../../models/components/sessioninfo.md)                                               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `results`                                                                                                      | [components.SearchResult](../../models/components/searchresult.md)[]                                           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `structuredResults`                                                                                            | [components.StructuredResult](../../models/components/structuredresult.md)[]                                   | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `generatedQnaResult`                                                                                           | [components.GeneratedQna](../../models/components/generatedqna.md)                                             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `gleanDataError`                                                                                               | [components.GleanDataError](../../models/components/gleandataerror.md)                                         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `requestID`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A platform-generated request ID to correlate backend logs.                                                     |                                                                                                                |
| `backendTimeMillis`                                                                                            | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Time in milliseconds the backend took to respond to the request.                                               | 1100                                                                                                           |