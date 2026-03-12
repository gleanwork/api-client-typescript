# MessagesRequest

## Example Usage

```typescript
import { MessagesRequest } from "@gleanwork/api-client/models/operations";

let value: MessagesRequest = {
  messagesRequest: {
    idType: "CHANNEL_NAME",
    id: "<id>",
    datasource: "SLACKENTGRID",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `messagesRequest`                                                                                                                                                                                   | [components.MessagesRequest](../../models/components/messagesrequest.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | Includes request params such as the id for channel/message and direction.                                                                                                                           |