# UpdateanswerlikesRequest

## Example Usage

```typescript
import { UpdateanswerlikesRequest } from "@gleanwork/api-client/models/operations";

let value: UpdateanswerlikesRequest = {
  updateAnswerLikesRequest: {
    answerId: 3,
    answerDocId: "ANSWERS_answer_3",
    action: "LIKE",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `updateAnswerLikesRequest`                                                                                               | [components.UpdateAnswerLikesRequest](../../models/components/updateanswerlikesrequest.md)                               | :heavy_check_mark:                                                                                                       | UpdateAnswerLikes request                                                                                                |