# PlatformPerMemberSettings

Resolution settings for the per-member limit family.

## Example Usage

```typescript
import { PlatformPerMemberSettings } from "@gleanwork/api-client/models/components";

let value: PlatformPerMemberSettings = {
  idp_groups: "LOWEST",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `idpGroups`                                                                        | [components.IdpGroups](../../models/components/idpgroups.md)                       | :heavy_check_mark:                                                                 | How to resolve effective usage limits when a user belongs to multiple IdP groups.<br/> |