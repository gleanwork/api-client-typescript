# EntityRelationship

Describes a relationship edge between a source and destination entity

## Example Usage

```typescript
import { EntityRelationship } from "@gleanwork/api-client/models/components";

let value: EntityRelationship = {
  name: "<value>",
  email: "Yasmin.Kohler41@gmail.com",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The title or type of relationship. Currently an enum of `CHIEF_OF_STAFF`, `EXECUTIVE_ASSISTANT`                                        |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Email of the person with whom the relationship exists. Per the example above, either `B` or `C`'s email depending on the relationship. |