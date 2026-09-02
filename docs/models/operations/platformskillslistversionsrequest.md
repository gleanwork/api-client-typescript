# PlatformSkillsListVersionsRequest

## Example Usage

```typescript
import { PlatformSkillsListVersionsRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsListVersionsRequest = {
  skill_id: "{skill_id}",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `skillId`                                          | *string*                                           | :heavy_check_mark:                                 | Glean skill ID.                                    | {skill_id}                                         |
| `pageSize`                                         | *number*                                           | :heavy_minus_sign:                                 | Maximum number of versions to return.              |                                                    |
| `cursor`                                           | *string*                                           | :heavy_minus_sign:                                 | Opaque pagination cursor from a previous response. |                                                    |