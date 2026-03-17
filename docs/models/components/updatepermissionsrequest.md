# UpdatePermissionsRequest

Describes the request body of the /updatepermissions API call

## Example Usage

```typescript
import { UpdatePermissionsRequest } from "@gleanwork/api-client/models/components";

let value: UpdatePermissionsRequest = {
  datasource: "<value>",
  permissions: {},
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                                                      | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `objectType`                                                                                                                      | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The type of the document (Case, KnowledgeArticle for Salesforce for example). It cannot have spaces or _                          |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The datasource specific id for the document. This field is case insensitive and should not be more than 200 characters in length. |
| `viewURL`                                                                                                                         | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The permalink for viewing the document. **Note: viewURL is a required field if id was not set when uploading the document.**'<br/> |
| `permissions`                                                                                                                     | [components.DocumentPermissionsDefinition](../../models/components/documentpermissionsdefinition.md)                              | :heavy_check_mark:                                                                                                                | describes the access control details of the document                                                                              |