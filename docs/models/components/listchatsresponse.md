# ListChatsResponse

## Example Usage

```typescript
import { ListChatsResponse } from "@gleanwork/api-client/models/components";

let value: ListChatsResponse = {
  chatResults: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `chatResults`                                                                                | [components.ChatMetadataResult](../../models/components/chatmetadataresult.md)[]             | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | An opaque cursor for fetching the next page of results. If empty, there are no more results. |