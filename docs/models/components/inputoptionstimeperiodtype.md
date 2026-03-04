# InputOptionsTimePeriodType

Type of time period for which to run the report/policy. PAST_DAY is deprecated.

## Example Usage

```typescript
import { InputOptionsTimePeriodType } from "@gleanwork/api-client/models/components";

let value: InputOptionsTimePeriodType = "CUSTOM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ALL_TIME" | "PAST_YEAR" | "PAST_DAY" | "CUSTOM" | "LAST_N_DAYS" | Unrecognized<string>
```