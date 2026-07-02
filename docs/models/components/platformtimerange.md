# PlatformTimeRange

Filter results to those last updated within this range.

## Example Usage

```typescript
import { PlatformTimeRange } from "@gleanwork/api-client/models/components";

let value: PlatformTimeRange = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Inclusive lower bound in ISO 8601 format.                                                     |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Exclusive upper bound in ISO 8601 format.                                                     |