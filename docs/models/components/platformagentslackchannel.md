# PlatformAgentSlackChannel

Slack deployment of the agent.

## Example Usage

```typescript
import { PlatformAgentSlackChannel } from "@gleanwork/api-client/models/components";

let value: PlatformAgentSlackChannel = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `serviceCredentialId`                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | ID of the service credential for the Slack app.                                                              |
| `channelMappings`                                                                                            | [components.PlatformAgentSlackChannelMapping](../../models/components/platformagentslackchannelmapping.md)[] | :heavy_minus_sign:                                                                                           | Slack channels the agent is mapped to.                                                                       |
| `engagementFilterInstructions`                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Instructions that decide which messages the agent engages with.                                              |
| `allowMentionsOutsideChannelMappings`                                                                        | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether the agent responds to mentions in channels that are not mapped.                                      |