# FeedResultCategory

Category of the result, one of the requested categories in incoming request.

## Example Usage

```typescript
import { FeedResultCategory } from "@gleanwork/api-client/models/components";

let value: FeedResultCategory = "ZERO_STATE_WORKFLOW_POPULAR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DOCUMENT_SUGGESTION" | "DOCUMENT_SUGGESTION_SCENARIO" | "TRENDING_DOCUMENT" | "USE_CASE" | "VERIFICATION_REMINDER" | "EVENT" | "ANNOUNCEMENT" | "MENTION" | "DATASOURCE_AFFINITY" | "RECENT" | "COMPANY_RESOURCE" | "EXPERIMENTAL" | "PEOPLE_CELEBRATIONS" | "SOCIAL_LINK" | "EXTERNAL_TASKS" | "DISPLAYABLE_LIST" | "ZERO_STATE_CHAT_SUGGESTION" | "ZERO_STATE_CHAT_TOOL_SUGGESTION" | "ZERO_STATE_WORKFLOW_CREATED_BY_ME" | "ZERO_STATE_WORKFLOW_FAVORITES" | "ZERO_STATE_WORKFLOW_POPULAR" | "ZERO_STATE_WORKFLOW_RECENT" | "ZERO_STATE_WORKFLOW_SUGGESTION" | "PERSONALIZED_CHAT_SUGGESTION" | "DAILY_DIGEST" | "TASK" | "PLAN_MY_DAY" | "END_MY_DAY" | "STARTER_KIT" | "MID_DAY_CATCH_UP" | "QUERY_SUGGESTION" | Unrecognized<string>
```