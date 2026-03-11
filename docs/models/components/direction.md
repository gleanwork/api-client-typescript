# Direction

The direction of the results asked with respect to the reference timestamp. Missing field defaults to OLDER. Only applicable when using a message_id.

## Example Usage

```typescript
import { Direction } from "@gleanwork/api-client/models/components";

let value: Direction = "NEWER";
```

## Values

```typescript
"OLDER" | "NEWER"
```