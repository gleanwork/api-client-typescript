# PlatformUsageSettingsUpdateRequest1

## Example Usage

```typescript
import { PlatformUsageSettingsUpdateRequest1 } from "@gleanwork/api-client/models/components";

let value: PlatformUsageSettingsUpdateRequest1 = {
  multiple_membership_resolution: {
    per_member: {
      idp_groups: "LOWEST",
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `multipleMembershipResolution`                                                                                                     | [components.PlatformMultipleMembershipResolutionSettings](../../models/components/platformmultiplemembershipresolutionsettings.md) | :heavy_check_mark:                                                                                                                 | Settings for resolving limits across multiple memberships.                                                                         |
| `limitIncreaseRequests`                                                                                                            | [components.PlatformLimitIncreaseRequestSettings](../../models/components/platformlimitincreaserequestsettings.md)                 | :heavy_minus_sign:                                                                                                                 | Settings that govern usage limit increase requests.<br/>                                                                           |