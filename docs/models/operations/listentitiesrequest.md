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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `listEntitiesRequest`                                                                                                                                                                               | [components.ListEntitiesRequest](../../models/components/listentitiesrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | List people request                                                                                                                                                                                 |