# CheckDatasourceAuthResponse

## Example Usage

```typescript
import { CheckDatasourceAuthResponse } from "@gleanwork/api-client/models/components";

let value: CheckDatasourceAuthResponse = {
  unauthorizedDatasourceInstances: [
    {
      datasourceInstance: "slack_0",
      displayName: "Slack",
    },
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `unauthorizedDatasourceInstances`                                                                                     | [components.UnauthorizedDatasourceInstance](../../models/components/unauthorizeddatasourceinstance.md)[]              | :heavy_minus_sign:                                                                                                    | Datasource instances that require per-user OAuth authorization. Empty or absent when all datasources are authorized.<br/> |