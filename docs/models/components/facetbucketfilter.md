# FacetBucketFilter

## Example Usage

```typescript
import { FacetBucketFilter } from "@gleanwork/api-client/models/components";

let value: FacetBucketFilter = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `facet`                                                       | *string*                                                      | :heavy_minus_sign:                                            | The facet whose buckets should be filtered.                   |
| `prefix`                                                      | *string*                                                      | :heavy_minus_sign:                                            | The per-term prefix that facet buckets should be filtered on. |