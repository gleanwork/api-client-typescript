# ProcessAllDocumentsRequest

Describes the request body of the /processalldocuments API call

## Example Usage

```typescript
import { ProcessAllDocumentsRequest } from "@gleanwork/api-client/models/components";

let value: ProcessAllDocumentsRequest = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | If provided, process documents only for this custom datasource. Otherwise all uploaded documents are processed. |