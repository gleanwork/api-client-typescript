# PlatformAgentsGetSchemasRequest

## Example Usage

```typescript
import { PlatformAgentsGetSchemasRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsGetSchemasRequest = {
  agent_id: "{agent_id}",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `agentId`                                          | *string*                                           | :heavy_check_mark:                                 | ID of the agent whose schemas should be retrieved. | {agent_id}                                         |
| `includeTools`                                     | *boolean*                                          | :heavy_minus_sign:                                 | Whether to include tool metadata in the response.  |                                                    |