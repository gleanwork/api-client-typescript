# CreatecollectionRequest

## Example Usage

```typescript
import { CreatecollectionRequest } from "@gleanwork/api-client/models/operations";

let value: CreatecollectionRequest = {
  createCollectionRequest: {
    name: "<value>",
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "EDITOR",
      },
    ],
    removedRoles: [
      {
        role: "OWNER",
      },
    ],
    audienceFilters: [
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `createCollectionRequest`                                                                                                | [components.CreateCollectionRequest](../../models/components/createcollectionrequest.md)                                 | :heavy_check_mark:                                                                                                       | Collection content plus any additional metadata for the request.                                                         |