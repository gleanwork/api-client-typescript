# RotateDatasourceCredentialsRequest

Request to rotate the credentials used by a datasource instance. Replaces the active credential material with the supplied values.
`credentials.values` must contain only keys recognized as credential material for the datasource type (for example `clientSecret` for OAuth, `apiToken` for API-token auth, `privateKey` for certificate auth). Unrecognized keys, or keys that correspond to non-credential configuration, cause a 400; use the configure endpoint to change non-credential config.


## Example Usage

```typescript
import { RotateDatasourceCredentialsRequest } from "@gleanwork/api-client/models/components";

let value: RotateDatasourceCredentialsRequest = {
  credentials: {
    values: {
      "key": {},
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `credentials`                                                                                            | [components.DatasourceInstanceConfiguration](../../models/components/datasourceinstanceconfiguration.md) | :heavy_check_mark:                                                                                       | Configuration for a datasource instance                                                                  |