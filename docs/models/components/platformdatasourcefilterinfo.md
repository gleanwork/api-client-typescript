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

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                                                                                | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | Stable canonical normalized datasource identifier usable in `POST /api/search` `datasources`.<br/>                                                          | jira                                                                                                                                                        |
| `filters`                                                                                                                                                   | [components.PlatformFilterFieldInfo](../../models/components/platformfilterfieldinfo.md)[]                                                                  | :heavy_check_mark:                                                                                                                                          | Common built-in filter fields for this datasource. May be empty. Absence of a public built-in here does not make that field invalid in `POST /api/search`.<br/> |                                                                                                                                                             |