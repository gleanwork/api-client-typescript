# PutRestApiIndexDocumentDocIdCustomMetadataGroupNameRequest

## Example Usage

```typescript
import { PutRestApiIndexDocumentDocIdCustomMetadataGroupNameRequest } from "@gleanwork/api-client/models/operations";

let value: PutRestApiIndexDocumentDocIdCustomMetadataGroupNameRequest = {
  docId: "<id>",
  groupName: "<value>",
  customMetadataPutRequest: {
    customMetadata: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `docId`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique Glean identifier of the document                                                    |
| `groupName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Name of the metadata group as specified while adding schema                                |
| `customMetadataPutRequest`                                                                 | [components.CustomMetadataPutRequest](../../models/components/custommetadataputrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |