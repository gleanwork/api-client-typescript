# PlatformAgentRunState

State of the persisted workflow execution. REQUIRES_INPUT is nonterminal.

## Example Usage

```typescript
import { PlatformAgentRunState } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunState = "CANCELLING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUED" | "RUNNING" | "REQUIRES_INPUT" | "SUCCEEDED" | "FAILED" | "CANCELLING" | "CANCELLED" | "EXPIRED" | Unrecognized<string>
```