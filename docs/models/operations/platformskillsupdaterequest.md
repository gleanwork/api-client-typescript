# PlatformSkillsUpdateRequest

## Example Usage

```typescript
import { PlatformSkillsUpdateRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsUpdateRequest = {
  skill_id: "{skill_id}",
  platformSkillUpdateRequest: {
    status: "ENABLED",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `skillId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Glean skill ID.                                                                                | {skill_id}                                                                                     |
| `platformSkillUpdateRequest`                                                                   | [components.PlatformSkillUpdateRequest](../../models/components/platformskillupdaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"status": "ENABLED"<br/>}                                                                |