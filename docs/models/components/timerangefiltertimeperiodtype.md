# TimeRangeFilterTimePeriodType

The type of time period for which to filter findings.

## Example Usage

```typescript
import { TimeRangeFilterTimePeriodType } from "@gleanwork/api-client/models/components";

let value: TimeRangeFilterTimePeriodType = "PAST_YEAR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PAST_DAY" | "PAST_WEEK" | "PAST_MONTH" | "PAST_YEAR" | "CUSTOM" | Unrecognized<string>
```