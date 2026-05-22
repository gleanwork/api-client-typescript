# DeleteRestApiIndexDocumentDocIdCustomMetadataGroupNameRequest

## Example Usage

```typescript
import { DeleteRestApiIndexDocumentDocIdCustomMetadataGroupNameRequest } from "@gleanwork/api-client/models/operations";

let value: DeleteRestApiIndexDocumentDocIdCustomMetadataGroupNameRequest = {
  docId: "<id>",
  groupName: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `docId`                                                     | *string*                                                    | :heavy_check_mark:                                          | Unique Glean identifier of the document                     |
| `groupName`                                                 | *string*                                                    | :heavy_check_mark:                                          | Name of the metadata group as specified while adding schema |