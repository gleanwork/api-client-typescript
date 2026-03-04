# ResponseStatus

## Example Usage

```typescript
import { ResponseStatus } from "@gleanwork/api-client/models/components";

let value: ResponseStatus = "TENTATIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACCEPTED" | "DECLINED" | "NO_RESPONSE" | "TENTATIVE" | Unrecognized<string>
```