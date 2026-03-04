# PersonMetadataType

## Example Usage

```typescript
import { PersonMetadataType } from "@gleanwork/api-client/models/components";

let value: PersonMetadataType = "FULL_TIME";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FULL_TIME" | "CONTRACTOR" | "NON_EMPLOYEE" | "FORMER_EMPLOYEE" | Unrecognized<string>
```