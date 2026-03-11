# DocumentVisibility

The level of visibility of the document as understood by our system.

## Example Usage

```typescript
import { DocumentVisibility } from "@gleanwork/api-client/models/components";

let value: DocumentVisibility = "DOMAIN_VISIBLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PRIVATE" | "SPECIFIC_PEOPLE_AND_GROUPS" | "DOMAIN_LINK" | "DOMAIN_VISIBLE" | "PUBLIC_LINK" | "PUBLIC_VISIBLE" | Unrecognized<string>
```