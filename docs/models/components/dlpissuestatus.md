# DlpIssueStatus

Status of a DLP issue.

## Example Usage

```typescript
import { DlpIssueStatus } from "@gleanwork/api-client/models/components";

let value: DlpIssueStatus = "IN_PROGRESS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPEN" | "CLOSED" | "IN_PROGRESS" | "RESOLVED" | Unrecognized<string>
```