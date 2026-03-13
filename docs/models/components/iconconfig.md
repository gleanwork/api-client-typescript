# IconConfig

Defines how to render an icon

## Example Usage

```typescript
import { IconConfig } from "@gleanwork/api-client/models/components";

let value: IconConfig = {
  color: "#343CED",
  key: "person_icon",
  iconType: "GLYPH",
  name: "user",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `generatedBackgroundColorKey`                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `backgroundColor`                                                                         | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `color`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `key`                                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `iconType`                                                                                | [components.IconType](../../models/components/icontype.md)                                | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `masked`                                                                                  | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether the icon should be masked based on current theme.                                 |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The name of the icon if applicable, e.g. the glyph name for `IconType.GLYPH` icons.       |
| `url`                                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | The URL to an image to be displayed if applicable, e.g. the URL for `iconType.URL` icons. |