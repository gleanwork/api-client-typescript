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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `verifyRequest`                                                                                                                                                                                     | [components.VerifyRequest](../../models/components/verifyrequest.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | Details about the verification request.                                                                                                                                                             |