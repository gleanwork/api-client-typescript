# GetChatPagination

Pagination cursors and page flags for a getchat message page.

## Example Usage

```typescript
import { GetChatPagination } from "@gleanwork/api-client/models/components";

let value: GetChatPagination = {
  hasNextPage: true,
  hasPreviousPage: false,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `startCursor`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Cursor of the first (oldest) returned message. Omitted for an empty page. |
| `endCursor`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Cursor of the last (newest) returned message. Omitted for an empty page.  |
| `hasNextPage`                                                             | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether visible messages exist after endCursor in chronological order.    |
| `hasPreviousPage`                                                         | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether visible messages exist before startCursor in chronological order. |