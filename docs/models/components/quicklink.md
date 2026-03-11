# Quicklink

An action for a specific datasource that will show up in autocomplete and app card, e.g. "Create new issue" for jira.

## Example Usage

```typescript
import { Quicklink } from "@gleanwork/api-client/models/components";

let value: Quicklink = {
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
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Full action name. Used in autocomplete.                                           |                                                                                   |
| `shortName`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Shortened name. Used in app cards.                                                |                                                                                   |
| `url`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | The URL of the action.                                                            |                                                                                   |
| `iconConfig`                                                                      | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier of this quicklink                                               |                                                                                   |
| `scopes`                                                                          | [components.Scope](../../models/components/scope.md)[]                            | :heavy_minus_sign:                                                                | The scopes for which this quicklink is applicable                                 |                                                                                   |