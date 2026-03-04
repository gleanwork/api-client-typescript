# CustomSensitiveRuleLikelihoodThreshold

Likelihood threshold for BUILT_IN infotypes (e.g., LIKELY, VERY_LIKELY). Only applicable for BUILT_IN type.

## Example Usage

```typescript
import { CustomSensitiveRuleLikelihoodThreshold } from "@gleanwork/api-client/models/components";

let value: CustomSensitiveRuleLikelihoodThreshold = "UNLIKELY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"LIKELY" | "VERY_LIKELY" | "POSSIBLE" | "UNLIKELY" | "VERY_UNLIKELY" | Unrecognized<string>
```