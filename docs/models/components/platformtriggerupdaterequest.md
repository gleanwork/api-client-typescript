# PlatformTriggerUpdateRequest

Partial update. Only the supplied fields are changed.

## Example Usage

```typescript
import { PlatformTriggerUpdateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerUpdateRequest = {
  inputs: {
    "repository": "{repository}",
  },
  delivery: {
    webhook_url: "https://example.com/webhook",
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