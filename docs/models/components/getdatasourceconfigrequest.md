# GetDatasourceConfigRequest

Describes the request body of the /getdatasourceconfig API call

## Example Usage

```typescript
import { GetDatasourceConfigRequest } from "@gleanwork/api-client/models/components";

let value: GetDatasourceConfigRequest = {
  datasource: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `datasource`                                | *string*                                    | :heavy_check_mark:                          | Datasource name for which config is needed. |