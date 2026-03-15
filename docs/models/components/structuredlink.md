# StructuredLink

The display configuration for a link.

## Example Usage

```typescript
import { StructuredLink } from "@gleanwork/api-client/models/components";

let value: StructuredLink = {
  iconConfig: {
    color: "#343CED",
    key: "person_icon",
    iconType: "GLYPH",
    name: "user",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The display name for the link                                                     |                                                                                   |
| `url`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | The URL for the link.                                                             |                                                                                   |
| `iconConfig`                                                                      | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |