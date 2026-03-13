# DeleteDocumentRequest

Describes the request body of the /deletedocument API call

## Example Usage

```typescript
import { DeleteDocumentRequest } from "@gleanwork/api-client/models/components";

let value: DeleteDocumentRequest = {
  datasource: "<value>",
  objectType: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | datasource of the document                                                                                      |
| `objectType`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | object type of the document                                                                                     |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The id of the document                                                                                          |