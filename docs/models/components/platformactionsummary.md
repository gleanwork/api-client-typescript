# PlatformActionSummary

## Example Usage

```typescript
import { PlatformActionSummary } from "@gleanwork/api-client/models/components";

let value: PlatformActionSummary = {
  tool_id: "<id>",
  display_name: "Dudley97",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `toolId`                                           | *string*                                           | :heavy_check_mark:                                 | Unique identifier of the action.                   |
| `displayName`                                      | *string*                                           | :heavy_check_mark:                                 | Display name of the action.                        |
| `type`                                             | *string*                                           | :heavy_minus_sign:                                 | Tool type.                                         |
| `authType`                                         | *string*                                           | :heavy_minus_sign:                                 | Authentication type required by the action.        |
| `writeActionType`                                  | *string*                                           | :heavy_minus_sign:                                 | Write-action execution type.                       |
| `isSetupFinished`                                  | *boolean*                                          | :heavy_minus_sign:                                 | Whether this action has been fully configured.     |
| `dataSource`                                       | *string*                                           | :heavy_minus_sign:                                 | Kind of knowledge the action accesses or modifies. |