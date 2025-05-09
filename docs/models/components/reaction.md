# Reaction

## Example Usage

```typescript
import { Reaction } from "@gleanwork/api-client/models/components";

let value: Reaction = {
  reactors: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `count`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | The count of the reaction type on the document.                     |
| `reactors`                                                          | [components.Person](../../models/components/person.md)[]            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `reactedByViewer`                                                   | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether the user in context reacted with this type to the document. |