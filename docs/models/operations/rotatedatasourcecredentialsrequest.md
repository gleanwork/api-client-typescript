# RotateDatasourceCredentialsRequest

## Example Usage

```typescript
import { RotateDatasourceCredentialsRequest } from "@gleanwork/api-client/models/operations";

let value: RotateDatasourceCredentialsRequest = {
  datasourceId: "o365sharepoint",
  instanceId: "o365sharepoint_abc123",
  rotateDatasourceCredentialsRequest: {
    credentials: {
      values: {
        "key": {},
      },
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `datasourceId`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The datasource type identifier (e.g. o365sharepoint)                                                           | o365sharepoint                                                                                                 |
| `instanceId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The datasource instance identifier                                                                             | o365sharepoint_abc123                                                                                          |
| `rotateDatasourceCredentialsRequest`                                                                           | [components.RotateDatasourceCredentialsRequest](../../models/components/rotatedatasourcecredentialsrequest.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |