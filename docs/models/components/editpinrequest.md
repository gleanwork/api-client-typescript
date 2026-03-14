# EditPinRequest

## Example Usage

```typescript
import { EditPinRequest } from "@gleanwork/api-client/models/components";

let value: EditPinRequest = {
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
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The opaque id of the pin to be edited.                                                                                       |