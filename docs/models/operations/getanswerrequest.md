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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getAnswerRequest`                                                                                                       | [components.GetAnswerRequest](../../models/components/getanswerrequest.md)                                               | :heavy_check_mark:                                                                                                       | GetAnswer request                                                                                                        |