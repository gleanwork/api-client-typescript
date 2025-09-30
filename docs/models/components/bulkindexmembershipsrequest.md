# BulkIndexMembershipsRequest

Describes the request body for the /bulkindexmemberships API call

## Example Usage

```typescript
import { BulkIndexMembershipsRequest } from "@gleanwork/api-client/models/components";

let value: BulkIndexMembershipsRequest = {
  uploadId: "<id>",
  datasource: "<value>",
  memberships: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `uploadId`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique id that must be used for this instance of datasource group memberships upload                             |
| `isFirstPage`                                                                                                    | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | true if this is the first page of the upload. Defaults to false                                                  |
| `isLastPage`                                                                                                     | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | true if this is the last page of the upload. Defaults to false                                                   |
| `forceRestartUpload`                                                                                             | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Flag to discard previous upload attempts and start from scratch. Must be specified with isFirstPage=true         |
| `datasource`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | datasource of the memberships                                                                                    |
| `group`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | group who's memberships are specified                                                                            |
| `memberships`                                                                                                    | [components.DatasourceBulkMembershipDefinition](../../models/components/datasourcebulkmembershipdefinition.md)[] | :heavy_check_mark:                                                                                               | batch of memberships for the group                                                                               |