# DatasourceGroupDefinition

describes a group in the datasource

## Example Usage

```typescript
import { DatasourceGroupDefinition } from "@gleanwork/api-client/models/components";

let value: DatasourceGroupDefinition = {
  name: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | name of the group. Should be unique among all groups for the datasource, and cannot have spaces. |