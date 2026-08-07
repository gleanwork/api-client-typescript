# PlatformChatCitationSource

Four-variant citation source union.


## Supported Types

### `components.PlatformChatDocumentSource`

```typescript
const value: components.PlatformChatDocumentSource = {
  type: "document",
  document_id: "<id>",
};
```

### `components.PlatformChatPersonSource`

```typescript
const value: components.PlatformChatPersonSource = {
  type: "person",
  person_id: "<id>",
};
```

### `components.PlatformChatFileSource`

```typescript
const value: components.PlatformChatFileSource = {
  type: "file",
  file_id: "<id>",
};
```

### `components.PlatformChatCustomEntitySource`

```typescript
const value: components.PlatformChatCustomEntitySource = {
  type: "custom_entity",
  entity_id: "<id>",
};
```

