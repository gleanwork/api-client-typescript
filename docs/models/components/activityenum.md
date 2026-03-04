# ActivityEnum

Activity e.g. search, home page visit or all.

## Example Usage

```typescript
import { ActivityEnum } from "@gleanwork/api-client/models/components";

let value: ActivityEnum = "SEARCH";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ALL" | "SEARCH" | Unrecognized<string>
```