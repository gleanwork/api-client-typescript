# Meeting

## Example Usage

```typescript
import { Meeting } from "@gleanwork/api-client/models/components";

let value: Meeting = {
  attendees: {
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
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `attendees`                                                                                   | [components.CalendarAttendees](../../models/components/calendarattendees.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isCancelled`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the meeting has been cancelled                                                        |
| `location`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The location/venue of the meeting                                                             |
| `responseStatus`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The current user's response status (accepted, declined, tentativelyAccepted, none)            |
| `conferenceUri`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The meeting join link (Teams, Zoom, etc.)                                                     |
| `conferenceProvider`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The conference provider (e.g., "Microsoft Teams", "Zoom")                                     |