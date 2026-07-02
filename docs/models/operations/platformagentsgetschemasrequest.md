# PlatformAgentsGetSchemasRequest

## Example Usage

```typescript
import { PlatformAgentsGetSchemasRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsGetSchemasRequest = {
  agentId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `agentId`                                          | *string*                                           | :heavy_check_mark:                                 | ID of the agent whose schemas should be retrieved. |
| `includeTools`                                     | *boolean*                                          | :heavy_minus_sign:                                 | Whether to include tool metadata in the response.  |