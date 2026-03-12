# ProcessingHistoryEvent

Processing history event for a datasource

## Example Usage

```typescript
import { ProcessingHistoryEvent } from "@gleanwork/api-client/models/components";

let value: ProcessingHistoryEvent = {
  startTime: "2021-08-06T17:58:01.000Z",
  endTime: "2021-08-06T18:58:01.000Z",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `startTime`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The start time of the processing in ISO 8601 format                          | 2021-08-06T17:58:01.000Z                                                     |
| `endTime`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | The end time of the processing in ISO 8601 format, 'NA' if still in progress | 2021-08-06T18:58:01.000Z                                                     |