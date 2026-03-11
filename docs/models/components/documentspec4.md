# DocumentSpec4

## Example Usage

```typescript
import { DocumentSpec4 } from "@gleanwork/api-client/models/components";

let value: DocumentSpec4 = {
  ugcType: "ANNOUNCEMENTS",
  ugcId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ugcType`                                                                          | [components.DocumentSpecUgcType2](../../models/components/documentspecugctype2.md) | :heavy_check_mark:                                                                 | The type of the user generated content (UGC datasource).                           |
| `ugcId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The string id for user generated content. Used for CHATS.                          |
| `docType`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | The specific type of the user generated content type.                              |