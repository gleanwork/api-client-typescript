# PromptTemplate

## Example Usage

```typescript
import { PromptTemplate } from "@gleanwork/api-client/models/components";

let value: PromptTemplate = {
  template: "<value>",
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VERIFIER",
    },
  ],
  removedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "EDITOR",
    },
  ],
  author: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  lastUpdatedBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  roles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "OWNER",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The user-given identifier for this prompt template.                                          |                                                                                              |
| `template`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The actual template string.                                                                  |                                                                                              |
| `applicationId`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Application Id the prompt template should be created under. Empty for default assistant. |                                                                                              |
| `inclusions`                                                                                 | [components.ChatRestrictionFilters](../../models/components/chatrestrictionfilters.md)       | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `addedRoles`                                                                                 | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]       | :heavy_minus_sign:                                                                           | A list of added user roles for the Workflow.                                                 |                                                                                              |
| `removedRoles`                                                                               | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]       | :heavy_minus_sign:                                                                           | A list of removed user roles for the Workflow.                                               |                                                                                              |
| `permissions`                                                                                | [components.ObjectPermissions](../../models/components/objectpermissions.md)                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Opaque id for this prompt template                                                           |                                                                                              |
| `author`                                                                                     | [components.Person](../../models/components/person.md)                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                           |
| `createTimestamp`                                                                            | *number*                                                                                     | :heavy_minus_sign:                                                                           | Server Unix timestamp of the creation time.                                                  |                                                                                              |
| `lastUpdateTimestamp`                                                                        | *number*                                                                                     | :heavy_minus_sign:                                                                           | Server Unix timestamp of the last update time.                                               |                                                                                              |
| `lastUpdatedBy`                                                                              | [components.Person](../../models/components/person.md)                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                           |
| `roles`                                                                                      | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]       | :heavy_minus_sign:                                                                           | A list of roles for this prompt template explicitly granted.                                 |                                                                                              |