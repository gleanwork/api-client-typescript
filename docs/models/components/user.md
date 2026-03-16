# User

## Example Usage

```typescript
import { User } from "@gleanwork/api-client/models/components";

let value: User = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `userID`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | An opaque user ID for the claimed authority (i.e., the actas param, or the origid if actas is not specified). |
| `origID`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | An opaque user ID for the authenticated user (ignores actas).                                                 |