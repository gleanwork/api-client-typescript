# TimePoint

## Example Usage

```typescript
import { TimePoint } from "@gleanwork/api-client/models/components";

let value: TimePoint = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `epochSeconds`                                            | *number*                                                  | :heavy_minus_sign:                                        | Epoch seconds. Has precedence over daysFromNow.           |
| `daysFromNow`                                             | *number*                                                  | :heavy_minus_sign:                                        | Number of days in the past, relative to the current date. |