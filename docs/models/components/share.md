# Share

Search endpoint will only fill out numDays ago since that's all we need to display shared badge; docmetadata endpoint will fill out all the fields so that we can display shared badge tooltip

## Example Usage

```typescript
import { Share } from "@gleanwork/api-client/models/components";

let value: Share = {
  numDaysAgo: 314222,
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
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `numDaysAgo`                                                | *number*                                                    | :heavy_check_mark:                                          | The number of days that has passed since the share happened |                                                             |
| `sharer`                                                    | [components.Person](../../models/components/person.md)      | :heavy_minus_sign:                                          | N/A                                                         | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>} |
| `sharingDocument`                                           | [components.Document](../../models/components/document.md)  | :heavy_minus_sign:                                          | N/A                                                         |                                                             |