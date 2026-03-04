# DocumentVisibility

The level of visibility of the document as understood by our system.

## Example Usage

```typescript
import { DocumentVisibility } from "@gleanwork/api-client/models/components";

let value: DocumentVisibility = "DOMAIN_VISIBLE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PRIVATE" | "SPECIFIC_PEOPLE_AND_GROUPS" | "DOMAIN_LINK" | "DOMAIN_VISIBLE" | "PUBLIC_LINK" | "PUBLIC_VISIBLE" | Unrecognized<string>
```