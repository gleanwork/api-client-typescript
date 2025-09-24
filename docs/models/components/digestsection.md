# DigestSection

## Example Usage

```typescript
import { DigestSection } from "@gleanwork/api-client/models/components";

let value: DigestSection = {
  id: "<id>",
  type: "MENTIONS",
  updates: [
    {},
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique identifier for the digest section.                                                                        |
| `type`                                                                                                           | [components.SectionType](../../models/components/sectiontype.md)                                                 | :heavy_check_mark:                                                                                               | Type of the section. This defines how the section should be interpreted and rendered in the digest.              |
| `displayName`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Human-readable name for the digest section.                                                                      |
| `channelName`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Name of the channel (applicable for CHANNEL type sections). Used to display in the frontend.                     |
| `instanceId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Instance identifier for the channel or workspace. Used for constructing channel URLs to display in the frontend. |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Optional URL for the digest section. Should be populated only if the section is a CHANNEL type section.          |
| `updates`                                                                                                        | [components.DigestUpdate](../../models/components/digestupdate.md)[]                                             | :heavy_check_mark:                                                                                               | List of updates within this digest section.                                                                      |