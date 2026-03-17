# StructuredResultSource

Source context for this result. Possible values depend on the result type.

## Example Usage

```typescript
import { StructuredResultSource } from "@gleanwork/api-client/models/components";

let value: StructuredResultSource = "ENTITY_NLQ";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EXPERT_DETECTION" | "ENTITY_NLQ" | "CALENDAR_EVENT" | "AGENT" | Unrecognized<string>
```