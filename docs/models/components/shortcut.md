# Shortcut

## Example Usage

```typescript
import { Shortcut } from "@gleanwork/api-client/models/components";

let value: Shortcut = {
  inputAlias: "<value>",
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
  createdBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  updatedBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  destinationDocument: {
    containerDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
          name: "name",
          obfuscatedId: "<id>",
        },
        components: [
          "Backend",
          "Networking",
        ],
        status: "Done",
        customData: {
          "someCustomField": {
            stringValue: "someCustomValue",
          },
        },
      },
    },
    parentDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
          name: "name",
          obfuscatedId: "<id>",
        },
        components: [
          "Backend",
          "Networking",
        ],
        status: "Done",
        customData: {
          "someCustomField": {
            stringValue: "someCustomValue",
          },
        },
      },
    },
    metadata: {
      datasource: "datasource",
      objectType: "Feature Request",
      container: "container",
      parentId: "JIRA_EN-1337",
      mimeType: "mimeType",
      documentId: "documentId",
      createTime: new Date("2000-01-23T04:56:07.000Z"),
      updateTime: new Date("2000-01-23T04:56:07.000Z"),
      author: {
        name: "name",
        obfuscatedId: "<id>",
      },
      components: [
        "Backend",
        "Networking",
      ],
      status: "Done",
      customData: {
        "someCustomField": {
          stringValue: "someCustomValue",
        },
      },
    },
  },
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

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The opaque id of the user generated content.                                                                                                       |                                                                                                                                                    |
| `inputAlias`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Link text following go/ prefix as entered by the user.                                                                                             |                                                                                                                                                    |
| `destinationUrl`                                                                                                                                   | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Destination URL for the shortcut.                                                                                                                  |                                                                                                                                                    |
| `destinationDocumentId`                                                                                                                            | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Glean Document ID for the URL, if known.                                                                                                           |                                                                                                                                                    |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A short, plain text blurb to help people understand the intent of the shortcut.                                                                    |                                                                                                                                                    |
| `unlisted`                                                                                                                                         | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether this shortcut is unlisted or not. Unlisted shortcuts are visible to author + admins only.                                                  |                                                                                                                                                    |
| `urlTemplate`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | For variable shortcuts, contains the URL template; note, `destinationUrl` contains default URL.                                                    |                                                                                                                                                    |
| `addedRoles`                                                                                                                                       | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                             | :heavy_minus_sign:                                                                                                                                 | A list of user roles added for the Shortcut.                                                                                                       |                                                                                                                                                    |
| `removedRoles`                                                                                                                                     | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                             | :heavy_minus_sign:                                                                                                                                 | A list of user roles removed for the Shortcut.                                                                                                     |                                                                                                                                                    |
| `permissions`                                                                                                                                      | [components.ObjectPermissions](../../models/components/objectpermissions.md)                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
| `createdBy`                                                                                                                                        | [components.Person](../../models/components/person.md)                                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                 |
| `createTime`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_minus_sign:                                                                                                                                 | The time the shortcut was created in ISO format (ISO 8601).                                                                                        |                                                                                                                                                    |
| `updatedBy`                                                                                                                                        | [components.Person](../../models/components/person.md)                                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                 |
| `updateTime`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_minus_sign:                                                                                                                                 | The time the shortcut was updated in ISO format (ISO 8601).                                                                                        |                                                                                                                                                    |
| `destinationDocument`                                                                                                                              | [components.Document](../../models/components/document.md)                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
| `intermediateUrl`                                                                                                                                  | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The URL from which the user is then redirected to the destination URL. Full replacement for https://go/<inputAlias>.                               |                                                                                                                                                    |
| `viewPrefix`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The part of the shortcut preceding the input alias when used for showing shortcuts to users. Should end with "/". e.g. "go/" for native shortcuts. |                                                                                                                                                    |
| `isExternal`                                                                                                                                       | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Indicates whether a shortcut is native or external.                                                                                                |                                                                                                                                                    |
| `editUrl`                                                                                                                                          | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The URL using which the user can access the edit page of the shortcut.                                                                             |                                                                                                                                                    |
| `alias`                                                                                                                                            | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | canonical link text following go/ prefix where hyphen/underscore is removed.                                                                       |                                                                                                                                                    |
| `title`                                                                                                                                            | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Title for the Go Link                                                                                                                              |                                                                                                                                                    |
| `roles`                                                                                                                                            | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                             | :heavy_minus_sign:                                                                                                                                 | A list of user roles for the Go Link.                                                                                                              |                                                                                                                                                    |
| `favoriteInfo`                                                                                                                                     | [components.FavoriteInfo](../../models/components/favoriteinfo.md)                                                                                 | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |