# CustomDatasourceConfigConnectorType

The source from which document content was pulled, e.g. an API crawl or browser history

## Example Usage

```typescript
import { CustomDatasourceConfigConnectorType } from "@gleanwork/api-client/models/components";

let value: CustomDatasourceConfigConnectorType = "PUSH_API";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"API_CRAWL" | "BROWSER_CRAWL" | "BROWSER_HISTORY" | "BUILTIN" | "FEDERATED_SEARCH" | "PUSH_API" | "WEB_CRAWL" | "NATIVE_HISTORY" | Unrecognized<string>
```