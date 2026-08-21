# PlatformTriggerGetResponse

## Example Usage

```typescript
import { PlatformTriggerGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerGetResponse = {
  trigger: {
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
    created_at: new Date("2024-05-30T01:29:53.487Z"),
    updated_at: new Date("2026-05-07T15:51:22.117Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `trigger`                                                                | [components.PlatformTrigger](../../models/components/platformtrigger.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Platform-generated request ID for support correlation.                   |