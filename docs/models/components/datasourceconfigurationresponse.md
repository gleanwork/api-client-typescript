# DatasourceConfigurationResponse

The greenlisted configuration values for a datasource instance. Only keys that are exposed via the public API greenlist are included.


## Example Usage

```typescript
import { DatasourceConfigurationResponse } from "@gleanwork/api-client/models/components";

let value: DatasourceConfigurationResponse = {
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