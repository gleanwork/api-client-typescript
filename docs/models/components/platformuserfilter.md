# PlatformUserFilter

A filter on one user field.

## Example Usage

```typescript
import { PlatformUserFilter } from "@gleanwork/api-client/models/components";

let value: PlatformUserFilter = {
  field: "<value>",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `field`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The user field to filter on. The only supported field is is_active. |
| `values`                                                            | *string*[]                                                          | :heavy_check_mark:                                                  | The values to match. A user matches when any value matches.         |
| `operator`                                                          | [components.Operator](../../models/components/operator.md)          | :heavy_minus_sign:                                                  | The only supported operator is EQUALS. Defaults to EQUALS.          |