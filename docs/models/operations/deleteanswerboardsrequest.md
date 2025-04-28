# DeleteanswerboardsRequest

## Example Usage

```typescript
import { DeleteanswerboardsRequest } from "@gleanwork/api-client/models/operations";

let value: DeleteanswerboardsRequest = {
  deleteAnswerBoardsRequest: {
    ids: [
      298668,
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteAnswerBoardsRequest`                                                                                              | [components.DeleteAnswerBoardsRequest](../../models/components/deleteanswerboardsrequest.md)                             | :heavy_check_mark:                                                                                                       | DeleteAnswerBoards request                                                                                               |