# AnnouncementChannel

This determines whether this is a Social Feed post or a regular announcement.

## Example Usage

```typescript
import { AnnouncementChannel } from "@gleanwork/api-client/models/components";

let value: AnnouncementChannel = "SOCIAL_FEED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MAIN" | "SOCIAL_FEED" | Unrecognized<string>
```