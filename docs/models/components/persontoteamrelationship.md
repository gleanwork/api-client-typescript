# PersonToTeamRelationship

Metadata about the relationship of a person to a team.

## Example Usage

```typescript
import { PersonToTeamRelationship } from "@gleanwork/api-client/models/components";

let value: PersonToTeamRelationship = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `person`                                                                                                           | [components.Person](../../models/components/person.md)                                                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                 |
| `relationship`                                                                                                     | [components.PersonToTeamRelationshipRelationship](../../models/components/persontoteamrelationshiprelationship.md) | :heavy_minus_sign:                                                                                                 | The team member's relationship to the team. This defaults to MEMBER if not set.                                    |                                                                                                                    |
| `customRelationshipStr`                                                                                            | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Displayed name for the relationship if relationship is set to `OTHER`.                                             |                                                                                                                    |
| `joinDate`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The team member's start date                                                                                       |                                                                                                                    |