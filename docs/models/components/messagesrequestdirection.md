# MessagesRequestDirection

The direction of the results asked with respect to the reference timestamp. Missing field defaults to OLDER. Only applicable when using a message_id.

## Example Usage

```typescript
import { MessagesRequestDirection } from "@gleanwork/api-client/models/components";

let value: MessagesRequestDirection = "OLDER";
```

## Values

```typescript
"OLDER" | "NEWER"
```