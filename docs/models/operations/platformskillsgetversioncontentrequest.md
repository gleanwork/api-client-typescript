# PlatformSkillsGetVersionContentRequest

## Example Usage

```typescript
import { PlatformSkillsGetVersionContentRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsGetVersionContentRequest = {
  skill_id: "<id>",
  version: 320976,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `skillId`             | *string*              | :heavy_check_mark:    | Glean skill ID.       |
| `version`             | *number*              | :heavy_check_mark:    | Major version number. |