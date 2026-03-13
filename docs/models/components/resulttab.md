# ResultTab

## Example Usage

```typescript
import { ResultTab } from "@gleanwork/api-client/models/components";

let value: ResultTab = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The unique ID of the tab. Can be passed in a search request to get results for that tab. |
| `count`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | The number of results in this tab for the current query.                                 |
| `datasource`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The datasource associated with the tab, if any.                                          |
| `datasourceInstance`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The datasource instance associated with the tab, if any.                                 |