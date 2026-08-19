# PlatformTriggerCreateResponse

## Example Usage

```typescript
import { PlatformTriggerCreateResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerCreateResponse = {
  trigger: {
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
    created_at: new Date("2025-07-05T18:41:44.030Z"),
    updated_at: new Date("2025-10-20T21:58:05.748Z"),
    signing_secret: "whsec_xxx",
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `trigger`                                                                                    | [components.PlatformTriggerWithSecret](../../models/components/platformtriggerwithsecret.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Platform-generated request ID for support correlation.                                       |