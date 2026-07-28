# PlatformDatasourceFilterInfo

## Example Usage

```typescript
import { PlatformDatasourceFilterInfo } from "@gleanwork/api-client/models/components";

let value: PlatformDatasourceFilterInfo = {
  datasource: "jira",
  filters: [
    {
      field: "status",
      type: "STRING",
      operators: [
        "LTE",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             | Example                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                                                                                                            | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Datasource identifier usable in `POST /api/search` `datasources`.<br/>                                                                                                                  | jira                                                                                                                                                                                    |
| `filters`                                                                                                                                                                               | [components.PlatformFilterFieldInfo](../../models/components/platformfilterfieldinfo.md)[]                                                                                              | :heavy_check_mark:                                                                                                                                                                      | Common built-in filter fields for this datasource. May be empty. A built-in omitted here can still be valid in `POST /api/search`; see `Filter.field` for the full built-in name list.<br/> |                                                                                                                                                                                         |