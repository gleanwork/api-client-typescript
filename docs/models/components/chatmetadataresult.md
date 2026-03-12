# ChatMetadataResult

## Example Usage

```typescript
import { ChatMetadataResult } from "@gleanwork/api-client/models/components";

let value: ChatMetadataResult = {
  chat: {
    createdBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    icon: {
      color: "#343CED",
      key: "person_icon",
      iconType: "GLYPH",
      name: "user",
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `chat`                                                                                              | [components.ChatMetadata](../../models/components/chatmetadata.md)                                  | :heavy_minus_sign:                                                                                  | Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational content. |
| `trackingToken`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | An opaque token that represents this particular Chat. To be used for `/feedback` reporting.         |