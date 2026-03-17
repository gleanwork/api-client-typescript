# PersonTeamRelationship

The team member's relationship to the team. This defaults to MEMBER if not set.

## Example Usage

```typescript
import { PersonTeamRelationship } from "@gleanwork/api-client/models/components";

let value: PersonTeamRelationship = "LEAD";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MEMBER" | "MANAGER" | "LEAD" | "POINT_OF_CONTACT" | "OTHER" | Unrecognized<string>
```