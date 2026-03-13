# DocumentOrErrorUnion


## Supported Types

### `components.Document`

```typescript
const value: components.Document = {
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
      status: "[\"Done\"]",
      customData: {
        "someCustomField": {},
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
      status: "[\"Done\"]",
      customData: {
        "someCustomField": {},
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
    status: "[\"Done\"]",
    customData: {
      "someCustomField": {},
    },
  },
};
```

### `components.DocumentOrError`

```typescript
const value: components.DocumentOrError = {
  error: "<value>",
};
```

