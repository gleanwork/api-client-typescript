# PlatformUsageSettingsUpdateRequest2

## Example Usage

```typescript
import { PlatformUsageSettingsUpdateRequest2 } from "@gleanwork/api-client/models/components";

let value: PlatformUsageSettingsUpdateRequest2 = {
  limit_increase_requests: {
    business_justification: "OPTIONAL",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `multipleMembershipResolution`                                                                                                     | [components.PlatformMultipleMembershipResolutionSettings](../../models/components/platformmultiplemembershipresolutionsettings.md) | :heavy_minus_sign:                                                                                                                 | Settings for resolving limits across multiple memberships.                                                                         |
| `limitIncreaseRequests`                                                                                                            | [components.PlatformLimitIncreaseRequestSettings](../../models/components/platformlimitincreaserequestsettings.md)                 | :heavy_check_mark:                                                                                                                 | Settings that govern usage limit increase requests.<br/>                                                                           |