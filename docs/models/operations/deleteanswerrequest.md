# DeleteanswerRequest

## Example Usage

```typescript
import { DeleteanswerRequest } from "@gleanwork/api-client/models/operations";

let value: DeleteanswerRequest = {
  deleteAnswerRequest: {
    id: 3,
    docId: "ANSWERS_answer_3",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `deleteAnswerRequest`                                                                                                                                                                               | [components.DeleteAnswerRequest](../../models/components/deleteanswerrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | DeleteAnswer request                                                                                                                                                                                |