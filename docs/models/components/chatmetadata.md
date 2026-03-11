# ChatMetadata

Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational content.

## Example Usage

```typescript
import { ChatMetadata } from "@gleanwork/api-client/models/components";

let value: ChatMetadata = {
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
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The opaque id of the Chat.                                                        |                                                                                   |
| `createTime`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Server Unix timestamp of the creation time (in seconds since epoch UTC).          |                                                                                   |
| `createdBy`                                                                       | [components.Person](../../models/components/person.md)                            | :heavy_minus_sign:                                                                | N/A                                                                               | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                |
| `updateTime`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Server Unix timestamp of the update time (in seconds since epoch UTC).            |                                                                                   |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The name of the Chat.                                                             |                                                                                   |
| `applicationId`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | The ID of the AI App that this Chat is associated to.                             |                                                                                   |
| `applicationName`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | The display name of the AI App that this Chat is associated to.                   |                                                                                   |
| `icon`                                                                            | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |