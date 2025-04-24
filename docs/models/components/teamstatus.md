# TeamStatus

whether this team is fully processed or there are still unprocessed operations that'll affect it

## Example Usage

```typescript
import { TeamStatus } from "@gleanwork/api-client/models/components";

let value: TeamStatus = "QUEUED_FOR_CREATION";
```

## Values

```typescript
"PROCESSED" | "QUEUED_FOR_CREATION" | "QUEUED_FOR_DELETION"
```