# CreateAnnouncementRequestPostType

This determines whether this is an external-link post or a regular announcement post. TEXT - Regular announcement that can contain rich text. LINK - Announcement that is linked to an external site.

## Example Usage

```typescript
import { CreateAnnouncementRequestPostType } from "@gleanwork/api-client/models/components";

let value: CreateAnnouncementRequestPostType = "TEXT";
```

## Values

```typescript
"TEXT" | "LINK"
```