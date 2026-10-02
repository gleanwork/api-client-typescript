# PlatformUsageRequestsListRequest

## Example Usage

```typescript
import { PlatformUsageRequestsListRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformUsageRequestsListRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `pageSize`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | Maximum page size; defaults to 20 and cannot exceed 100.                               |
| `cursor`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Opaque continuation bound to filters and current authorization.                        |
| `filters`                                                                              | [components.PlatformRequestFilter](../../models/components/platformrequestfilter.md)[] | :heavy_minus_sign:                                                                     | Optional structured filters on request status.                                         |