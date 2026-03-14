# VerifyRequest

## Example Usage

```typescript
import { VerifyRequest } from "@gleanwork/api-client/models/components";

let value: VerifyRequest = {
  documentId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `documentId`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | The document which is verified.                                                  |
| `action`                                                                         | [components.VerifyRequestAction](../../models/components/verifyrequestaction.md) | :heavy_minus_sign:                                                               | The verification action requested.                                               |