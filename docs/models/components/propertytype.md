# PropertyType

The type of custom property - this governs the search and faceting behavior. Note that MULTIPICKLIST is not yet supported.

## Example Usage

```typescript
import { PropertyType } from "@gleanwork/api-client/models/components";

let value: PropertyType = "INT";
```

## Values

```typescript
"TEXT" | "DATE" | "INT" | "USERID" | "PICKLIST" | "TEXTLIST" | "MULTIPICKLIST"
```