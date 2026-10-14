# PlatformListIdpGroupsResponse

One page of IdP groups.

## Example Usage

```typescript
import { PlatformListIdpGroupsResponse } from "@gleanwork/api-client/models/components";

let value: PlatformListIdpGroupsResponse = {
  results: [
    {
      idp_group_id: "<id>",
      display_name: "Adele.Sawayn",
      provider: "<value>",
      provider_instance: "<value>",
      is_active: false,
    },
  ],
  has_more: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `results`                                                                       | [components.PlatformIdpGroup](../../models/components/platformidpgroup.md)[]    | :heavy_check_mark:                                                              | The IdP groups on this page, ordered by display_name and then by idp_group_id.<br/> |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether more IdP groups are available after this page.                          |
| `nextCursor`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | Opaque cursor for the next page; null or absent when has_more is false.         |
| `requestId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | Request identifier for correlating this response.                               |