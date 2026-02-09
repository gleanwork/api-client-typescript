# ActionSummary

Represents a minimal summary of an action.

## Example Usage

```typescript
import { ActionSummary } from "@gleanwork/api-client/models/components";

let value: ActionSummary = {
  toolId: "<id>",
  displayName: "Sean71",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `toolId`                             | *string*                             | :heavy_check_mark:                   | The unique identifier of the action. |
| `displayName`                        | *string*                             | :heavy_check_mark:                   | The display name of the action.      |