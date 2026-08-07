# ToolDefinitionsResponse

## Example Usage

```typescript
import { ToolDefinitionsResponse } from "@gleanwork/api-client/models/components";

let value: ToolDefinitionsResponse = {
  tools: [
    {
      serverId: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `tools`                                                                  | [components.ToolDefinition](../../models/components/tooldefinition.md)[] | :heavy_check_mark:                                                       | Definitions for the requested tools that exist on this server.           |
| `notFound`                                                               | *string*[]                                                               | :heavy_minus_sign:                                                       | Requested names that do not exist on this server.                        |