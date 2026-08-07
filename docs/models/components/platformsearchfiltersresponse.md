# PlatformSearchFiltersResponse

## Example Usage

```typescript
import { PlatformSearchFiltersResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSearchFiltersResponse = {
  datasources: [],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `datasources`                                                                                                                                                                     | [components.PlatformDatasourceFilterInfo](../../models/components/platformdatasourcefilterinfo.md)[]                                                                              | :heavy_check_mark:                                                                                                                                                                | Datasources visible to the authenticated user. Each `datasource` is an identifier you can pass to `POST /api/search` `datasources`. An empty array means no visible datasources.<br/> |
| `requestId`                                                                                                                                                                       | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Platform-generated request ID for support correlation.                                                                                                                            |