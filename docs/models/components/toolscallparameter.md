# ToolsCallParameter

## Example Usage

```typescript
import { ToolsCallParameter } from "@gleanwork/api-client/models/components";

let value: ToolsCallParameter = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The name of the parameter                                                                      |
| `value`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The value of the parameter (for primitive types)                                               |
| `items`                                                                                        | [components.ToolsCallParameter](../../models/components/toolscallparameter.md)[]               | :heavy_minus_sign:                                                                             | The value of the parameter (for array types)                                                   |
| `properties`                                                                                   | Record<string, [components.ToolsCallParameter](../../models/components/toolscallparameter.md)> | :heavy_minus_sign:                                                                             | The value of the parameter (for object types)                                                  |