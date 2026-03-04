# CustomSensitiveRuleType

Type of the custom sensitive rule.

## Example Usage

```typescript
import { CustomSensitiveRuleType } from "@gleanwork/api-client/models/components";

let value: CustomSensitiveRuleType = "INFO_TYPE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REGEX" | "TERM" | "INFO_TYPE" | Unrecognized<string>
```