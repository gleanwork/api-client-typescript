# PlatformAdminAgentFilter

A filter on one agent field.

## Example Usage

```typescript
import { PlatformAdminAgentFilter } from "@gleanwork/api-client/models/components";

let value: PlatformAdminAgentFilter = {
  field: "<value>",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The agent field to filter on. The only supported field is is_active.                                       |
| `values`                                                                                                   | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | The values to match. An agent matches when any value matches.                                              |
| `operator`                                                                                                 | [components.PlatformAdminAgentFilterOperator](../../models/components/platformadminagentfilteroperator.md) | :heavy_minus_sign:                                                                                         | The only supported operator is EQUALS. Defaults to EQUALS.                                                 |