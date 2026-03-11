# IndexGroupRequest

Describes the request body of the /indexgroup API call

## Example Usage

```typescript
import { IndexGroupRequest } from "@gleanwork/api-client/models/components";

let value: IndexGroupRequest = {
  datasource: "<value>",
  group: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The datasource for which the group is added                                                                     |
| `group`                                                                                                         | [components.DatasourceGroupDefinition](../../models/components/datasourcegroupdefinition.md)                    | :heavy_check_mark:                                                                                              | describes a group in the datasource                                                                             |