# PlatformChatJsonSchemaFormat

Constrains the assistant response to a caller-supplied JSON Schema.

## Example Usage

```typescript
import { PlatformChatJsonSchemaFormat } from "@gleanwork/api-client/models/components";

let value: PlatformChatJsonSchemaFormat = {
  type: "JSON_SCHEMA",
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | *"JSON_SCHEMA"*                                                                                                      | :heavy_check_mark:                                                                                                   | Discriminator. Must be JSON_SCHEMA.                                                                                  |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | A stable identifier for the schema.                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An optional human-readable description of the schema.                                                                |
| `schema`                                                                                                             | Record<string, *any*>                                                                                                | :heavy_check_mark:                                                                                                   | A JSON Schema object describing the desired output shape.                                                            |
| `strict`                                                                                                             | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | When true, the provider validates the response against the schema. Unsupported by some providers; defaults to true.<br/> |