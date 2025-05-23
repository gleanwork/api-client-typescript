# ToolsCallRequest

## Example Usage

```typescript
import { ToolsCallRequest } from "@gleanwork/api-client/models/components";

let value: ToolsCallRequest = {
  name: "<value>",
  parameters: {
    "key": {
      name: "<value>",
      value: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Required name of the tool to execute                                                                      |
| `parameters`                                                                                              | Record<string, [components.ToolsCallParameter](../../models/components/toolscallparameter.md)>            | :heavy_check_mark:                                                                                        | The parameters for the tool. Each key is the name of the parameter and the value is the parameter object. |