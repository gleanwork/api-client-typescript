# ListshortcutsRequest

## Example Usage

```typescript
import { ListshortcutsRequest } from "@gleanwork/api-client/models/operations";

let value: ListshortcutsRequest = {
  listShortcutsPaginatedRequest: {
    pageSize: 10,
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `listShortcutsPaginatedRequest`                                                                                          | [components.ListShortcutsPaginatedRequest](../../models/components/listshortcutspaginatedrequest.md)                     | :heavy_check_mark:                                                                                                       | Filters, sorters, paging params required for pagination                                                                  |