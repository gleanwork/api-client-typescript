# Workflow

## Example Usage

```typescript
import { Workflow } from "@gleanwork/api-client/models/components";

let value: Workflow = {
  author: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  lastUpdatedBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the workflow.                                                    |                                                                              |
| `author`                                                                     | [components.Person](../../models/components/person.md)                       | :heavy_minus_sign:                                                           | N/A                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}           |
| `createTimestamp`                                                            | *number*                                                                     | :heavy_minus_sign:                                                           | Server Unix timestamp of the creation time.                                  |                                                                              |
| `lastUpdateTimestamp`                                                        | *number*                                                                     | :heavy_minus_sign:                                                           | Server Unix timestamp of the last update time.                               |                                                                              |
| `lastUpdatedBy`                                                              | [components.Person](../../models/components/person.md)                       | :heavy_minus_sign:                                                           | N/A                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}           |
| `permissions`                                                                | [components.ObjectPermissions](../../models/components/objectpermissions.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the workflow.                                                      |                                                                              |