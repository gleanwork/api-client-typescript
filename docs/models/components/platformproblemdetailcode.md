# PlatformProblemDetailCode

Stable machine-readable error code.

## Example Usage

```typescript
import { PlatformProblemDetailCode } from "@gleanwork/api-client/models/components";

let value: PlatformProblemDetailCode = "invalid_cursor";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invalid_request" | "missing_required_field" | "invalid_parameter" | "invalid_cursor" | "expired_cursor" | "invalid_filter" | "invalid_datasource" | "authentication_required" | "token_expired" | "insufficient_permissions" | "resource_not_found" | "method_not_allowed" | "request_timeout" | "request_too_large" | "conflict" | "gone" | "unprocessable_query" | "rate_limit_exceeded" | "internal_error" | "service_unavailable" | Unrecognized<string>
```