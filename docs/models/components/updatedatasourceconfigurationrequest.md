# UpdateDatasourceConfigurationRequest

Request to update greenlisted configuration values for a datasource instance. Only keys that are exposed via the public API greenlist may be set.


## Example Usage

```typescript
import { UpdateDatasourceConfigurationRequest } from "@gleanwork/api-client/models/components";

let value: UpdateDatasourceConfigurationRequest = {
  configuration: {
    values: {
      "key": {},
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `configuration`                                                                                          | [components.DatasourceInstanceConfiguration](../../models/components/datasourceinstanceconfiguration.md) | :heavy_check_mark:                                                                                       | Configuration for a datasource instance                                                                  |