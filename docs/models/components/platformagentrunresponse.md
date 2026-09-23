# PlatformAgentRunResponse

Persisted agent run snapshot with a request ID for support correlation.

## Example Usage

```typescript
import { PlatformAgentRunResponse } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunResponse = {
  run: {
    run_id: "<id>",
    agent_id: "<id>",
    state: "RUNNING",
    created_at: new Date("2025-07-02T11:33:51.838Z"),
    updated_at: new Date("2024-12-21T16:46:41.143Z"),
    pending_interactions: [],
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `run`                                                                                                | [components.PlatformDurableAgentRun](../../models/components/platformdurableagentrun.md)             | :heavy_check_mark:                                                                                   | Agent run state, pending tool approvals, and output available independently of the creation request. |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Platform-generated request ID for support correlation.                                               |