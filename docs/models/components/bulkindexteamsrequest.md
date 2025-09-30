# BulkIndexTeamsRequest

Describes the request body of the /bulkindexteams API call

## Example Usage

```typescript
import { BulkIndexTeamsRequest } from "@gleanwork/api-client/models/components";

let value: BulkIndexTeamsRequest = {
  uploadId: "<id>",
  teams: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uploadId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Unique id that must be used for this bulk upload instance                                                |
| `isFirstPage`                                                                                            | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | true if this is the first page of the upload. Defaults to false                                          |
| `isLastPage`                                                                                             | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | true if this is the last page of the upload. Defaults to false                                           |
| `forceRestartUpload`                                                                                     | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Flag to discard previous upload attempts and start from scratch. Must be specified with isFirstPage=true |
| `teams`                                                                                                  | [components.TeamInfoDefinition](../../models/components/teaminfodefinition.md)[]                         | :heavy_check_mark:                                                                                       | Batch of team information                                                                                |