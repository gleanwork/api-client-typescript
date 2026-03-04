# DatasourceVisibility

The visibility of the datasource, an enum of VISIBLE_TO_ALL, VISIBLE_TO_TEST_GROUP, NOT_VISIBLE

## Example Usage

```typescript
import { DatasourceVisibility } from "@gleanwork/api-client/models/components";

let value: DatasourceVisibility = "ENABLED_FOR_ALL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ENABLED_FOR_ALL" | "ENABLED_FOR_TEST_GROUP" | "NOT_ENABLED" | Unrecognized<string>
```