# Tool

## Example Usage

```typescript
import { Tool } from "@gleanwork/api-client/models/components";

let value: Tool = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                    | [components.ToolType](../../models/components/tooltype.md)                                                | :heavy_minus_sign:                                                                                        | Type of tool (READ, WRITE)                                                                                |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Unique identifier for the tool                                                                            |
| `displayName`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Human-readable name                                                                                       |
| `description`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | LLM friendly description of the tool                                                                      |
| `parameters`                                                                                              | Record<string, [components.ToolParameter](../../models/components/toolparameter.md)>                      | :heavy_minus_sign:                                                                                        | The parameters for the tool. Each key is the name of the parameter and the value is the parameter object. |