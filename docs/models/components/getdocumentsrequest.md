# GetDocumentsRequest

## Example Usage

```typescript
import { GetDocumentsRequest } from "@gleanwork/api-client/models/components";

let value: GetDocumentsRequest = {
  documentSpecs: [
    {
      ugcType: "SHORTCUTS",
      contentId: 846500,
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `documentSpecs`                                                                                            | *components.DocumentSpecUnion*[]                                                                           | :heavy_check_mark:                                                                                         | The specification for the documents to be retrieved.                                                       |
| `includeFields`                                                                                            | [components.GetDocumentsRequestIncludeField](../../models/components/getdocumentsrequestincludefield.md)[] | :heavy_minus_sign:                                                                                         | List of Document fields to return (that aren't returned by default)                                        |