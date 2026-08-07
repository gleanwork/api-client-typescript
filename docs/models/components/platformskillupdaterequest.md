# PlatformSkillUpdateRequest

## Example Usage

```typescript
import { PlatformSkillUpdateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformSkillUpdateRequest = {
  status: "DISABLED",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `status`                                                                                     | [components.PlatformSkillUpdateStatus](../../models/components/platformskillupdatestatus.md) | :heavy_check_mark:                                                                           | New status for the skill.                                                                    |