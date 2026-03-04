# CollectionPinnableTargets

What targets can a Collection be pinned to.

## Example Usage

```typescript
import { CollectionPinnableTargets } from "@gleanwork/api-client/models/components";

let value: CollectionPinnableTargets = "RESOURCE_CARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RESOURCE_CARD" | "TEAM_PROFILE_PAGE" | Unrecognized<string>
```