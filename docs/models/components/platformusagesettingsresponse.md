# PlatformUsageSettingsResponse

Response envelope for usage settings operations.


## Example Usage

```typescript
import { PlatformUsageSettingsResponse } from "@gleanwork/api-client/models/components";

let value: PlatformUsageSettingsResponse = {
  usage_settings: {},
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `usageSettings`                                                                                      | [components.PlatformUsageSettingsResource](../../models/components/platformusagesettingsresource.md) | :heavy_check_mark:                                                                                   | Workspace-wide usage settings.<br/>                                                                  |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Opaque request identifier.<br/>                                                                      |