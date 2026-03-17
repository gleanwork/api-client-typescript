# UserRoleSpecification

## Example Usage

```typescript
import { UserRoleSpecification } from "@gleanwork/api-client/models/components";

let value: UserRoleSpecification = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  role: "VERIFIER",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `sourceDocumentSpec`                                       | *components.DocumentSpecUnion*                             | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `person`                                                   | [components.Person](../../models/components/person.md)     | :heavy_minus_sign:                                         | N/A                                                        | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>} |
| `group`                                                    | [components.Group](../../models/components/group.md)       | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `role`                                                     | [components.UserRole](../../models/components/userrole.md) | :heavy_check_mark:                                         | A user's role with respect to a specific document.         |                                                            |