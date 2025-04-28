# MessagesRequest

## Example Usage

```typescript
import { MessagesRequest } from "@gleanwork/api-client/models/operations";

let value: MessagesRequest = {
  messagesRequest: {
    idType: "CHANNEL_NAME",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `messagesRequest`                                                                                                        | [components.MessagesRequest](../../models/components/messagesrequest.md)                                                 | :heavy_check_mark:                                                                                                       | Includes request params such as the id for channel/message and direction.                                                |