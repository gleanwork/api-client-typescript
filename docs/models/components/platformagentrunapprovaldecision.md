# PlatformAgentRunApprovalDecision

Approve or reject the invocation identified by a pending interaction ID.

## Example Usage

```typescript
import { PlatformAgentRunApprovalDecision } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunApprovalDecision = {
  interaction_id: "<id>",
  decision: "REJECT",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `interactionId`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | The interaction_id returned in the run's pending_interactions.                     |
| `decision`                                                                         | [components.Decision](../../models/components/decision.md)                         | :heavy_check_mark:                                                                 | The decision for this invocation only. Rejection follows normal workflow behavior. |