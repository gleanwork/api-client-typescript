# GetpinRequest

## Example Usage

```typescript
import { GetpinRequest } from "@gleanwork/api-client/models/operations";

let value: GetpinRequest = {
  getPinRequest: {},
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `getPinRequest`                                                                                                                                                                                     | [components.GetPinRequest](../../models/components/getpinrequest.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | Get pin request                                                                                                                                                                                     |