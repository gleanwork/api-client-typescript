# Event

The action the user took within a Glean client with respect to the object referred to by the given `trackingToken`.

## Example Usage

```typescript
import { Event } from "@gleanwork/api-client/models/components";

let value: Event = "COPY_LINK";
```

## Values

```typescript
"CLICK" | "CONTAINER_CLICK" | "COPY_LINK" | "CREATE" | "DISMISS" | "DOWNVOTE" | "EMAIL" | "EXECUTE" | "FILTER" | "FIRST_TOKEN" | "FOCUS_IN" | "LAST_TOKEN" | "MANUAL_FEEDBACK" | "MANUAL_FEEDBACK_SIDE_BY_SIDE" | "MARK_AS_READ" | "MESSAGE" | "MIDDLE_CLICK" | "PAGE_BLUR" | "PAGE_FOCUS" | "PAGE_LEAVE" | "PREVIEW" | "RELATED_CLICK" | "RIGHT_CLICK" | "SECTION_CLICK" | "SEEN" | "SELECT" | "SHARE" | "SHOW_MORE" | "UPVOTE" | "VIEW" | "VISIBLE"
```