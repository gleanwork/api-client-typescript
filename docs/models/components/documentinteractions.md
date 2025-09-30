# DocumentInteractions

## Example Usage

```typescript
import { DocumentInteractions } from "@gleanwork/api-client/models/components";

let value: DocumentInteractions = {
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
      numDaysAgo: 867308,
      sharer: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      sharingDocument: {
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
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numComments`                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | The count of comments (thread replies in the case of slack).                                                                                                                                                                     |
| `numReactions`                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | The count of reactions on the document.                                                                                                                                                                                          |
| ~~`reactions`~~                                                                                                                                                                                                                  | *string*[]                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                               | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>To be deprecated in favor of reacts. A (potentially non-exhaustive) list of reactions for the document. |
| `reacts`                                                                                                                                                                                                                         | [components.Reaction](../../models/components/reaction.md)[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `shares`                                                                                                                                                                                                                         | [components.Share](../../models/components/share.md)[]                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                               | Describes instances of someone posting a link to this document in one of our indexed datasources.                                                                                                                                |
| `visitorCount`                                                                                                                                                                                                                   | [components.CountInfo](../../models/components/countinfo.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |