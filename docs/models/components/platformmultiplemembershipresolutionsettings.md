# PlatformMultipleMembershipResolutionSettings

Settings for resolving limits across multiple memberships.

## Example Usage

```typescript
import { PlatformMultipleMembershipResolutionSettings } from "@gleanwork/api-client/models/components";

let value: PlatformMultipleMembershipResolutionSettings = {
  per_member: {
    idp_groups: "LOWEST",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `perMember`                                                                                  | [components.PlatformPerMemberSettings](../../models/components/platformpermembersettings.md) | :heavy_check_mark:                                                                           | Resolution settings for the per-member limit family.                                         |