# CalendarEventEventType

The nature of the event, for example "out of office".

## Example Usage

```typescript
import { CalendarEventEventType } from "@gleanwork/api-client/models/components";

let value: CalendarEventEventType = "DEFAULT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DEFAULT" | "OUT_OF_OFFICE" | Unrecognized<string>
```