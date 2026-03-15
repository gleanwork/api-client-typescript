# EntityType

The type of entity.

## Example Usage

```typescript
import { EntityType } from "@gleanwork/api-client/models/components";

let value: EntityType = "PERSON";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERSON" | "PROJECT" | "CUSTOMER" | Unrecognized<string>
```