# ReferenceRange

Each text range from the response can correspond to an array of snippets from the citation source.

## Example Usage

```typescript
import { ReferenceRange } from "@gleanwork/api-client/models/components";

let value: ReferenceRange = {
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
  snippets: [
    {
      mimeType: "mimeType",
      snippet: "snippet",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `textRange`                                                                        | [components.TextRange](../../models/components/textrange.md)                       | :heavy_minus_sign:                                                                 | A subsection of a given string to which some special formatting should be applied. |
| `snippets`                                                                         | [components.SearchResultSnippet](../../models/components/searchresultsnippet.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |