# PlatformSkillsUpdateRequest

## Example Usage

```typescript
import { PlatformSkillsUpdateRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsUpdateRequest = {
  skill_id: "<id>",
  platformSkillUpdateRequest: {
    status: "ENABLED",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `skillId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Glean skill ID.                                                                                |                                                                                                |
| `platformSkillUpdateRequest`                                                                   | [components.PlatformSkillUpdateRequest](../../models/components/platformskillupdaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"status": "ENABLED"<br/>}                                                                |