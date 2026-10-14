# PlatformIdpGroup

An IdP group in the Glean directory.

## Example Usage

```typescript
import { PlatformIdpGroup } from "@gleanwork/api-client/models/components";

let value: PlatformIdpGroup = {
  idp_group_id: "<id>",
  display_name: "Walker_Adams47",
  provider: "<value>",
  provider_instance: "<value>",
  is_active: false,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `idpGroupId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Opaque IdP group ID. The same group always gets the same ID. Callers must not parse or build it.<br/>                          |
| `displayName`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Group name from the identity provider. When the provider has no display name, this is the group's name or ID in the provider.<br/> |
| `provider`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The identity provider datasource that the group comes from, for example "okta", "gdrive", or "o365".<br/>                      |
| `providerInstance`                                                                                                             | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The datasource instance that the group comes from, for example "okta". A provider can have more than one instance.<br/>        |
| `isActive`                                                                                                                     | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | Whether Glean loaded the group from the directory. A group that only a usage limit names is inactive.<br/>                     |