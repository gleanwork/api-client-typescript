# PlatformTriggerUpdateRequest

Partial update. Only the supplied fields are changed.

## Example Usage

```typescript
import { PlatformTriggerUpdateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerUpdateRequest = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `status`                                                                                 | [components.PlatformTriggerStatus](../../models/components/platformtriggerstatus.md)     | :heavy_minus_sign:                                                                       | Current trigger lifecycle state.                                                         | ENABLED                                                                                  |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Optional note describing this trigger.                                                   | Reviews I am tagged on, sent to my team's review channel                                 |
| `inputs`                                                                                 | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | Values for the preset's inputs.                                                          | {<br/>"repository": "acme/payments-api"<br/>}                                            |
| `delivery`                                                                               | [components.PlatformTriggerDelivery](../../models/components/platformtriggerdelivery.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |