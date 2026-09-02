# PlatformChatCreateStreamRequest

## Example Usage

```typescript
import { PlatformChatCreateStreamRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformChatCreateStreamRequest = {
  input: "What is our parental leave policy?",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `input`                                                                                                                                    | *operations.PlatformChatCreateStreamInput*                                                                                                 | :heavy_check_mark:                                                                                                                         | Either a plain string (single user turn) or a chronological array of `USER`/`ASSISTANT` messages. The final array message must be `USER`.<br/> |
| `stream`                                                                                                                                   | *true*                                                                                                                                     | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `store`                                                                                                                                    | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | When true (default), persist the interaction and return a `conversation_id`. When false, run ephemerally with no persistence.<br/>         |
| `conversationId`                                                                                                                           | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Continue an existing stored conversation. Incompatible with message-array `input` and with `store: false`.<br/>                            |