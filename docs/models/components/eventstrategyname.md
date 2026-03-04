# EventStrategyName

The name of method used to surface relevant data for a given calendar event.

## Example Usage

```typescript
import { EventStrategyName } from "@gleanwork/api-client/models/components";

let value: EventStrategyName = "conversations";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"customerCard" | "news" | "call" | "email" | "meetingNotes" | "linkedIn" | "relevantDocuments" | "chatFollowUps" | "conversations" | Unrecognized<string>
```