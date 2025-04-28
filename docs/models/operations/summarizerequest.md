# SummarizeRequest

## Example Usage

```typescript
import { SummarizeRequest } from "@gleanwork/api-client/models/operations";

let value: SummarizeRequest = {
  summarizeRequest: {
    documentSpecs: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `summarizeRequest`                                                                                                       | [components.SummarizeRequest](../../models/components/summarizerequest.md)                                               | :heavy_check_mark:                                                                                                       | Includes request params such as the query and specs of the documents to summarize.                                       |