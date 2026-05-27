# PostApiIndexV1DebugDatasourceDocumentEventsRequest

## Example Usage

```typescript
import { PostApiIndexV1DebugDatasourceDocumentEventsRequest } from "@gleanwork/api-client/models/operations";

let value: PostApiIndexV1DebugDatasourceDocumentEventsRequest = {
  datasource: "<value>",
  debugDocumentLifecycleRequest: {
    objectType: "Article",
    docId: "art123",
    startDate: "2025-05-01",
    maxEvents: 50,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The datasource to which the document belongs                                                         |
| `debugDocumentLifecycleRequest`                                                                      | [components.DebugDocumentLifecycleRequest](../../models/components/debugdocumentlifecyclerequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |