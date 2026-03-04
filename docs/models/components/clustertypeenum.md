# ClusterTypeEnum

The reason for inclusion of clusteredResults.

## Example Usage

```typescript
import { ClusterTypeEnum } from "@gleanwork/api-client/models/components";

let value: ClusterTypeEnum = "THREAD_ROOT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SIMILAR" | "FRESHNESS" | "TITLE" | "CONTENT" | "NONE" | "THREAD_REPLY" | "THREAD_ROOT" | "PREFIX" | "SUFFIX" | "AUTHOR_PREFIX" | "AUTHOR_SUFFIX" | Unrecognized<string>
```