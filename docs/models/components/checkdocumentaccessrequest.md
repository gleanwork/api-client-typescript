# CheckDocumentAccessRequest

Describes the request body of the /checkdocumentaccess API call

## Example Usage

```typescript
import { CheckDocumentAccessRequest } from "@gleanwork/api-client/models/components";

let value: CheckDocumentAccessRequest = {
  datasource: "<value>",
  objectType: "<value>",
  docId: "<id>",
  userEmail: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `datasource`                                 | *string*                                     | :heavy_check_mark:                           | Datasource of document to check access for.  |
| `objectType`                                 | *string*                                     | :heavy_check_mark:                           | Object type of document to check access for. |
| `docId`                                      | *string*                                     | :heavy_check_mark:                           | Glean Document ID to check access for.       |
| `userEmail`                                  | *string*                                     | :heavy_check_mark:                           | Email of user to check access for.           |