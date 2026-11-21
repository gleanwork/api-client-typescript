# Content

Document events that run a CONTENT_TRIGGER agent.

## Example Usage

```typescript
import { Content } from "@gleanwork/api-client/models/components";

let value: Content = {
  triggers: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `triggers`                                                                                         | [components.PlatformAgentContentTrigger](../../models/components/platformagentcontenttrigger.md)[] | :heavy_check_mark:                                                                                 | Event subscriptions. The agent runs when any entry matches.                                        |