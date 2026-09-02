# PlatformChatCreateInput

Either a plain string (single user turn) or a chronological array of `USER`/`ASSISTANT` messages. The final array message must be `USER`.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.PlatformChatInputMessage[]`

```typescript
const value: components.PlatformChatInputMessage[] = [
  {
    role: "USER",
    content: "<value>",
  },
];
```

