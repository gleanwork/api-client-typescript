# ChatMessage

A message that is rendered as one coherent unit with one given sender.

## Example Usage

```typescript
import { ChatMessage } from "@gleanwork/api-client/models/components";

let value: ChatMessage = {
  citations: [
    {
      sourceDocument: {
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
      sourceFile: {
        id: "FILE_1234",
        url: "www.google.com",
        name: "sample.pdf",
      },
      sourcePerson: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      referenceRanges: [
        {
          textRange: {
            startIndex: 463522,
            document: {},
          },
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
  fragments: [
    {
      structuredResults: [
        {
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
              numLikes: 499504,
            },
            updatedBy: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            verification: {
              state: "DEPRECATED",
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
                  remindAt: 46781,
                },
                candidateVerifiers: [],
              },
            },
            board: {
              name: "<value>",
              description: "uh-huh yet loudly round colorfully young",
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
              id: 655731,
              creator: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            },
            collections: [],
          },
          extractedQnA: {
            questionResult: {
              title: "title",
              url: "https://example.com/foo/bar",
              nativeAppUrl: "slack://foo/bar",
              mustIncludeSuggestions: {},
            },
          },
          meeting: {
            attendees: {
              people: [],
            },
          },
          collection: {
            name: "<value>",
            description: "procurement ew cook lest plus phew incidentally",
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
            id: 589123,
            items: [],
            children: [],
          },
          answerBoard: {
            name: "<value>",
            description: "creaking absent uh-huh horst",
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
            id: 460630,
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
      querySuggestion: {
        query: "app:github type:pull author:mortimer",
        label: "Mortimer's PRs",
        datasource: "github",
      },
      file: {
        id: "FILE_1234",
        url: "www.google.com",
        name: "sample.pdf",
      },
      action: {
        metadata: {
          type: "RETRIEVAL",
          name: "<value>",
          displayName: "Pearl_Grady-Tillman38",
          displayDescription: "<value>",
          objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentConfig`                                                                                                                                                                                           | [components.AgentConfig](../../models/components/agentconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                      | Describes the agent that executes the request.                                                                                                                                                          |
| `author`                                                                                                                                                                                                | [components.Author](../../models/components/author.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `citations`                                                                                                                                                                                             | [components.ChatMessageCitation](../../models/components/chatmessagecitation.md)[]                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                      | A list of Citations that were used to generate the response.                                                                                                                                            |
| `uploadedFileIds`                                                                                                                                                                                       | *string*[]                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                      | IDs of files uploaded in the message that are referenced to generate the answer.                                                                                                                        |
| `fragments`                                                                                                                                                                                             | [components.ChatMessageFragment](../../models/components/chatmessagefragment.md)[]                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                      | A list of rich data used to represent the response or formulate a request. These are linearly stitched together to support richer data formats beyond simple text.                                      |
| `ts`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | Response timestamp of the message.                                                                                                                                                                      |
| `messageId`                                                                                                                                                                                             | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | A unique server-side generated ID used to identify a message, automatically populated for any USER authored messages.                                                                                   |
| `messageTrackingToken`                                                                                                                                                                                  | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | Opaque tracking token generated server-side.                                                                                                                                                            |
| `messageType`                                                                                                                                                                                           | [components.MessageType](../../models/components/messagetype.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                      | Semantically groups content of a certain type. It can be used for purposes such as differential UI treatment. USER authored messages should be of type CONTENT and do not need `messageType` specified. |
| ~~`hasMoreFragments`~~                                                                                                                                                                                  | *boolean*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Signals there are additional response fragments incoming.              |