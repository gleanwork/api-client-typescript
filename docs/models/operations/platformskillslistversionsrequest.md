# PlatformSkillsListVersionsRequest

## Example Usage

```typescript
import { PlatformSkillsListVersionsRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsListVersionsRequest = {
  skill_id: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `skillId`                                          | *string*                                           | :heavy_check_mark:                                 | Glean skill ID.                                    |
| `pageSize`                                         | *number*                                           | :heavy_minus_sign:                                 | Maximum number of versions to return.              |
| `cursor`                                           | *string*                                           | :heavy_minus_sign:                                 | Opaque pagination cursor from a previous response. |