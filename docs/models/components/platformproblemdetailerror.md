# PlatformProblemDetailError

Field-level validation problem for a single offending field.

## Example Usage

```typescript
import { PlatformProblemDetailError } from "@gleanwork/api-client/models/components";

let value: PlatformProblemDetailError = {
  pointer: "/messages/0/role",
  detail: "Must be one of: USER, GLEAN_AI.",
  code: "invalid_cursor",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `pointer`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | RFC 6901 JSON Pointer to the offending field.                                                | /messages/0/role                                                                             |
| `detail`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | Human-readable explanation for this field.                                                   | Must be one of: USER, GLEAN_AI.                                                              |
| `code`                                                                                       | [components.PlatformProblemDetailCode](../../models/components/platformproblemdetailcode.md) | :heavy_minus_sign:                                                                           | Stable machine-readable error code.                                                          | invalid_cursor                                                                               |