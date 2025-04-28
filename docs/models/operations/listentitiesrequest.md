# ListentitiesRequest

## Example Usage

```typescript
import { ListentitiesRequest } from "@gleanwork/api-client/models/operations";

let value: ListentitiesRequest = {
  listEntitiesRequest: {
    filter: [
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
    pageSize: 100,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `listEntitiesRequest`                                                                                                    | [components.ListEntitiesRequest](../../models/components/listentitiesrequest.md)                                         | :heavy_check_mark:                                                                                                       | List people request                                                                                                      |