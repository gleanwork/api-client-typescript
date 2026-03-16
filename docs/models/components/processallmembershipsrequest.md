# ProcessAllMembershipsRequest

Describes the request body of the /processallmemberships API call

## Example Usage

```typescript
import { ProcessAllMembershipsRequest } from "@gleanwork/api-client/models/components";

let value: ProcessAllMembershipsRequest = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | If provided, process group memberships only for this custom datasource. Otherwise all uploaded memberships are processed. |