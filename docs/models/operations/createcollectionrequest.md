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
        role: "VERIFIER",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "EDITOR",
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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `createCollectionRequest`                                                                                                                                                                           | [components.CreateCollectionRequest](../../models/components/createcollectionrequest.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | Collection content plus any additional metadata for the request.                                                                                                                                    |