# Group

## Example Usage

```typescript
import { Group } from "@gleanwork/api-client/models/components";

let value: Group = {
  type: "JOB_TITLE",
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `type`                                                                | [components.GroupType](../../models/components/grouptype.md)          | :heavy_check_mark:                                                    | The type of user group                                                |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | A unique identifier for the group. May be the same as name.           |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Name of the group.                                                    |
| `datasourceInstance`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Datasource instance if the group belongs to one e.g. external groups. |