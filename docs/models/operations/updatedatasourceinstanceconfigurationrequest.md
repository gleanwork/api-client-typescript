# UpdateDatasourceInstanceConfigurationRequest

## Example Usage

```typescript
import { UpdateDatasourceInstanceConfigurationRequest } from "@gleanwork/api-client/models/operations";

let value: UpdateDatasourceInstanceConfigurationRequest = {
  datasourceId: "o365sharepoint",
  instanceId: "o365sharepoint_abc123",
  updateDatasourceConfigurationRequest: {
    configuration: {
      values: {
        "key": {},
      },
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `datasourceId`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The datasource type identifier (e.g. o365sharepoint)                                                               | o365sharepoint                                                                                                     |
| `instanceId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The datasource instance identifier                                                                                 | o365sharepoint_abc123                                                                                              |
| `updateDatasourceConfigurationRequest`                                                                             | [components.UpdateDatasourceConfigurationRequest](../../models/components/updatedatasourceconfigurationrequest.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |