# CollectionErrorErrorCode

## Example Usage

```typescript
import { CollectionErrorErrorCode } from "@gleanwork/api-client/models/components";

let value: CollectionErrorErrorCode = "WIDTH_VIOLATION";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NAME_EXISTS" | "NOT_FOUND" | "COLLECTION_PINNED" | "CONCURRENT_HIERARCHY_EDIT" | "HEIGHT_VIOLATION" | "WIDTH_VIOLATION" | "NO_PERMISSIONS" | Unrecognized<string>
```