# PostApiIndexV1DebugDatasourceDocumentRequest

## Example Usage

```typescript
import { PostApiIndexV1DebugDatasourceDocumentRequest } from "@gleanwork/api-client/models/operations";

let value: PostApiIndexV1DebugDatasourceDocumentRequest = {
  datasource: "<value>",
  debugDocumentRequest: {
    objectType: "Article",
    docId: "art123",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `datasource`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | The datasource to which the document belongs                                       |
| `debugDocumentRequest`                                                             | [components.DebugDocumentRequest](../../models/components/debugdocumentrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |