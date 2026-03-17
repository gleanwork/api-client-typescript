# KnowledgeType

Indicates the kind of knowledge a tool would access or modify.

## Example Usage

```typescript
import { KnowledgeType } from "@gleanwork/api-client/models/components";

let value: KnowledgeType = "NEUTRAL_KNOWLEDGE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NEUTRAL_KNOWLEDGE" | "COMPANY_KNOWLEDGE" | "WORLD_KNOWLEDGE" | Unrecognized<string>
```