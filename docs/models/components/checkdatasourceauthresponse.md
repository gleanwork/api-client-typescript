# CheckDatasourceAuthResponse

## Example Usage

```typescript
import { CheckDatasourceAuthResponse } from "@gleanwork/api-client/models/components";

let value: CheckDatasourceAuthResponse = {
  unauthorizedDatasourceInstances: [],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `unauthorizedDatasourceInstances`                                                                           | [components.UnauthorizedDatasourceInstance](../../models/components/unauthorizeddatasourceinstance.md)[]    | :heavy_check_mark:                                                                                          | Datasource instances that require per-user OAuth authorization. Empty when all datasources are authorized.<br/> |