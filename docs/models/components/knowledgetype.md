# KnowledgeType

Indicates the kind of knowledge a tool would access or modify.

## Example Usage

```typescript
import { KnowledgeType } from "@gleanwork/api-client/models/components";

let value: KnowledgeType = "NEUTRAL_KNOWLEDGE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NEUTRAL_KNOWLEDGE" | "COMPANY_KNOWLEDGE" | "WORLD_KNOWLEDGE" | Unrecognized<string>
```