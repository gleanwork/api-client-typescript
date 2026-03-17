# DatasourceInstanceConfiguration

Configuration for a datasource instance

## Example Usage

```typescript
import { DatasourceInstanceConfiguration } from "@gleanwork/api-client/models/components";

let value: DatasourceInstanceConfiguration = {
  values: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `values`                                                                                       | Record<string, [components.ConfigurationValue](../../models/components/configurationvalue.md)> | :heavy_check_mark:                                                                             | A map from configuration key names to their values                                             |