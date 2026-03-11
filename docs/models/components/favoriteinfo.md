# FavoriteInfo

## Example Usage

```typescript
import { FavoriteInfo } from "@gleanwork/api-client/models/components";

let value: FavoriteInfo = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ugcType`                                                | [components.UgcType](../../models/components/ugctype.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | Opaque id of the UGC.                                    |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Number of users this object has been favorited by.       |
| `favoritedByUser`                                        | *boolean*                                                | :heavy_minus_sign:                                       | If the requesting user has favorited this object.        |