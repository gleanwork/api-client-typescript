# PlatformOAuthClientType

Whether an OAuth client can keep a secret.

## Example Usage

```typescript
import { PlatformOAuthClientType } from "@gleanwork/api-client/models/components";

let value: PlatformOAuthClientType = "CONFIDENTIAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CONFIDENTIAL" | "PUBLIC" | Unrecognized<string>
```