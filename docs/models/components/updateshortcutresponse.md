# UpdateShortcutResponse

## Example Usage

```typescript
import { UpdateShortcutResponse } from "@gleanwork/api-client/models/components";

let value: UpdateShortcutResponse = {
  shortcut: {
    inputAlias: "<value>",
    addedRoles: [],
    removedRoles: [],
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
            status: "[\"Done\"]",
            customData: {
              "someCustomField": {},
            },
          },
        },
      },
    },
    roles: [],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `shortcut`                                                           | [components.Shortcut](../../models/components/shortcut.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `error`                                                              | [components.ShortcutError](../../models/components/shortcuterror.md) | :heavy_minus_sign:                                                   | N/A                                                                  |