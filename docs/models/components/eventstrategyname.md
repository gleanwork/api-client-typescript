# EventStrategyName

The name of method used to surface relevant data for a given calendar event.

## Example Usage

```typescript
import { EventStrategyName } from "@gleanwork/api-client/models/components";

let value: EventStrategyName = "conversations";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"customerCard" | "news" | "call" | "email" | "meetingNotes" | "linkedIn" | "relevantDocuments" | "chatFollowUps" | "conversations" | Unrecognized<string>
```