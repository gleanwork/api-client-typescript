# UserActivity

## Example Usage

```typescript
import { UserActivity } from "@gleanwork/api-client/models/components";

let value: UserActivity = {
  actor: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `actor`                                                                        | [components.Person](../../models/components/person.md)                         | :heavy_minus_sign:                                                             | N/A                                                                            | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}             |
| `timestamp`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | Unix timestamp of the activity (in seconds since epoch UTC).                   |                                                                                |
| `action`                                                                       | [components.UserActivityAction](../../models/components/useractivityaction.md) | :heavy_minus_sign:                                                             | The action for the activity                                                    |                                                                                |
| `aggregateVisitCount`                                                          | [components.CountInfo](../../models/components/countinfo.md)                   | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |