# PlatformDepartmentsListRequest

## Example Usage

```typescript
import { PlatformDepartmentsListRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformDepartmentsListRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `pageSize`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | Maximum number of departments to return. Defaults to 50. Maximum is 100. |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Opaque pagination cursor from a previous response.                       |