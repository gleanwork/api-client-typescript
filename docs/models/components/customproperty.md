# CustomProperty

Describes the custom properties of the object.

## Example Usage

```typescript
import { CustomProperty } from "@gleanwork/api-client/models/components";

let value: CustomProperty = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                             | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `value`                                                                                                                                                            | *any*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                 | Must either be a string or an array of strings. An integer, boolean, etc. is not valid. When OpenAPI Generator supports `oneOf`, we can semantically enforce this. |