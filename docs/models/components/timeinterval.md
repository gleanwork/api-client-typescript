# TimeInterval

## Example Usage

```typescript
import { TimeInterval } from "@gleanwork/api-client/models/components";

let value: TimeInterval = {
  start: "<value>",
  end: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `start`                                                   | *string*                                                  | :heavy_check_mark:                                        | The RFC3339 timestamp formatted start time of this event. |
| `end`                                                     | *string*                                                  | :heavy_check_mark:                                        | The RFC3339 timestamp formatted end time of this event.   |