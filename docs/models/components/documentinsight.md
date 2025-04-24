# DocumentInsight

## Example Usage

```typescript
import { DocumentInsight } from "@gleanwork/api-client/models/components";

let value: DocumentInsight = {
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
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `document`                                                   | [components.Document](../../models/components/document.md)   | :heavy_check_mark:                                           | N/A                                                          |
| `viewCount`                                                  | [components.CountInfo](../../models/components/countinfo.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `visitorCount`                                               | [components.CountInfo](../../models/components/countinfo.md) | :heavy_minus_sign:                                           | N/A                                                          |