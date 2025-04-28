# GetdocumentsbyfacetsRequest

## Example Usage

```typescript
import { GetdocumentsbyfacetsRequest } from "@gleanwork/api-client/models/operations";

let value: GetdocumentsbyfacetsRequest = {
  getDocumentsByFacetsRequest: {
    filterSets: [
      {
        filters: [
          {
            fieldName: "type",
            values: [
              {
                value: "Spreadsheet",
                relationType: "EQUALS",
              },
              {
                value: "Presentation",
                relationType: "EQUALS",
              },
            ],
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getDocumentsByFacetsRequest`                                                                                            | [components.GetDocumentsByFacetsRequest](../../models/components/getdocumentsbyfacetsrequest.md)                         | :heavy_minus_sign:                                                                                                       | Information about facet conditions for documents to be retrieved.                                                        |