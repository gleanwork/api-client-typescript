# CustomDatasourceConfigConnectorType

The source from which document content was pulled, e.g. an API crawl or browser history

## Example Usage

```typescript
import { CustomDatasourceConfigConnectorType } from "@gleanwork/api-client/models/components";

let value: CustomDatasourceConfigConnectorType = "PUSH_API";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"API_CRAWL" | "BROWSER_CRAWL" | "BROWSER_HISTORY" | "BUILTIN" | "FEDERATED_SEARCH" | "PUSH_API" | "WEB_CRAWL" | "NATIVE_HISTORY" | Unrecognized<string>
```