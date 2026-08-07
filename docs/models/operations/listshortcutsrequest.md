# ListshortcutsRequest

## Example Usage

```typescript
import { ListshortcutsRequest } from "@gleanwork/api-client/models/operations";

let value: ListshortcutsRequest = {
  listShortcutsPaginatedRequest: {
    pageSize: 10,
    cursor: "",
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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `listShortcutsPaginatedRequest`                                                                                                                                                                     | [components.ListShortcutsPaginatedRequest](../../models/components/listshortcutspaginatedrequest.md)                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | Filters, sorters, paging params required for pagination                                                                                                                                             |