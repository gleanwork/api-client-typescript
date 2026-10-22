# PlatformGetIdpGroupResponse

One IdP group.

## Example Usage

```typescript
import { PlatformGetIdpGroupResponse } from "@gleanwork/api-client/models/components";

let value: PlatformGetIdpGroupResponse = {
  idp_group: {
    idp_group_id: "<id>",
    display_name: "Whitney58",
    provider: "<value>",
    provider_instance: "<value>",
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `idpGroup`                                                                 | [components.PlatformIdpGroup](../../models/components/platformidpgroup.md) | :heavy_check_mark:                                                         | An IdP group in the Glean directory.                                       |
| `requestId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Request identifier for correlating this response.                          |