# DebugDatasourceStatusResponseCounts

## Example Usage

```typescript
import { DebugDatasourceStatusResponseCounts } from "@gleanwork/api-client/models/components";

let value: DebugDatasourceStatusResponseCounts = {
  uploaded: [
    {
      objectType: "Article",
      count: 15,
    },
  ],
  indexed: [
    {
      objectType: "Article",
      count: 15,
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `uploaded`                                                                                                               | [components.DatasourceObjectTypeDocumentCountEntry](../../models/components/datasourceobjecttypedocumentcountentry.md)[] | :heavy_minus_sign:                                                                                                       | A list of object types and corresponding upload counts. Note: This data may be cached and could be up to 3 hours stale.<br/> |
| `indexed`                                                                                                                | [components.DatasourceObjectTypeDocumentCountEntry](../../models/components/datasourceobjecttypedocumentcountentry.md)[] | :heavy_minus_sign:                                                                                                       | The number of documents indexed, grouped by objectType                                                                   |