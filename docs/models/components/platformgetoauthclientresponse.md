# PlatformGetOAuthClientResponse

One OAuth client.

## Example Usage

```typescript
import { PlatformGetOAuthClientResponse } from "@gleanwork/api-client/models/components";

let value: PlatformGetOAuthClientResponse = {
  client: {
    client_id: "<id>",
    display_name: "Isom.Wolff",
    registration_type: "STATIC",
    grant_types: [
      "AUTHORIZATION_CODE",
    ],
    redirect_uris: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    is_active: true,
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `client`                                                                         | [components.PlatformOAuthClient](../../models/components/platformoauthclient.md) | :heavy_check_mark:                                                               | An OAuth client that an admin created for the workspace.                         |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Request identifier for correlating this response.                                |