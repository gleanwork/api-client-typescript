# PlatformTriggersEventsSearchRequest

## Example Usage

```typescript
import { PlatformTriggersEventsSearchRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggersEventsSearchRequest = {
  trigger_id: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `triggerId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the trigger whose events to search.                                                                    |
| `platformTriggerEventSearchRequest`                                                                          | [components.PlatformTriggerEventSearchRequest](../../models/components/platformtriggereventsearchrequest.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |