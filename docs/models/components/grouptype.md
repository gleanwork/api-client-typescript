# GroupType

The type of user group

## Example Usage

```typescript
import { GroupType } from "@gleanwork/api-client/models/components";

let value: GroupType = "REGION";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DEPARTMENT" | "ALL" | "TEAM" | "JOB_TITLE" | "ROLE_TYPE" | "LOCATION" | "REGION" | "EXTERNAL_GROUP" | Unrecognized<string>
```