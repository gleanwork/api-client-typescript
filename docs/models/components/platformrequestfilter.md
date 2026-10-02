# PlatformRequestFilter

A status filter using the backend's status-IN matching.

## Example Usage

```typescript
import { PlatformRequestFilter } from "@gleanwork/api-client/models/components";

let value: PlatformRequestFilter = {
  field: "<value>",
  values: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `field`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | Allowed field is status, spelled exactly in lowercase.                                 |
| `values`                                                                               | [components.PlatformRequestStatus](../../models/components/platformrequeststatus.md)[] | :heavy_check_mark:                                                                     | Status values to match with OR.                                                        |
| `operator`                                                                             | [components.Operator](../../models/components/operator.md)                             | :heavy_minus_sign:                                                                     | Only EQUALS is supported; defaults to EQUALS when omitted.                             |