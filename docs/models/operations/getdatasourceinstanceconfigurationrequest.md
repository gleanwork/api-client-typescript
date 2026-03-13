# GetDatasourceInstanceConfigurationRequest

## Example Usage

```typescript
import { GetDatasourceInstanceConfigurationRequest } from "@gleanwork/api-client/models/operations";

let value: GetDatasourceInstanceConfigurationRequest = {
  datasourceId: "o365sharepoint",
  instanceId: "o365sharepoint_abc123",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `datasourceId`                                       | *string*                                             | :heavy_check_mark:                                   | The datasource type identifier (e.g. o365sharepoint) | o365sharepoint                                       |
| `instanceId`                                         | *string*                                             | :heavy_check_mark:                                   | The datasource instance identifier                   | o365sharepoint_abc123                                |