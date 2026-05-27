# RotateDatasourceCredentialsRequest

## Example Usage

```typescript
import { RotateDatasourceCredentialsRequest } from "@gleanwork/api-client/models/operations";

let value: RotateDatasourceCredentialsRequest = {
  datasourceInstanceId: "o365sharepoint_abc123",
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
| `datasourceInstanceId`                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The full datasource instance identifier (e.g. o365sharepoint_abc123)                                           | o365sharepoint_abc123                                                                                          |
| `rotateDatasourceCredentialsRequest`                                                                           | [components.RotateDatasourceCredentialsRequest](../../models/components/rotatedatasourcecredentialsrequest.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |