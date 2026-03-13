# AnswerLikes

## Example Usage

```typescript
import { AnswerLikes } from "@gleanwork/api-client/models/components";

let value: AnswerLikes = {
  likedBy: [],
  likedByUser: true,
  numLikes: 82246,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `likedBy`                                                        | [components.AnswerLike](../../models/components/answerlike.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `likedByUser`                                                    | *boolean*                                                        | :heavy_check_mark:                                               | Whether the user in context liked the answer.                    |
| `numLikes`                                                       | *number*                                                         | :heavy_check_mark:                                               | The total number of likes for the answer.                        |