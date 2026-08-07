# TextRange

A subsection of a given string to which some special formatting should be applied.

## Example Usage

```typescript
import { TextRange } from "@gleanwork/api-client/models/components";

let value: TextRange = {
  startIndex: 677557,
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `startIndex`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | The inclusive start index of the range.                                                         |
| `endIndex`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | The exclusive end index of the range.                                                           |
| `type`                                                                                          | [components.TextRangeType](../../models/components/textrangetype.md)                            | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `url`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | The URL associated with the range, if applicable. For example, the linked URL for a LINK range. |
| `document`                                                                                      | [components.Document](../../models/components/document.md)                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |