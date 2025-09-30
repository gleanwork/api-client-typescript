# ContentInsightsResponse

## Example Usage

```typescript
import { ContentInsightsResponse } from "@gleanwork/api-client/models/components";

let value: ContentInsightsResponse = {
  documentInsights: [
    {
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
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lastLogTimestamp`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC). |
| `documentInsights`                                                                               | [components.DocumentInsight](../../models/components/documentinsight.md)[]                       | :heavy_minus_sign:                                                                               | Insights for documents.                                                                          |
| `departments`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | list of departments applicable for contents tab.                                                 |
| `minDepartmentSizeThreshold`                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | Min threshold in size of departments while populating results, otherwise 0.                      |
| `minVisitorThreshold`                                                                            | *number*                                                                                         | :heavy_minus_sign:                                                                               | Minimum number of visitors to a document required to be included in insights.                    |