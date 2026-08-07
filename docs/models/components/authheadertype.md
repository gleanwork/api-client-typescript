# AuthHeaderType

Defines the header structure for sending the API key or token to the server. Defaults to AUTHORIZATION_BEARER. Select the specific header format the server expects for transmitting the key.

## Example Usage

```typescript
import { AuthHeaderType } from "@gleanwork/api-client/models/components";

let value: AuthHeaderType = "AUTHORIZATION_BEARER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTHORIZATION_BEARER" | "AUTHORIZATION_TOKEN" | "AUTHORIZATION_API_KEY" | "X_API_KEY" | Unrecognized<string>
```