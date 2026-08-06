# TokenEndpointAuthMethod

The OAuth 2.0 token endpoint authentication method (RFC 7591). Determines how the client authenticates when exchanging an authorization code for a token. Values use lowercase to match the OAuth 2.0 wire format (RFC 7591 Section 2).

## Example Usage

```typescript
import { TokenEndpointAuthMethod } from "@gleanwork/api-client/models/components";

let value: TokenEndpointAuthMethod = "client_secret_post";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"client_secret_post" | "client_secret_basic" | "none" | "private_key_jwt" | Unrecognized<string>
```