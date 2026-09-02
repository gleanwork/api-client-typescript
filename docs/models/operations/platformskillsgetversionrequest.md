# PlatformSkillsGetVersionRequest

## Example Usage

```typescript
import { PlatformSkillsGetVersionRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsGetVersionRequest = {
  skill_id: "{skill_id}",
  version: 1,
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `skillId`             | *string*              | :heavy_check_mark:    | Glean skill ID.       | {skill_id}            |
| `version`             | *number*              | :heavy_check_mark:    | Major version number. | 1                     |