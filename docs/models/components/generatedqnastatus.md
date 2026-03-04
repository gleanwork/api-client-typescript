# GeneratedQnaStatus

Status of backend generating the answer

## Example Usage

```typescript
import { GeneratedQnaStatus } from "@gleanwork/api-client/models/components";

let value: GeneratedQnaStatus = "COMPUTING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"COMPUTING" | "DISABLED" | "FAILED" | "NO_ANSWER" | "SKIPPED" | "STREAMING" | "SUCCEEDED" | "TIMEOUT" | Unrecognized<string>
```