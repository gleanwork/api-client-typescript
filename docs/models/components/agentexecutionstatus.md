# AgentExecutionStatus

The status of the run. One of 'error', 'success'.

## Example Usage

```typescript
import { AgentExecutionStatus } from "@gleanwork/api-client/models/components";

let value: AgentExecutionStatus = "success";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "success" | Unrecognized<string>
```