# CalendarAttendee

## Example Usage

```typescript
import { CalendarAttendee } from "@gleanwork/api-client/models/components";

let value: CalendarAttendee = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  groupAttendees: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `isOrganizer`                                                                                                                      | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether or not this attendee is an organizer.                                                                                      |                                                                                                                                    |
| `isInGroup`                                                                                                                        | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether or not this attendee is in a group. Needed temporarily at least to support both flat attendees and tree for compatibility. |                                                                                                                                    |
| `person`                                                                                                                           | [components.Person](../../models/components/person.md)                                                                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                 |
| `groupAttendees`                                                                                                                   | [components.CalendarAttendee](../../models/components/calendarattendee.md)[]                                                       | :heavy_minus_sign:                                                                                                                 | If this attendee is a group, represents the list of individual attendees in the group.                                             |                                                                                                                                    |
| `responseStatus`                                                                                                                   | [components.ResponseStatus](../../models/components/responsestatus.md)                                                             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |