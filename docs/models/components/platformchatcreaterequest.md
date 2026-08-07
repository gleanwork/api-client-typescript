# PlatformChatCreateRequest

## Example Usage

```typescript
import { PlatformChatCreateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformChatCreateRequest = {
  input: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `input`                                                                                                                                    | *components.Input*                                                                                                                         | :heavy_check_mark:                                                                                                                         | Either a plain string (single user turn) or a chronological array of `user`/`assistant` messages. The final array message must be `user`.<br/> |
| `stream`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | When true, respond with `text/event-stream`. When false or omitted, respond with `application/json`.<br/>                                  |
| `store`                                                                                                                                    | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | When true (default), persist the interaction and return a `conversation_id`. When false, run ephemerally with no persistence.<br/>         |
| `conversationId`                                                                                                                           | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Continue an existing stored conversation. Incompatible with message-array `input` and with `store: false`.<br/>                            |