# PlatformAdminIdpGroupsGetRequest

## Example Usage

```typescript
import { PlatformAdminIdpGroupsGetRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAdminIdpGroupsGetRequest = {
  idp_group_id: "{idp_group_id}",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `idpGroupId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The idp_group_id from a list IdP groups response or a usage API response. IDs are opaque. Do not parse or build them.<br/> | {idp_group_id}                                                                                                         |