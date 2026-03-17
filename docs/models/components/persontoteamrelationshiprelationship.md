# PersonToTeamRelationshipRelationship

The team member's relationship to the team. This defaults to MEMBER if not set.

## Example Usage

```typescript
import { PersonToTeamRelationshipRelationship } from "@gleanwork/api-client/models/components";

let value: PersonToTeamRelationshipRelationship = "MANAGER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MEMBER" | "MANAGER" | "LEAD" | "POINT_OF_CONTACT" | "OTHER" | Unrecognized<string>
```