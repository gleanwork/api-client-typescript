# PlatformTriggerEventReason

Why the event fired.

## Example Usage

```typescript
import { PlatformTriggerEventReason } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerEventReason = "REVIEW_REQUESTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CREATED" | "UPDATED" | "DELETED" | "MEETS_CONDITION" | "ASSIGNED" | "UNASSIGNED" | "LABELED" | "UNLABELED" | "REVIEW_REQUESTED" | "REVIEW_REQUEST_REMOVED" | "READY_FOR_REVIEW" | "CONVERTED_TO_DRAFT" | "WEBHOOK_UPDATED" | Unrecognized<string>
```