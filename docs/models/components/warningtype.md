# WarningType

The type of the warning.

## Example Usage

```typescript
import { WarningType } from "@gleanwork/api-client/models/components";

let value: WarningType = "LONG_QUERY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"LONG_QUERY" | "QUOTED_PUNCTUATION" | "PUNCTUATION_ONLY" | "COPYPASTED_QUOTES" | "INVALID_OPERATOR" | "MAYBE_INVALID_FACET_QUERY" | "TOO_MANY_DATASOURCE_GROUPS" | Unrecognized<string>
```