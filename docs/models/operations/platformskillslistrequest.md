# PlatformSkillsListRequest

## Example Usage

```typescript
import { PlatformSkillsListRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsListRequest = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pageSize`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | Maximum number of skills to return. Defaults to 20. Maximum is 100. |
| `cursor`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | Opaque pagination cursor from a previous response.                  |