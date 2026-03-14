# WritePermission

Describes the write permissions levels that a user has for a specific feature

## Example Usage

```typescript
import { WritePermission } from "@gleanwork/api-client/models/components";

let value: WritePermission = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scopeType`                                                                          | [components.ScopeType](../../models/components/scopetype.md)                         | :heavy_minus_sign:                                                                   | Describes the scope for a ReadPermission, WritePermission, or GrantPermission object |
| `create`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True if user has create permission for this feature and scope                        |
| `update`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True if user has update permission for this feature and scope                        |
| `delete`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True if user has delete permission for this feature and scope                        |