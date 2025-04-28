# VerifyRequest

## Example Usage

```typescript
import { VerifyRequest } from "@gleanwork/api-client/models/operations";

let value: VerifyRequest = {
  verifyRequest: {
    documentId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `verifyRequest`                                                                                                          | [components.VerifyRequest](../../models/components/verifyrequest.md)                                                     | :heavy_check_mark:                                                                                                       | Details about the verification request.                                                                                  |