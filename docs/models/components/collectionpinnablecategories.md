# CollectionPinnableCategories

Categories a Collection can be pinned to.

## Example Usage

```typescript
import { CollectionPinnableCategories } from "@gleanwork/api-client/models/components";

let value: CollectionPinnableCategories = "DEPARTMENT_RESOURCE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"COMPANY_RESOURCE" | "DEPARTMENT_RESOURCE" | "TEAM_RESOURCE" | Unrecognized<string>
```