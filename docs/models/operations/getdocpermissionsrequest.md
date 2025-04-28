# GetdocpermissionsRequest

## Example Usage

```typescript
import { GetdocpermissionsRequest } from "@gleanwork/api-client/models/operations";

let value: GetdocpermissionsRequest = {
  getDocPermissionsRequest: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getDocPermissionsRequest`                                                                                               | [components.GetDocPermissionsRequest](../../models/components/getdocpermissionsrequest.md)                               | :heavy_check_mark:                                                                                                       | Document permissions request                                                                                             |