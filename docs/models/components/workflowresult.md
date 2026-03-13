# WorkflowResult

## Example Usage

```typescript
import { WorkflowResult } from "@gleanwork/api-client/models/components";

let value: WorkflowResult = {
  workflow: {
    author: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    lastUpdatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `workflow`                                                 | [components.Workflow](../../models/components/workflow.md) | :heavy_check_mark:                                         | N/A                                                        |