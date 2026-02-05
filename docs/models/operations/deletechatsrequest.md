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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `timezoneOffset`                                                                                                                                                                                    | *number*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.                                                                                          |
| `deleteChatsRequest`                                                                                                                                                                                | [components.DeleteChatsRequest](../../models/components/deletechatsrequest.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |