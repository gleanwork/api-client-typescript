# PlatformListOAuthClientsResponse

One page of OAuth clients.

## Example Usage

```typescript
import { PlatformListOAuthClientsResponse } from "@gleanwork/api-client/models/components";

let value: PlatformListOAuthClientsResponse = {
  results: [
    {
      client_id: "<id>",
      display_name: "Annalise_Ziemann",
      registration_type: "STATIC",
      grant_types: [
        "DEVICE_CODE",
      ],
      redirect_uris: [
        "<value 1>",
      ],
      is_enabled: false,
    },
  ],
  has_more: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `results`                                                                          | [components.PlatformOAuthClient](../../models/components/platformoauthclient.md)[] | :heavy_check_mark:                                                                 | The clients on this page, ordered by display_name and then by client_id.           |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | Whether more clients are available after this page.                                |
| `nextCursor`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | Opaque cursor for the next page; null or absent when has_more is false.            |
| `requestId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Request identifier for correlating this response.                                  |