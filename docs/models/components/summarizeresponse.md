# SummarizeResponse

## Example Usage

```typescript
import { SummarizeResponse } from "@gleanwork/api-client/models/components";

let value: SummarizeResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                    | [components.ErrorT](../../models/components/errort.md)                                                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `summary`                                                                                                  | [components.Summary](../../models/components/summary.md)                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `trackingToken`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | An opaque token that represents this summary in this particular query. To be used for /feedback reporting. |