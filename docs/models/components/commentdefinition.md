# CommentDefinition

Describes a comment on a document

## Example Usage

```typescript
import { CommentDefinition } from "@gleanwork/api-client/models/components";

let value: CommentDefinition = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The document specific id for the comment. This field is case insensitive and should not be more than 200 characters in length. |
| `author`                                                                                                                       | [components.UserReferenceDefinition](../../models/components/userreferencedefinition.md)                                       | :heavy_minus_sign:                                                                                                             | Describes how a user is referenced in a document. The user can be referenced by email or by a datasource specific id.          |
| `content`                                                                                                                      | [components.ContentDefinition](../../models/components/contentdefinition.md)                                                   | :heavy_minus_sign:                                                                                                             | Describes text content or base64 encoded binary content                                                                        |
| `createdAt`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The creation time, in epoch seconds.                                                                                           |
| `updatedAt`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The last updated time, in epoch seconds.                                                                                       |
| `updatedBy`                                                                                                                    | [components.UserReferenceDefinition](../../models/components/userreferencedefinition.md)                                       | :heavy_minus_sign:                                                                                                             | Describes how a user is referenced in a document. The user can be referenced by email or by a datasource specific id.          |