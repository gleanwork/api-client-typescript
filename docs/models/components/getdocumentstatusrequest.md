# GetDocumentStatusRequest

Describes the request body for /getdocumentstatus API call

## Example Usage

```typescript
import { GetDocumentStatusRequest } from "@gleanwork/api-client/models/components";

let value: GetDocumentStatusRequest = {
  datasource: "<value>",
  objectType: "<value>",
  docId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `datasource`                                                   | *string*                                                       | :heavy_check_mark:                                             | Datasource to get fetch document status for                    |
| `objectType`                                                   | *string*                                                       | :heavy_check_mark:                                             | Object type of the document to get the status for              |
| `docId`                                                        | *string*                                                       | :heavy_check_mark:                                             | Glean Document ID within the datasource to get the status for. |