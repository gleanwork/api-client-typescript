# StructuredResultSource

Source context for this result. Possible values depend on the result type.

## Example Usage

```typescript
import { StructuredResultSource } from "@gleanwork/api-client/models/components";

let value: StructuredResultSource = "ENTITY_NLQ";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EXPERT_DETECTION" | "ENTITY_NLQ" | "CALENDAR_EVENT" | "AGENT" | Unrecognized<string>
```