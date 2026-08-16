# PlatformChatCitationSource

Four-variant citation source union.


## Supported Types

### `components.PlatformChatDocumentSource`

```typescript
const value: components.PlatformChatDocumentSource = {
  type: "DOCUMENT",
  document_id: "<id>",
};
```

### `components.PlatformChatPersonSource`

```typescript
const value: components.PlatformChatPersonSource = {
  type: "PERSON",
  person_id: "<id>",
};
```

### `components.PlatformChatFileSource`

```typescript
const value: components.PlatformChatFileSource = {
  type: "FILE",
  file_id: "<id>",
};
```

### `components.PlatformChatCustomEntitySource`

```typescript
const value: components.PlatformChatCustomEntitySource = {
  type: "CUSTOM_ENTITY",
  entity_id: "<id>",
};
```

