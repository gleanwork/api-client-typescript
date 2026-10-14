# PlatformUsageSettingsResource

Workspace-wide usage settings.


## Example Usage

```typescript
import { PlatformUsageSettingsResource } from "@gleanwork/api-client/models/components";

let value: PlatformUsageSettingsResource = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `multipleMembershipResolution`                                                                                                     | [components.PlatformMultipleMembershipResolutionSettings](../../models/components/platformmultiplemembershipresolutionsettings.md) | :heavy_minus_sign:                                                                                                                 | Settings for resolving limits across multiple memberships.                                                                         |
| `limitIncreaseRequests`                                                                                                            | [components.PlatformLimitIncreaseRequestSettings](../../models/components/platformlimitincreaserequestsettings.md)                 | :heavy_minus_sign:                                                                                                                 | Settings that govern usage limit increase requests.<br/>                                                                           |
| `updatedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | ISO 8601 timestamp of the last settings update.<br/>                                                                               |