# CreateShortcutRequest

## Example Usage

```typescript
import { CreateShortcutRequest } from "@gleanwork/api-client/models/components";

let value: CreateShortcutRequest = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.ShortcutMutableProperties](../../models/components/shortcutmutableproperties.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |