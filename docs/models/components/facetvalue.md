# FacetValue

## Example Usage

```typescript
import { FacetValue } from "@gleanwork/api-client/models/components";

let value: FacetValue = {
  stringValue: "engineering",
  integerValue: 5,
  displayLabel: "engineering",
  iconConfig: {
    color: "#343CED",
    key: "person_icon",
    iconType: "GLYPH",
    name: "user",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `stringValue`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | The value that should be set in the FacetFilter when applying this filter to a search request. | engineering                                                                                    |
| `integerValue`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | 5                                                                                              |
| `displayLabel`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | An optional user-friendly label to display in place of the facet value.                        | engineering                                                                                    |
| `iconConfig`                                                                                   | [components.IconConfig](../../models/components/iconconfig.md)                                 | :heavy_minus_sign:                                                                             | Defines how to render an icon                                                                  | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |