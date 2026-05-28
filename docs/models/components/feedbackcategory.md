# FeedbackCategory

The feature category to which the feedback applies. These should be broad product areas such as Announcements, Answers, Search, etc. rather than specific components or UI treatments within those areas.

## Example Usage

```typescript
import { FeedbackCategory } from "@gleanwork/api-client/models/components";

let value: FeedbackCategory = "SEARCH";
```

## Values

```typescript
"ANNOUNCEMENT" | "ANSWERS" | "ARTIFACTS" | "AUTOCOMPLETE" | "COLLECTIONS" | "FEED" | "SEARCH" | "CHAT" | "NTP" | "WORKFLOWS" | "SUMMARY" | "GENERAL" | "PRISM" | "PROMPTS"
```