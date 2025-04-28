# InsightsRequest

## Example Usage

```typescript
import { InsightsRequest } from "@gleanwork/api-client/models/operations";

let value: InsightsRequest = {
  insightsRequest: {
    categories: [
      "CONTENT",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `insightsRequest`                                                                                                        | [components.InsightsRequest](../../models/components/insightsrequest.md)                                                 | :heavy_check_mark:                                                                                                       | Includes request params for insights dashboard data.                                                                     |