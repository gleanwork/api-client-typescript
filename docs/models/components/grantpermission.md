# GrantPermission

Describes the grant permission level that a user has for a specific feature

## Example Usage

```typescript
import { GrantPermission } from "@gleanwork/api-client/models/components";

let value: GrantPermission = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scopeType`                                                                          | [components.ScopeType](../../models/components/scopetype.md)                         | :heavy_minus_sign:                                                                   | Describes the scope for a ReadPermission, WritePermission, or GrantPermission object |