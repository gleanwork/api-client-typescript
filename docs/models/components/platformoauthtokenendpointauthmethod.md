# PlatformOAuthTokenEndpointAuthMethod

How an OAuth client authenticates to the token endpoint.

## Example Usage

```typescript
import { PlatformOAuthTokenEndpointAuthMethod } from "@gleanwork/api-client/models/components";

let value: PlatformOAuthTokenEndpointAuthMethod = "TLS_CLIENT_AUTH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CLIENT_SECRET_BASIC" | "CLIENT_SECRET_POST" | "NO_AUTHENTICATION" | "PRIVATE_KEY_JWT" | "TLS_CLIENT_AUTH" | Unrecognized<string>
```