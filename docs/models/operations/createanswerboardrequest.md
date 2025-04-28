# CreateanswerboardRequest

## Example Usage

```typescript
import { CreateanswerboardRequest } from "@gleanwork/api-client/models/operations";

let value: CreateanswerboardRequest = {
  collectionBaseMutableProperties: {
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
        role: "VERIFIER",
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
| `collectionBaseMutableProperties`                                                                                        | [components.CollectionBaseMutableProperties](../../models/components/collectionbasemutableproperties.md)                 | :heavy_check_mark:                                                                                                       | Answer Board content plus any additional metadata for the request.                                                       |