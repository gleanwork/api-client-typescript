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

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasources`                                                                                                                                                                                          | [components.PlatformDatasourceFilterInfo](../../models/components/platformdatasourcefilterinfo.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                                                     | Datasource metadata visible to the authenticated caller. Each `datasource` value is a canonical normalized identifier usable in `POST /api/search` `datasources`. Empty means no visible datasources.<br/> |
| `requestId`                                                                                                                                                                                            | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | Platform-generated request ID for support correlation.                                                                                                                                                 |