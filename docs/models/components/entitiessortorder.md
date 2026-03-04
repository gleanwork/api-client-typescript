# EntitiesSortOrder

Different ways of sorting entities

## Example Usage

```typescript
import { EntitiesSortOrder } from "@gleanwork/api-client/models/components";

let value: EntitiesSortOrder = "LAST_NAME";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ENTITY_NAME" | "FIRST_NAME" | "LAST_NAME" | "ORG_SIZE_COUNT" | "START_DATE" | "TEAM_SIZE" | "RELEVANCE" | Unrecognized<string>
```