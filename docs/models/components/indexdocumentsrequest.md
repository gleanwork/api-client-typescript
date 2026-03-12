# IndexDocumentsRequest

Describes the request body of the /indexdocuments API call

## Example Usage

```typescript
import { IndexDocumentsRequest } from "@gleanwork/api-client/models/components";

let value: IndexDocumentsRequest = {
  datasource: "<value>",
  documents: [
    {
      datasource: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uploadId`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | Optional id parameter to identify and track a batch of documents.                |
| `datasource`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Datasource of the documents                                                      |
| `documents`                                                                      | [components.DocumentDefinition](../../models/components/documentdefinition.md)[] | :heavy_check_mark:                                                               | Batch of documents being added/updated                                           |