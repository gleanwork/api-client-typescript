# PlatformSkillUpdateRequest

## Example Usage

```typescript
import { PlatformSkillUpdateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformSkillUpdateRequest = {
  status: "ENABLED",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                               | [components.PlatformSkillUpdateStatus](../../models/components/platformskillupdatestatus.md)                                                                           | :heavy_check_mark:                                                                                                                                                     | Activation to apply for the authenticated caller. For the owner, this updates the skill's stored status. For any other caller, it updates only that caller's setting.<br/> |