# ResponseHint

Hints for the response content.

## Example Usage

```typescript
import { ResponseHint } from "@gleanwork/api-client/models/components";

let value: ResponseHint = "RESULTS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ALL_RESULT_COUNTS" | "FACET_RESULTS" | "QUERY_METADATA" | "RESULTS" | "SPELLCHECK_METADATA" | Unrecognized<string>
```