# GetpolicyRequest

## Example Usage

```typescript
import { GetpolicyRequest } from "@gleanwork/api-client/models/operations";

let value: GetpolicyRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The id of the policy to fetch.                                                                                                                             |
| `version`                                                                                                                                                  | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The version of the policy to fetch. Each time a policy is updated, the older version is still stored. If this is left empty, the latest policy is fetched. |