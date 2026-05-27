# PutRestApiIndexCustomMetadataSchemaGroupNameRequest

## Example Usage

```typescript
import { PutRestApiIndexCustomMetadataSchemaGroupNameRequest } from "@gleanwork/api-client/models/operations";

let value: PutRestApiIndexCustomMetadataSchemaGroupNameRequest = {
  groupName: "<value>",
  customMetadataSchema: {
    metadataKeys: [],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `groupName`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Name of the metadata group schema                                                  |
| `customMetadataSchema`                                                             | [components.CustomMetadataSchema](../../models/components/custommetadataschema.md) | :heavy_check_mark:                                                                 | N/A                                                                                |