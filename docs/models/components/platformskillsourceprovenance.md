# PlatformSkillSourceProvenance

## Example Usage

```typescript
import { PlatformSkillSourceProvenance } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourceProvenance = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL of the external source the skill was imported from.                                       |
| `commitSha`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Source commit SHA for the imported skill.                                                     |
| `importedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time the skill was imported.                                                                  |
| `lastSyncedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time the skill was last synced from its source.                                               |
| `syncStatus`                                                                                  | [components.PlatformSkillSyncStatus](../../models/components/platformskillsyncstatus.md)      | :heavy_minus_sign:                                                                            | Current external-source sync status.                                                          |
| `syncError`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable sync failure reason, present only when sync_status is SYNC_FAILED.             |