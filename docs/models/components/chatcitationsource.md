# ChatCitationSource

Four-variant citation source union.


## Supported Types

### `components.ChatDocumentSource`

```typescript
const value: components.ChatDocumentSource = {
  url: "https://realistic-dwell.name/",
  type: "DOCUMENT",
};
```

### `components.ChatPersonSource`

```typescript
const value: components.ChatPersonSource = {
  type: "PERSON",
  person_id: "<id>",
};
```

### `components.ChatFileSource`

```typescript
const value: components.ChatFileSource = {
  type: "FILE",
  file_id: "<id>",
};
```

### `components.ChatCustomEntitySource`

```typescript
const value: components.ChatCustomEntitySource = {
  type: "CUSTOM_ENTITY",
  entity_id: "<id>",
};
```

