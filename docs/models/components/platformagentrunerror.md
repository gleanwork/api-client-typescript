# PlatformAgentRunError

Caller-safe details of an agent run execution failure.

## Example Usage

```typescript
import { PlatformAgentRunError } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `code`                                     | *string*                                   | :heavy_check_mark:                         | Machine-readable execution failure code.   |
| `message`                                  | *string*                                   | :heavy_check_mark:                         | Caller-safe execution failure description. |