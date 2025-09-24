# MessageType

Semantically groups content of a certain type. It can be used for purposes such as differential UI treatment. USER authored messages should be of type CONTENT and do not need `messageType` specified.

## Example Usage

```typescript
import { MessageType } from "@gleanwork/api-client/models/components";

let value: MessageType = "WARNING";
```

## Values

```typescript
"UPDATE" | "CONTENT" | "CONTEXT" | "DEBUG" | "DEBUG_EXTERNAL" | "ERROR" | "HEADING" | "WARNING" | "SERVER_TOOL"
```