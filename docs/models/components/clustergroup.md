# ClusterGroup

## Example Usage

```typescript
import { ClusterGroup } from "@gleanwork/api-client/models/components";

let value: ClusterGroup = {
  clusteredResults: [],
  visibleCountHint: 522964,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `clusteredResults`                                                                       | [components.SearchResult](../../models/components/searchresult.md)[]                     | :heavy_minus_sign:                                                                       | A list of results that should be displayed as associated with this result.               |
| `clusterType`                                                                            | [components.ClusterTypeEnum](../../models/components/clustertypeenum.md)                 | :heavy_minus_sign:                                                                       | The reason for inclusion of clusteredResults.                                            |
| `visibleCountHint`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | The default number of results to display before truncating and showing a "see more" link |