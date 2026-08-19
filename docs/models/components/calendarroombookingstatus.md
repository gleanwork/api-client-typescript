# CalendarRoomBookingStatus

The current booking status of the room resource associated with an event.

## Example Usage

```typescript
import { CalendarRoomBookingStatus } from "@gleanwork/api-client/models/components";

let value: CalendarRoomBookingStatus = "NONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NONE" | "ACCEPTED" | "DECLINED" | "PENDING" | Unrecognized<string>
```