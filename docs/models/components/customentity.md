# CustomEntity

## Example Usage

```typescript
import { CustomEntity } from "@gleanwork/api-client/models/components";

let value: CustomEntity = {
  roles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "ANSWER_MODERATOR",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `permissions`                                                                          | [components.ObjectPermissions](../../models/components/objectpermissions.md)           | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique identifier.                                                                     |
| `title`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Title or name of the custom entity.                                                    |
| `datasource`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The datasource the custom entity is from.                                              |
| `objectType`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The type of the entity. Interpretation is specific to each datasource                  |
| `metadata`                                                                             | [components.CustomEntityMetadata](../../models/components/customentitymetadata.md)     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `roles`                                                                                | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[] | :heavy_minus_sign:                                                                     | A list of user roles for the custom entity explicitly granted by the owner.            |