# SearchAgentsRequest

## Example Usage

```typescript
import { SearchAgentsRequest } from "@gleanwork/api-client/models/components";

let value: SearchAgentsRequest = {
  name: "HR Policy Agent",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Filters on the name of the agent. The keyword search is case-insensitive. If search string is ommited or empty, acts as no filter. | HR Policy Agent                                                                                                                    |