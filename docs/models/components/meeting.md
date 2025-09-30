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