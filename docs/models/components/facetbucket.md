# FacetBucket

## Example Usage

```typescript
import { FacetBucket } from "@gleanwork/api-client/models/components";

let value: FacetBucket = {
  count: 1,
  datasource: "jira",
  percentage: 5,
  value: {
    stringValue: "engineering",
    integerValue: 5,
    displayLabel: "engineering",
    iconConfig: {
      color: "#343CED",
      key: "person_icon",
      iconType: "GLYPH",
      name: "user",
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                     | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Estimated number of results in this facet.                                                                  | 1                                                                                                           |
| `datasource`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The datasource the value belongs to. This will be used by the all tab to show types across all datasources. | jira                                                                                                        |
| `percentage`                                                                                                | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Estimated percentage of results in this facet.                                                              | 5                                                                                                           |
| `value`                                                                                                     | [components.FacetValue](../../models/components/facetvalue.md)                                              | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |