# ChatFileFailureReason

Reason for failed status.

## Example Usage

```typescript
import { ChatFileFailureReason } from "@gleanwork/api-client/models/components";

let value: ChatFileFailureReason = "PARSE_FAILED";
```

## Values

```typescript
"PARSE_FAILED" | "AV_SCAN_FAILED" | "FILE_TOO_SMALL" | "FILE_TOO_LARGE" | "FILE_EXTENSION_UNSUPPORTED" | "FILE_METADATA_VALIDATION_FAIL" | "FILE_PROCESSING_TIMED_OUT" | "OAUTH_NEEDED" | "URL_FETCH_FAILED" | "EMPTY_CONTENT" | "AUTH_REQUIRED"
```