# PinRequest

## Example Usage

```typescript
import { PinRequest } from "@gleanwork/api-client/models/components";

let value: PinRequest = {
  audienceFilters: [
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `queries`                                                                                                                    | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | The query strings for which the pinned result will show.                                                                     |
| `audienceFilters`                                                                                                            | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                           | :heavy_minus_sign:                                                                                                           | Filters which restrict who should see the pinned document. Values are taken from the corresponding filters in people search. |
| `documentId`                                                                                                                 | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The document to be pinned.                                                                                                   |