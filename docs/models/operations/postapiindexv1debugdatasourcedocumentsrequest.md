# PostApiIndexV1DebugDatasourceDocumentsRequest

## Example Usage

```typescript
import { PostApiIndexV1DebugDatasourceDocumentsRequest } from "@gleanwork/api-client/models/operations";

let value: PostApiIndexV1DebugDatasourceDocumentsRequest = {
  datasource: "<value>",
  debugDocumentsRequest: {
    debugDocuments: [],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `datasource`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | The datasource to which the document belongs                                         |
| `debugDocumentsRequest`                                                              | [components.DebugDocumentsRequest](../../models/components/debugdocumentsrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |