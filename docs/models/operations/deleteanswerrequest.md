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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteAnswerRequest`                                                                                                    | [components.DeleteAnswerRequest](../../models/components/deleteanswerrequest.md)                                         | :heavy_check_mark:                                                                                                       | DeleteAnswer request                                                                                                     |