# PlatformTrigger

## Example Usage

```typescript
import { PlatformTrigger } from "@gleanwork/api-client/models/components";

let value: PlatformTrigger = {
  trigger_id: "trigger_test_123",
  preset_id: "GITHUB_1",
  description: "Reviews I am tagged on, sent to my team's review channel",
  status: "ENABLED",
  inputs: {
    "repository": "acme/payments-api",
  },
  delivery: {
    webhook_url: "https://customer.app/webhook",
  },
  created_at: new Date("2025-03-03T04:48:14.597Z"),
  updated_at: new Date("2024-01-22T03:41:18.414Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `triggerId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the trigger.                                                                                   | trigger_test_123                                                                                     |
| `presetId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the preset this trigger was created from.                                                      | GITHUB_1                                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional caller-supplied note describing this trigger.                                               | Reviews I am tagged on, sent to my team's review channel                                             |
| `status`                                                                                             | [components.PlatformTriggerStatus](../../models/components/platformtriggerstatus.md)                 | :heavy_check_mark:                                                                                   | Current trigger lifecycle state.                                                                     | ENABLED                                                                                              |
| `inputs`                                                                                             | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Values supplied for the preset's inputs.                                                             | {<br/>"repository": "acme/payments-api"<br/>}                                                        |
| `delivery`                                                                                           | [components.PlatformTriggerDeliveryOutput](../../models/components/platformtriggerdeliveryoutput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time the trigger was created.                                                                        |                                                                                                      |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time the trigger was last updated.                                                                   |                                                                                                      |