# DatasourcesType

The types of datasource for which to run the report/policy.

## Example Usage

```typescript
import { DatasourcesType } from "@gleanwork/api-client/models/components";

let value: DatasourcesType = "ALL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ALL" | "CUSTOM" | Unrecognized<string>
```