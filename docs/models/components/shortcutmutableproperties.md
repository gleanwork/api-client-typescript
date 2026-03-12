# ShortcutMutableProperties

## Example Usage

```typescript
import { ShortcutMutableProperties } from "@gleanwork/api-client/models/components";

let value: ShortcutMutableProperties = {
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VIEWER",
    },
  ],
  removedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VERIFIER",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `inputAlias`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | Link text following go/ prefix as entered by the user.                                            |
| `destinationUrl`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | Destination URL for the shortcut.                                                                 |
| `destinationDocumentId`                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | Glean Document ID for the URL, if known.                                                          |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | A short, plain text blurb to help people understand the intent of the shortcut.                   |
| `unlisted`                                                                                        | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Whether this shortcut is unlisted or not. Unlisted shortcuts are visible to author + admins only. |
| `urlTemplate`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | For variable shortcuts, contains the URL template; note, `destinationUrl` contains default URL.   |
| `addedRoles`                                                                                      | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]            | :heavy_minus_sign:                                                                                | A list of user roles added for the Shortcut.                                                      |
| `removedRoles`                                                                                    | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]            | :heavy_minus_sign:                                                                                | A list of user roles removed for the Shortcut.                                                    |