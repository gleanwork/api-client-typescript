# UnpinRequest

## Example Usage

```typescript
import { UnpinRequest } from "@gleanwork/api-client/models/operations";

let value: UnpinRequest = {
  unpin: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `unpin`                                                                                                                  | [components.Unpin](../../models/components/unpin.md)                                                                     | :heavy_check_mark:                                                                                                       | Details about the pin being unpinned.                                                                                    |