# RelationType

## Example Usage

```typescript
import { RelationType } from "@gleanwork/api-client/models/components";

let value: RelationType = "EQUALS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EQUALS" | "ID_EQUALS" | "LT" | "GT" | "NOT_EQUALS" | Unrecognized<string>
```