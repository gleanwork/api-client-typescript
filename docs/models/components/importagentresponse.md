# ImportAgentResponse

## Example Usage

```typescript
import { ImportAgentResponse } from "@gleanwork/api-client/models/components";

let value: ImportAgentResponse = {
  workflowResult: {
    workflow: {
      author: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      lastDraftSavedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      lastUpdatedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `workflowResult`                                                             | [components.WorkflowResult](../../models/components/workflowresult.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `status`                                                                     | [components.ImportAgentStatus](../../models/components/importagentstatus.md) | :heavy_minus_sign:                                                           | Outcome of the import for the target agent.                                  |