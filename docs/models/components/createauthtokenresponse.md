# CreateAuthTokenResponse

## Example Usage

```typescript
import { CreateAuthTokenResponse } from "@gleanwork/api-client/models/components";

let value: CreateAuthTokenResponse = {
  token: "<value>",
  expirationTime: 190792,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `token`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | An authentication token that can be passed to any endpoint via Bearer Authentication |
| `expirationTime`                                                                     | *number*                                                                             | :heavy_check_mark:                                                                   | Unix timestamp for when this token expires (in seconds since epoch UTC).             |