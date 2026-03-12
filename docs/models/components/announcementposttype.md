# AnnouncementPostType

This determines whether this is an external-link post or a regular announcement post. TEXT - Regular announcement that can contain rich text. LINK - Announcement that is linked to an external site.

## Example Usage

```typescript
import { AnnouncementPostType } from "@gleanwork/api-client/models/components";

let value: AnnouncementPostType = "TEXT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "LINK" | Unrecognized<string>
```