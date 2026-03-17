# MessageType

Semantically groups content of a certain type. It can be used for purposes such as differential UI treatment. USER authored messages should be of type CONTENT and do not need `messageType` specified.

## Example Usage

```typescript
import { MessageType } from "@gleanwork/api-client/models/components";

let value: MessageType = "WARNING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UPDATE" | "CONTENT" | "CONTEXT" | "CONTROL" | "CONTROL_START" | "CONTROL_FINISH" | "CONTROL_CANCEL" | "CONTROL_RETRY" | "CONTROL_UNKNOWN" | "DEBUG" | "DEBUG_EXTERNAL" | "ERROR" | "HEADING" | "WARNING" | "SERVER_TOOL" | Unrecognized<string>
```