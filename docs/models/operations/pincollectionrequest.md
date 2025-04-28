# PincollectionRequest

## Example Usage

```typescript
import { PincollectionRequest } from "@gleanwork/api-client/models/operations";

let value: PincollectionRequest = {
  pinCollectionRequest: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `pinCollectionRequest`                                                                                                   | [components.PinCollectionRequest](../../models/components/pincollectionrequest.md)                                       | :heavy_check_mark:                                                                                                       | PinCollection request                                                                                                    |