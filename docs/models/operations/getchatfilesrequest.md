# GetchatfilesRequest

## Example Usage

```typescript
import { GetchatfilesRequest } from "@gleanwork/api-client/models/operations";

let value: GetchatfilesRequest = {
  getChatFilesRequest: {
    fileIds: [],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `getChatFilesRequest`                                                                                      | [components.GetChatFilesRequest](../../models/components/getchatfilesrequest.md)                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |