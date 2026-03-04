# DocumentSpecUgcType1

The type of the user generated content (UGC datasource).

## Example Usage

```typescript
import { DocumentSpecUgcType1 } from "@gleanwork/api-client/models/components";

let value: DocumentSpecUgcType1 = "ANNOUNCEMENTS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ANNOUNCEMENTS" | "ANSWERS" | "COLLECTIONS" | "SHORTCUTS" | "CHATS" | Unrecognized<string>
```