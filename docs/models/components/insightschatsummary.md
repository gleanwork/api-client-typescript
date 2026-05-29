# InsightsChatSummary

## Example Usage

```typescript
import { InsightsChatSummary } from "@gleanwork/api-client/models/components";

let value: InsightsChatSummary = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `monthlyActiveUsers`                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | Number of current Monthly Active Users.                                      |
| `weeklyActiveUsers`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | Number of current Weekly Active Users.                                       |
| `numChats`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | Total number of chats by users over the specified time period.               |
| `numChatUsers`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | Total number of distinct users who used Chat over the specified time period. |