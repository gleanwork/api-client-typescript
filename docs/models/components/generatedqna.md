# GeneratedQna

## Example Usage

```typescript
import { GeneratedQna } from "@gleanwork/api-client/models/components";

let value: GeneratedQna = {
  ranges: [
    {
      startIndex: 635422,
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
            status: "Done",
            customData: {
              "someCustomField": {
                stringValue: "someCustomValue",
              },
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
            status: "Done",
            customData: {
              "someCustomField": {
                stringValue: "someCustomValue",
              },
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
          status: "Done",
          customData: {
            "someCustomField": {
              stringValue: "someCustomValue",
            },
          },
        },
      },
    },
  ],
  cursor: "",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `question`                                                                                                           | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Search query rephrased into a question.                                                                              |                                                                                                                      |
| `answer`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Answer generated for the given query or the generated question.                                                      |                                                                                                                      |
| `followUpPrompts`                                                                                                    | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | List of all follow-up prompts generated for the given query or the generated question.                               |                                                                                                                      |
| `followupActions`                                                                                                    | [components.FollowupAction](../../models/components/followupaction.md)[]                                             | :heavy_minus_sign:                                                                                                   | List of follow-up actions generated for the given query or the generated question.                                   |                                                                                                                      |
| `ranges`                                                                                                             | [components.TextRange](../../models/components/textrange.md)[]                                                       | :heavy_minus_sign:                                                                                                   | Answer subsections to mark with special formatting (citations, bolding etc)                                          |                                                                                                                      |
| `status`                                                                                                             | [components.GeneratedQnaStatus](../../models/components/generatedqnastatus.md)                                       | :heavy_minus_sign:                                                                                                   | Status of backend generating the answer                                                                              |                                                                                                                      |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An opaque cursor representing the search request                                                                     |                                                                                                                      |
| `trackingToken`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An opaque token that represents this particular result in this particular query. To be used for /feedback reporting. |                                                                                                                      |