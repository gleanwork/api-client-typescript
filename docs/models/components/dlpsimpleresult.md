# DlpSimpleResult

## Example Usage

```typescript
import { DlpSimpleResult } from "@gleanwork/api-client/models/components";

let value: DlpSimpleResult = "FAILURE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SUCCESS" | "FAILURE" | Unrecognized<string>
```