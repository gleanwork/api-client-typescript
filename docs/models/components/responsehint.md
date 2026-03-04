# ResponseHint

Hints for the response content.

## Example Usage

```typescript
import { ResponseHint } from "@gleanwork/api-client/models/components";

let value: ResponseHint = "RESULTS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ALL_RESULT_COUNTS" | "FACET_RESULTS" | "QUERY_METADATA" | "RESULTS" | "SPELLCHECK_METADATA" | Unrecognized<string>
```