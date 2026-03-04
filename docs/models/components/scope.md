# Scope

## Example Usage

```typescript
import { Scope } from "@gleanwork/api-client/models/components";

let value: Scope = "APP_CARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APP_CARD" | "AUTOCOMPLETE_EXACT_MATCH" | "AUTOCOMPLETE_FUZZY_MATCH" | "AUTOCOMPLETE_ZERO_QUERY" | "NEW_TAB_PAGE" | Unrecognized<string>
```