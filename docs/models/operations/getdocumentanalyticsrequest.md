# GetdocumentanalyticsRequest

## Example Usage

```typescript
import { GetdocumentanalyticsRequest } from "@gleanwork/api-client/models/operations";

let value: GetdocumentanalyticsRequest = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getDocumentAnalyticsRequest`                                                                                            | [components.GetDocumentAnalyticsRequest](../../models/components/getdocumentanalyticsrequest.md)                         | :heavy_minus_sign:                                                                                                       | Information about analytics requested.                                                                                   |