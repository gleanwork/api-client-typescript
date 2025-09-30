# DeletechatsRequest

## Example Usage

```typescript
import { DeletechatsRequest } from "@gleanwork/api-client/models/operations";

let value: DeletechatsRequest = {
  deleteChatsRequest: {
    ids: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `deleteChatsRequest`                                                                                       | [components.DeleteChatsRequest](../../models/components/deletechatsrequest.md)                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |