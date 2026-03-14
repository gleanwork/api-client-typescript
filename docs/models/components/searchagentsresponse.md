# SearchAgentsResponse

## Example Usage

```typescript
import { SearchAgentsResponse } from "@gleanwork/api-client/models/components";

let value: SearchAgentsResponse = {
  agents: [
    {
      agentId: "mho4lwzylcozgoc2",
      name: "HR Policy Agent",
      description:
        "This agent answers questions about the current company HR policies.",
      capabilities: {},
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `agents`                                               | [components.Agent](../../models/components/agent.md)[] | :heavy_minus_sign:                                     | N/A                                                    |