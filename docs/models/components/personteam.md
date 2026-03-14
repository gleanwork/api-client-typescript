# PersonTeam

Use `id` if you index teams via Glean, and use `name` and `externalLink` if you want to use your own team pages

## Example Usage

```typescript
import { PersonTeam } from "@gleanwork/api-client/models/components";

let value: PersonTeam = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Team name                                                                                     |
| `externalLink`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Link to a team page on the internet or your company's intranet                                |
| `relationship`                                                                                | [components.PersonTeamRelationship](../../models/components/personteamrelationship.md)        | :heavy_minus_sign:                                                                            | The team member's relationship to the team. This defaults to MEMBER if not set.               |
| `joinDate`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The team member's start date                                                                  |