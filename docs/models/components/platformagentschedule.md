# PlatformAgentSchedule

Wall-clock schedule for INPUT_FORM and CHAT_MESSAGE agents.

## Example Usage

```typescript
import { PlatformAgentSchedule } from "@gleanwork/api-client/models/components";

let value: PlatformAgentSchedule = {
  frequency: "<value>",
  timezone: "America/Montevideo",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `frequency`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Five-field Unix cron expression, for example `0 9 * * 1-5`.                                   |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | IANA time zone name, for example `America/Los_Angeles`.                                       |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO 8601 timestamp with an explicit offset before which the schedule stays dormant.<br/>      |