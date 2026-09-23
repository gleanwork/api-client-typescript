# PlatformChatCreateFormat

Output format for the assistant text. TEXT is unconstrained. JSON_SCHEMA constrains the response to the supplied schema.



## Supported Types

### `components.PlatformChatTextFormat`

```typescript
const value: components.PlatformChatTextFormat = {
  type: "TEXT",
};
```

### `components.PlatformChatJsonSchemaFormat`

```typescript
const value: components.PlatformChatJsonSchemaFormat = {
  type: "JSON_SCHEMA",
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

