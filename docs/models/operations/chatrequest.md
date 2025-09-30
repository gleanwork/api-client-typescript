# ChatRequest

## Example Usage

```typescript
import { ChatRequest } from "@gleanwork/api-client/models/operations";

let value: ChatRequest = {
  chatRequest: {
    messages: [],
    timeoutMillis: 30000,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `chatRequest`                                                                                              | [components.ChatRequest](../../models/components/chatrequest.md)                                           | :heavy_check_mark:                                                                                         | Includes chat history for Glean AI to respond to.                                                          |