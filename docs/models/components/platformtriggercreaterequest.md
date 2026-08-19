# PlatformTriggerCreateRequest

## Example Usage

```typescript
import { PlatformTriggerCreateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerCreateRequest = {
  preset_id: "jira_high_priority_bug",
  description: "High-priority Jira bugs in the Engineering project",
  inputs: {
    "project": "ENG",
  },
  delivery: {
    webhook_url: "https://customer.app/webhook",
    auth: {
      type: "BEARER",
      secret: "secret_test_123",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `presetId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the preset to instantiate.                                                         | jira_high_priority_bug                                                                   |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Optional note describing this trigger.                                                   | High-priority Jira bugs in the Engineering project                                       |
| `inputs`                                                                                 | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | Values for the preset's inputs.                                                          | {<br/>"project": "ENG"<br/>}                                                             |
| `delivery`                                                                               | [components.PlatformTriggerDelivery](../../models/components/platformtriggerdelivery.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |