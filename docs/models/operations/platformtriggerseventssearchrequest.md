# PlatformTriggersEventsSearchRequest

## Example Usage

```typescript
import { PlatformTriggersEventsSearchRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggersEventsSearchRequest = {
  trigger_id: "{trigger_id}",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `triggerId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the trigger whose events to search.                                                                    | {trigger_id}                                                                                                 |
| `platformTriggerEventSearchRequest`                                                                          | [components.PlatformTriggerEventSearchRequest](../../models/components/platformtriggereventsearchrequest.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | {<br/>"page_size": 10<br/>}                                                                                  |