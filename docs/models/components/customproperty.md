# CustomProperty

Describes the custom properties of the object.

## Example Usage

```typescript
import { CustomProperty } from "@gleanwork/api-client/models/components";

let value: CustomProperty = {};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                      | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `value`                                                                                                                                                                     | *any*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                          | Must be a string, a number (for INT properties), or an array of strings. A boolean is not valid. When OpenAPI Generator supports `oneOf`, we can semantically enforce this. |