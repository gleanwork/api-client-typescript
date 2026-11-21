# PlatformAgentSlackChannelMapping

A Slack channel the agent is mapped to.

## Example Usage

```typescript
import { PlatformAgentSlackChannelMapping } from "@gleanwork/api-client/models/components";

let value: PlatformAgentSlackChannelMapping = {
  channel_id: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `channelId`                                                      | *string*                                                         | :heavy_check_mark:                                               | ID of the Slack channel.                                         |
| `autoEngage`                                                     | *boolean*                                                        | :heavy_minus_sign:                                               | Whether the agent engages with messages without being mentioned. |