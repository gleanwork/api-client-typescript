# TimeRangeFilterTimePeriodType

The type of time period for which to filter findings.

## Example Usage

```typescript
import { TimeRangeFilterTimePeriodType } from "@gleanwork/api-client/models/components";

let value: TimeRangeFilterTimePeriodType = "PAST_YEAR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PAST_DAY" | "PAST_WEEK" | "PAST_MONTH" | "PAST_YEAR" | "CUSTOM" | Unrecognized<string>
```