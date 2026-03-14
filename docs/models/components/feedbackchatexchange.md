# FeedbackChatExchange

## Example Usage

```typescript
import { FeedbackChatExchange } from "@gleanwork/api-client/models/components";

let value: FeedbackChatExchange = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `timestamp`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | Unix timestamp in millis for the chat request.                           |
| `agent`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Either DEFAULT (company knowledge) or GPT (world knowledge).             |
| `userQuery`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Initial query entered by the user.                                       |
| `searchQuery`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Search query performed by the agent.                                     |
| `resultDocuments`                                                        | [components.ResultDocument](../../models/components/resultdocument.md)[] | :heavy_minus_sign:                                                       | List of documents read by the agent.                                     |
| `response`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |