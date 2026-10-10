# PlatformDepartmentFilter

A filter on one department field.

## Example Usage

```typescript
import { PlatformDepartmentFilter } from "@gleanwork/api-client/models/components";

let value: PlatformDepartmentFilter = {
  field: "<value>",
  values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The department field to filter on. The only supported field is is_active.                                  |
| `values`                                                                                                   | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | The values to match. A department matches when any value matches.                                          |
| `operator`                                                                                                 | [components.PlatformDepartmentFilterOperator](../../models/components/platformdepartmentfilteroperator.md) | :heavy_minus_sign:                                                                                         | The only supported operator is EQUALS. Defaults to EQUALS.                                                 |