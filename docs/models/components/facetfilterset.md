# FacetFilterSet

Within a single FacetFilterSet, the filters are treated as AND. For example, owner Sumeet and type Spreadsheet shows documents that are by Sumeet AND are Spreadsheets.

## Example Usage

```typescript
import { FacetFilterSet } from "@gleanwork/api-client/models/components";

let value: FacetFilterSet = {
  filters: [
    {
      fieldName: "type",
      values: [
        {
          value: "Spreadsheet",
          relationType: "EQUALS",
        },
        {
          value: "Presentation",
          relationType: "EQUALS",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `filters`                                                          | [components.FacetFilter](../../models/components/facetfilter.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |