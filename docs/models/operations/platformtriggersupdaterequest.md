# PlatformTriggersUpdateRequest

## Example Usage

```typescript
import { PlatformTriggersUpdateRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggersUpdateRequest = {
  trigger_id: "<id>",
  platformTriggerUpdateRequest: {
    status: "ENABLED",
    description: "Reviews I am tagged on, sent to my team's review channel",
    inputs: {
      "repository": "acme/payments-api",
    },
    delivery: {
      webhook_url: "https://customer.app/webhook",
      auth: {
        type: "BEARER",
        secret: "secret_test_123",
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `triggerId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the trigger to update.                                                                       |
| `platformTriggerUpdateRequest`                                                                     | [components.PlatformTriggerUpdateRequest](../../models/components/platformtriggerupdaterequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |