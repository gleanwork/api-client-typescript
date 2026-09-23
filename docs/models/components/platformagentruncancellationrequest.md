# PlatformAgentRunCancellationRequest

Request cooperative cancellation of a run owned by the caller.

## Example Usage

```typescript
import { PlatformAgentRunCancellationRequest } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunCancellationRequest = {
  run_id: "{run_id}",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `runId`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | ID of the run to cancel. Must belong to the agent identified in the path. |