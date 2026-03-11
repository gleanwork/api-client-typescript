# AnonymousEvent

A generic, light-weight calendar event.

## Example Usage

```typescript
import { AnonymousEvent } from "@gleanwork/api-client/models/components";

let value: AnonymousEvent = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `time`                                                                                   | [components.TimeInterval](../../models/components/timeinterval.md)                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `eventType`                                                                              | [components.AnonymousEventEventType](../../models/components/anonymouseventeventtype.md) | :heavy_minus_sign:                                                                       | The nature of the event, for example "out of office".                                    |