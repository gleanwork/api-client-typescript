# ChannelInviteInfo

Information regarding the invite status of a person for a particular channel.

## Example Usage

```typescript
import { ChannelInviteInfo } from "@gleanwork/api-client/models/components";

let value: ChannelInviteInfo = {
  inviter: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `channel`                                                                                     | [components.CommunicationChannel](../../models/components/communicationchannel.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `isAutoInvite`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Bit that tracks if this invite was automatically sent or user-sent                            |                                                                                               |
| `inviter`                                                                                     | [components.Person](../../models/components/person.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                            |
| `inviteTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time this person was invited in ISO format (ISO 8601).                                    |                                                                                               |
| `reminderTime`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time this person was reminded in ISO format (ISO 8601) if a reminder was sent.            |                                                                                               |