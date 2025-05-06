# CalendarEvent

A generic, light-weight calendar event.

## Example Usage

```typescript
import { CalendarEvent } from "@gleanwork/api-client/models/components";

let value: CalendarEvent = {
  id: "<id>",
  url: "https://curly-pilot.biz/",
  attendees: {
    people: [],
  },
  generatedAttachments: [
    {
      documents: [
        {
          containerDocument: {
            parentDocument: {
              metadata: {
                datasource: "datasource",
                objectType: "Feature Request",
                container: "container",
                parentId: "JIRA_EN-1337",
                mimeType: "mimeType",
                documentId: "documentId",
                createTime: new Date("2000-01-23T04:56:07.000Z"),
                updateTime: new Date("2000-01-23T04:56:07.000Z"),
                author: {
                  name: "name",
                  obfuscatedId: "<id>",
                },
                components: [
                  "Backend",
                  "Networking",
                ],
                status: "[\"Done\"]",
                customData: {
                  "someCustomField": {},
                },
              },
            },
          },
        },
      ],
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      customer: {
        id: "<id>",
        company: {
          name: "<value>",
          location: "New York City",
          industry: "Finances",
          about:
            "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
        },
        poc: [],
        mergedCustomers: [],
        notes: "CIO is interested in trying out the product.",
      },
      externalLinks: [
        {
          iconConfig: {
            color: "#343CED",
            key: "person_icon",
            iconType: "GLYPH",
            name: "user",
          },
        },
      ],
      content: [
        {
          displayHeader: "Action Items",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `time`                                                                                 | [components.TimeInterval](../../models/components/timeinterval.md)                     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `eventType`                                                                            | [components.CalendarEventEventType](../../models/components/calendareventeventtype.md) | :heavy_minus_sign:                                                                     | The nature of the event, for example "out of office".                                  |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The calendar event id                                                                  |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | A permalink for this calendar event                                                    |
| `attendees`                                                                            | [components.CalendarAttendees](../../models/components/calendarattendees.md)           | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `location`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | The location that this event is taking place at.                                       |
| `conferenceData`                                                                       | [components.ConferenceData](../../models/components/conferencedata.md)                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The HTML description of the event.                                                     |
| `datasource`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The app or other repository type from which the event was extracted                    |
| `hasTranscript`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | The event has a transcript associated with it enabling features like summarization     |
| `transcriptUrl`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | A link to the transcript of the event                                                  |
| `classifications`                                                                      | [components.EventClassification](../../models/components/eventclassification.md)[]     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `generatedAttachments`                                                                 | [components.GeneratedAttachment](../../models/components/generatedattachment.md)[]     | :heavy_minus_sign:                                                                     | N/A                                                                                    |