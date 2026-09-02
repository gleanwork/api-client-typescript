# PlatformTriggersUpdateRequest

## Example Usage

```typescript
import { PlatformTriggersUpdateRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggersUpdateRequest = {
  trigger_id: "{trigger_id}",
  platformTriggerUpdateRequest: {
    inputs: {
      "repository": "{repository}",
    },
    delivery: {
      webhook_url: "https://example.com/webhook",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `triggerId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the trigger to update.                                                                                 | {trigger_id}                                                                                                 |
| `platformTriggerUpdateRequest`                                                                               | [components.PlatformTriggerUpdateRequest](../../models/components/platformtriggerupdaterequest.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          | {<br/>"inputs": {<br/>"repository": "{repository}"<br/>},<br/>"delivery": {<br/>"webhook_url": "https://example.com/webhook"<br/>}<br/>} |