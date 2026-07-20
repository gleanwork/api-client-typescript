# PlatformSkillsGetVersionRequest

## Example Usage

```typescript
import { PlatformSkillsGetVersionRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsGetVersionRequest = {
  skill_id: "<id>",
  version: 986773,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `skillId`             | *string*              | :heavy_check_mark:    | Glean skill ID.       |
| `version`             | *number*              | :heavy_check_mark:    | Major version number. |