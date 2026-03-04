# PersonTeamRelationship

The team member's relationship to the team. This defaults to MEMBER if not set.

## Example Usage

```typescript
import { PersonTeamRelationship } from "@gleanwork/api-client/models/components";

let value: PersonTeamRelationship = "LEAD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MEMBER" | "MANAGER" | "LEAD" | "POINT_OF_CONTACT" | "OTHER" | Unrecognized<string>
```