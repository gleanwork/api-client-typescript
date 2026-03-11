# ListanswersRequest

## Example Usage

```typescript
import { ListanswersRequest } from "@gleanwork/api-client/models/operations";

let value: ListanswersRequest = {
  listAnswersRequest: {},
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `listAnswersRequest`                                                                                                                                                                                | [components.ListAnswersRequest](../../models/components/listanswersrequest.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                  | ListAnswers request                                                                                                                                                                                 |