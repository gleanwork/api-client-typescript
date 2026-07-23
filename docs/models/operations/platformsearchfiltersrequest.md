# PlatformSearchFiltersRequest

## Example Usage

```typescript
import { PlatformSearchFiltersRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSearchFiltersRequest = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `datasources`                                                                                                                               | *string*[]                                                                                                                                  | :heavy_minus_sign:                                                                                                                          | Restrict metadata to one or more canonical normalized datasource identifiers. With a nonblank `query`, exactly one datasource is required.<br/> |
| `query`                                                                                                                                     | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Optional search query used to request bounded facet values for the selected datasource. When present it must be nonblank.<br/>              |