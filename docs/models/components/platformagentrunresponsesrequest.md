# PlatformAgentRunResponsesRequest

Invocation-scoped decisions for the complete pending approval batch.

## Example Usage

```typescript
import { PlatformAgentRunResponsesRequest } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunResponsesRequest = {
  run_id: "{run_id}",
  responses: [
    {
      interaction_id: "{interaction_id}",
      decision: "APPROVE",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `runId`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the run whose pending approvals are being answered. Must belong to the agent identified in the path.   |
| `responses`                                                                                                  | [components.PlatformAgentRunApprovalDecision](../../models/components/platformagentrunapprovaldecision.md)[] | :heavy_check_mark:                                                                                           | One decision per pending interaction. Interaction IDs must be unique.                                        |