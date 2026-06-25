# CreateWorkflowRequest

## Example Usage

```typescript
import { CreateWorkflowRequest } from "@gleanwork/api-client/models/components";

let value: CreateWorkflowRequest = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `name`                                            | *string*                                          | :heavy_minus_sign:                                | The name of the workflow.                         |
| `transient`                                       | *boolean*                                         | :heavy_minus_sign:                                | Used to create a transient workflow.              |
| `parentWorkflowId`                                | *string*                                          | :heavy_minus_sign:                                | id of the parent workflow for transient workflows |