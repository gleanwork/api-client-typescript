# AnnouncementChannel

This determines whether this is a Social Feed post or a regular announcement.

## Example Usage

```typescript
import { AnnouncementChannel } from "@gleanwork/api-client/models/components";

let value: AnnouncementChannel = "SOCIAL_FEED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MAIN" | "SOCIAL_FEED" | Unrecognized<string>
```