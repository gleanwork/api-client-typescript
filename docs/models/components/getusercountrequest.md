# GetUserCountRequest

Describes the request body of the /getusercount API call

## Example Usage

```typescript
import { GetUserCountRequest } from "@gleanwork/api-client/models/components";

let value: GetUserCountRequest = {
  datasource: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `datasource`                                    | *string*                                        | :heavy_check_mark:                              | Datasource name for which user count is needed. |