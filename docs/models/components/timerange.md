# TimeRange

## Example Usage

```typescript
import { TimeRange } from "@gleanwork/api-client/models/components";

let value: TimeRange = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | start time of the time range, applicable for the CUSTOM type.                                 |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | end time of the time range, applicable for the CUSTOM type.                                   |
| `lastNDaysValue`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of days to look back from the current time, applicable for the LAST_N_DAYS type.   |