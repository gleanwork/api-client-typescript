# UserActivityInsight

## Example Usage

```typescript
import { UserActivityInsight } from "@gleanwork/api-client/models/components";

let value: UserActivityInsight = {
  user: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  activity: "ALL",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.Person](../../models/components/person.md)             | :heavy_check_mark:                                                 | N/A                                                                | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>} |
| `activity`                                                         | [components.ActivityEnum](../../models/components/activityenum.md) | :heavy_check_mark:                                                 | Activity e.g. search, home page visit or all.                      |                                                                    |
| `lastActivityTimestamp`                                            | *number*                                                           | :heavy_minus_sign:                                                 | Unix timestamp of the last activity (in seconds since epoch UTC).  |                                                                    |
| `activityCount`                                                    | [components.CountInfo](../../models/components/countinfo.md)       | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `activeDayCount`                                                   | [components.CountInfo](../../models/components/countinfo.md)       | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |