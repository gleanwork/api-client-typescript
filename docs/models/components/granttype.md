# GrantType

The type of grant type being used.

## Example Usage

```typescript
import { GrantType } from "@gleanwork/api-client/models/components";

let value: GrantType = "AUTH_CODE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AUTH_CODE" | "CLIENT_CREDENTIALS" | Unrecognized<string>
```