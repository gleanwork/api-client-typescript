# DocumentSpec3

## Example Usage

```typescript
import { DocumentSpec3 } from "@gleanwork/api-client/models/components";

let value: DocumentSpec3 = {
  ugcType: "CHATS",
  contentId: 447943,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `ugcType`                                                                                           | [components.DocumentSpecUgcType1](../../models/components/documentspecugctype1.md)                  | :heavy_check_mark:                                                                                  | The type of the user generated content (UGC datasource).                                            |
| `contentId`                                                                                         | *number*                                                                                            | :heavy_check_mark:                                                                                  | The numeric id for user generated content. Used for ANNOUNCEMENTS, ANSWERS, COLLECTIONS, SHORTCUTS. |
| `docType`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The specific type of the user generated content type.                                               |