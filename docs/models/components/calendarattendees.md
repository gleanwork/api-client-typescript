# CalendarAttendees

## Example Usage

```typescript
import { CalendarAttendees } from "@gleanwork/api-client/models/components";

let value: CalendarAttendees = {
  people: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `people`                                                                                       | [components.CalendarAttendee](../../models/components/calendarattendee.md)[]                   | :heavy_minus_sign:                                                                             | Full details of some of the attendees of this event                                            |
| `isLimit`                                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the total count of the people returned is at the retrieval limit.                      |
| `total`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | Total number of attendees in this event.                                                       |
| `numAccepted`                                                                                  | *number*                                                                                       | :heavy_minus_sign:                                                                             | Total number of attendees who have accepted this event.                                        |
| `numDeclined`                                                                                  | *number*                                                                                       | :heavy_minus_sign:                                                                             | Total number of attendees who have declined this event.                                        |
| `numNoResponse`                                                                                | *number*                                                                                       | :heavy_minus_sign:                                                                             | Total number of attendees who have not responded to this event.                                |
| `numTentative`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | Total number of attendees who have responded tentatively (i.e. responded maybe) to this event. |