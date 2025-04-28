# AskRequest

## Example Usage

```typescript
import { AskRequest } from "@gleanwork/api-client/models/operations";

let value: AskRequest = {
  askRequest: {
    searchRequest: {
      trackingToken: "trackingToken",
      pageSize: 10,
      query: "vacation policy",
      requestOptions: {
        facetFilters: [
          {
            fieldName: "type",
            values: [
              {
                value: "article",
                relationType: "EQUALS",
              },
              {
                value: "document",
                relationType: "EQUALS",
              },
            ],
          },
          {
            fieldName: "department",
            values: [
              {
                value: "engineering",
                relationType: "EQUALS",
              },
            ],
          },
        ],
        facetBucketSize: 922646,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `askRequest`                                                                                                             | [components.AskRequest](../../models/components/askrequest.md)                                                           | :heavy_minus_sign:                                                                                                       | Ask request                                                                                                              |