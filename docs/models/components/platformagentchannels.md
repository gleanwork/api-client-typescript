# PlatformAgentChannels

Messaging channels the agent is deployed to. Requires `use_agent_identity`.

## Example Usage

```typescript
import { PlatformAgentChannels } from "@gleanwork/api-client/models/components";

let value: PlatformAgentChannels = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `slack`                                                                                      | [components.PlatformAgentSlackChannel](../../models/components/platformagentslackchannel.md) | :heavy_minus_sign:                                                                           | Slack deployment of the agent.                                                               |