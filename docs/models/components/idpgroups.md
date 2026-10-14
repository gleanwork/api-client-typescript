# IdpGroups

How to resolve effective usage limits when a user belongs to multiple IdP groups.


## Example Usage

```typescript
import { IdpGroups } from "@gleanwork/api-client/models/components";

let value: IdpGroups = "LOWEST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"HIGHEST" | "LOWEST" | Unrecognized<string>
```