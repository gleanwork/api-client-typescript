# PlatformOAuthGrantType

An OAuth grant type.

## Example Usage

```typescript
import { PlatformOAuthGrantType } from "@gleanwork/api-client/models/components";

let value: PlatformOAuthGrantType = "AUTHORIZATION_CODE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTHORIZATION_CODE" | "CLIENT_CREDENTIALS" | "REFRESH_TOKEN" | "DEVICE_CODE" | "TOKEN_EXCHANGE" | "JWT_BEARER" | Unrecognized<string>
```