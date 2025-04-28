# PublicconfigRequest

## Example Usage

```typescript
import { PublicconfigRequest } from "@gleanwork/api-client/models/operations";

let value: PublicconfigRequest = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `publicConfigRequest`                                                                                                    | [components.PublicConfigRequest](../../models/components/publicconfigrequest.md)                                         | :heavy_minus_sign:                                                                                                       | Public Config request                                                                                                    |