# Input

Either a plain string (single user turn) or a chronological array of `user`/`assistant` messages. The final array message must be `user`.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.PlatformChatInputMessage[]`

```typescript
const value: components.PlatformChatInputMessage[] = [
  {
    role: "user",
    content: "<value>",
  },
];
```

