# Badge

Displays a user's accomplishment or milestone

## Example Usage

```typescript
import { Badge } from "@gleanwork/api-client/models/components";

let value: Badge = {
  key: "deployment_name_new_hire",
  displayName: "New hire",
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
| `key`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | An auto generated unique identifier.                                              |                                                                                   |
| `displayName`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | The badge name displayed to users                                                 |                                                                                   |
| `iconConfig`                                                                      | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |
| `pinned`                                                                          | *boolean*                                                                         | :heavy_minus_sign:                                                                | The badge should be shown on the PersonAttribution                                |                                                                                   |