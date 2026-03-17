# ReadPermission

Describes the read permission level that a user has for a specific feature

## Example Usage

```typescript
import { ReadPermission } from "@gleanwork/api-client/models/components";

let value: ReadPermission = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scopeType`                                                                          | [components.ScopeType](../../models/components/scopetype.md)                         | :heavy_minus_sign:                                                                   | Describes the scope for a ReadPermission, WritePermission, or GrantPermission object |