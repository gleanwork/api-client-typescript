# GetToolServerToolsRequest

## Example Usage

```typescript
import { GetToolServerToolsRequest } from "@gleanwork/api-client/models/operations";

let value: GetToolServerToolsRequest = {
  serverId: "<id>",
  toolNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `serverId`                                         | *string*                                           | :heavy_check_mark:                                 | Unique identifier of the tool server.              |
| `toolNames`                                        | *string*[]                                         | :heavy_check_mark:                                 | Tool names to look up on this server. Maximum 100. |