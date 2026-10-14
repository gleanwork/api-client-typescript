# PlatformListUsersResponse

One page of users.

## Example Usage

```typescript
import { PlatformListUsersResponse } from "@gleanwork/api-client/models/components";

let value: PlatformListUsersResponse = {
  results: [],
  has_more: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `results`                                                               | [components.PlatformUser](../../models/components/platformuser.md)[]    | :heavy_check_mark:                                                      | The users on this page, ordered by display_name and then by user_id.    |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | Whether more users are available after this page.                       |
| `nextCursor`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | Opaque cursor for the next page; null or absent when has_more is false. |
| `requestId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Request identifier for correlating this response.                       |