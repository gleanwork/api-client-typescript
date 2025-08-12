# ResponseMetadata

Metadata about the response (e.g., latency, token count).

## Example Usage

```typescript
import { ResponseMetadata } from "@gleanwork/api-client/models/components";

let value: ResponseMetadata = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `latencyMs`                                          | *number*                                             | :heavy_minus_sign:                                   | Time taken to generate the response in milliseconds. |
| `tokenCount`                                         | *number*                                             | :heavy_minus_sign:                                   | Number of tokens in the response.                    |
| `modelUsed`                                          | *string*                                             | :heavy_minus_sign:                                   | The specific model version used.                     |