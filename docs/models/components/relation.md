# Relation

How this document relates to the including entity.

## Example Usage

```typescript
import { Relation } from "@gleanwork/api-client/models/components";

let value: Relation = "FROM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ATTACHMENT" | "CANONICAL" | "CASE" | "contact" | "CONTACT" | "CONVERSATION_MESSAGES" | "EXPERT" | "FROM" | "HIGHLIGHT" | "opportunity" | "OPPORTUNITY" | "RECENT" | "SOURCE" | "TICKET" | "TRANSCRIPT" | "WITH" | Unrecognized<string>
```