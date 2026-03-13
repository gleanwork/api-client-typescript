# WriteActionParameter

## Example Usage

```typescript
import { WriteActionParameter } from "@gleanwork/api-client/models/components";

let value: WriteActionParameter = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.WriteActionParameterType](../../models/components/writeactionparametertype.md) | :heavy_minus_sign:                                                                         | The type of the value (e.g., integer, string, boolean, etc.)                               |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Human readable display name for the key.                                                   |
| `value`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | The value of the field.                                                                    |
| `isRequired`                                                                               | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Is the parameter a required field.                                                         |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Description of the parameter.                                                              |
| `possibleValues`                                                                           | [components.PossibleValue](../../models/components/possiblevalue.md)[]                     | :heavy_minus_sign:                                                                         | Possible values that the parameter can take.                                               |