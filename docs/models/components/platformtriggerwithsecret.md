# PlatformTriggerWithSecret

## Example Usage

```typescript
import { PlatformTriggerWithSecret } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerWithSecret = {
  trigger_id: "2f8a9b0c1d2e4f5a6b7c8d9e0f1a2b3c",
  preset_id: "jira_high_priority_bug",
  description: "High-priority Jira bugs in the Engineering project",
  status: "ENABLED",
  inputs: {
    "project": "ENG",
  },
  delivery: {
    webhook_url: "https://customer.app/webhook",
  },
  created_at: new Date("2025-11-01T19:32:18.099Z"),
  updated_at: new Date("2026-09-21T18:05:33.058Z"),
  signing_secret: "whsec_xxx",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `triggerId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the trigger.                                                                                   | 2f8a9b0c1d2e4f5a6b7c8d9e0f1a2b3c                                                                     |
| `presetId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the preset this trigger was created from.                                                      | jira_high_priority_bug                                                                               |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional caller-supplied note describing this trigger.                                               | High-priority Jira bugs in the Engineering project                                                   |
| `status`                                                                                             | [components.PlatformTriggerStatus](../../models/components/platformtriggerstatus.md)                 | :heavy_check_mark:                                                                                   | Current trigger lifecycle state.                                                                     | ENABLED                                                                                              |
| `inputs`                                                                                             | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Values supplied for the preset's inputs.                                                             | {<br/>"project": "ENG"<br/>}                                                                         |
| `delivery`                                                                                           | [components.PlatformTriggerDeliveryOutput](../../models/components/platformtriggerdeliveryoutput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time the trigger was created.                                                                        |                                                                                                      |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time the trigger was last updated.                                                                   |                                                                                                      |
| `signingSecret`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | Secret for verifying webhook signatures. Returned only at creation.                                  | whsec_xxx                                                                                            |