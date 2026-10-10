# PlatformListDepartmentsResponse

One page of departments.

## Example Usage

```typescript
import { PlatformListDepartmentsResponse } from "@gleanwork/api-client/models/components";

let value: PlatformListDepartmentsResponse = {
  results: [
    {
      department_id: "<id>",
      display_name: "Rosalind_Koelpin47",
      is_active: true,
    },
  ],
  has_more: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `results`                                                                         | [components.PlatformDepartment](../../models/components/platformdepartment.md)[]  | :heavy_check_mark:                                                                | The departments on this page, ordered by display_name and then by department_id.<br/> |
| `hasMore`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether more departments are available after this page.                           |
| `nextCursor`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | Opaque cursor for the next page; null or absent when has_more is false.           |
| `requestId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Request identifier for correlating this response.                                 |