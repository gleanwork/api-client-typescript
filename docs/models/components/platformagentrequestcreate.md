# PlatformAgentRequestCreate

New client-scoped request for an editable agent in the server's current UTC month.

## Example Usage

```typescript
import { PlatformAgentRequestCreate } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRequestCreate = {
  agent_id: "<id>",
  client_id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `agentId`                                                 | *string*                                                  | :heavy_check_mark:                                        | Identifier of the agent whose limit the request concerns. |
| `clientId`                                                | *string*                                                  | :heavy_check_mark:                                        | Explicit spend client whose limit the request concerns.   |
| `businessJustification`                                   | *string*                                                  | :heavy_minus_sign:                                        | Optional explanation of why the increase is needed.       |