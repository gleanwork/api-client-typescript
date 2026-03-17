# ChatMessageCitation

Information about the source for a ChatMessage.

## Example Usage

```typescript
import { ChatMessageCitation } from "@gleanwork/api-client/models/components";

let value: ChatMessageCitation = {
  sourceDocument: {
    containerDocument: {
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
        startIndex: 27290,
        document: {
          containerDocument: {
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
      snippets: [
        {
          mimeType: "mimeType",
          snippet: "snippet",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `trackingToken`                                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | An opaque token that represents this particular result in this particular ChatMessage. To be used for /feedback reporting. |                                                                                                                            |
| `sourceDocument`                                                                                                           | [components.Document](../../models/components/document.md)                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `sourceFile`                                                                                                               | [components.ChatFile](../../models/components/chatfile.md)                                                                 | :heavy_minus_sign:                                                                                                         | Structure for file uploaded by a user for Chat.                                                                            |                                                                                                                            |
| `sourcePerson`                                                                                                             | [components.Person](../../models/components/person.md)                                                                     | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                         |
| `referenceRanges`                                                                                                          | [components.ReferenceRange](../../models/components/referencerange.md)[]                                                   | :heavy_minus_sign:                                                                                                         | Each reference range and its corresponding snippets                                                                        |                                                                                                                            |