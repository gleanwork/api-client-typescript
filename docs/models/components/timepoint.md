# TimePoint

## Example Usage

```typescript
import { TimePoint } from "@gleanwork/api-client/models/components";

let value: TimePoint = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `epochSeconds`                                                                        | *number*                                                                              | :heavy_minus_sign:                                                                    | Epoch seconds. Has precedence over daysFromNow.                                       |
| `daysFromNow`                                                                         | *number*                                                                              | :heavy_minus_sign:                                                                    | The number of days from now. Specification relative to current time. Can be negative. |