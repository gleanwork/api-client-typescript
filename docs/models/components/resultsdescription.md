# ResultsDescription

## Example Usage

```typescript
import { ResultsDescription } from "@gleanwork/api-client/models/components";

let value: ResultsDescription = {
  iconConfig: {
    color: "#343CED",
    key: "person_icon",
    iconType: "GLYPH",
    name: "user",
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                                   | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Textual description of the results. Can be shown at the top of SERP, e.g. 'People who write about this topic' for experts in people tab. |                                                                                                                                          |
| `iconConfig`                                                                                                                             | [components.IconConfig](../../models/components/iconconfig.md)                                                                           | :heavy_minus_sign:                                                                                                                       | Defines how to render an icon                                                                                                            | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>}                                    |