# GetanswerRequest

## Example Usage

```typescript
import { GetanswerRequest } from "@gleanwork/api-client/models/operations";

let value: GetanswerRequest = {
  getAnswerRequest: {
    id: 3,
    docId: "ANSWERS_answer_3",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `getAnswerRequest`                                                                                                                                                                                  | [components.GetAnswerRequest](../../models/components/getanswerrequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | GetAnswer request                                                                                                                                                                                   |