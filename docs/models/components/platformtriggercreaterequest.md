# PlatformTriggerCreateRequest

## Example Usage

```typescript
import { PlatformTriggerCreateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerCreateRequest = {
  preset_id: "GITHUB_1",
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
| `presetId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the preset to instantiate.                                                         | GITHUB_1                                                                                 |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Optional note describing this trigger.                                                   | Reviews I am tagged on, sent to my team's review channel                                 |
| `inputs`                                                                                 | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | Values for the preset's inputs.                                                          | {<br/>"repository": "acme/payments-api"<br/>}                                            |
| `delivery`                                                                               | [components.PlatformTriggerDelivery](../../models/components/platformtriggerdelivery.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |