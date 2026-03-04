# AgentEnum

Name of the agent.

## Example Usage

```typescript
import { AgentEnum } from "@gleanwork/api-client/models/components";

let value: AgentEnum = "AUTO";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DEFAULT" | "GPT" | "UNIVERSAL" | "FAST" | "ADVANCED" | "AUTO" | Unrecognized<string>
```