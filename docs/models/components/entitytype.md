# EntityType

The type of entity.

## Example Usage

```typescript
import { EntityType } from "@gleanwork/api-client/models/components";

let value: EntityType = "PERSON";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PERSON" | "PROJECT" | "CUSTOMER" | Unrecognized<string>
```