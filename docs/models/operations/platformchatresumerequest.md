# PlatformChatResumeRequest

## Example Usage

```typescript
import { PlatformChatResumeRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformChatResumeRequest = {
  chat_id: "{chat_id}",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The ID of the chat to resume.                                                                                                                    | {chat_id}                                                                                                                                        |
| `lastSeenSequenceId`                                                                                                                             | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The `sequence_id` of the last event already received. The stream continues with the next event. Defaults to 0, which starts from the beginning.<br/> | 0                                                                                                                                                |