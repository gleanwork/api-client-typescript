# ~~SensitiveInfoTypeLikelihoodThreshold~~

> :warning: **DEPRECATED**: Deprecated on 2026-02-05, removal scheduled for 2026-10-15: Field is deprecated.

## Example Usage

```typescript
import { SensitiveInfoTypeLikelihoodThreshold } from "@gleanwork/api-client/models/components";

let value: SensitiveInfoTypeLikelihoodThreshold = "POSSIBLE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"LIKELY" | "VERY_LIKELY" | "POSSIBLE" | "UNLIKELY" | "VERY_UNLIKELY" | Unrecognized<string>
```