# DeleteannouncementRequest

## Example Usage

```typescript
import { DeleteannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: DeleteannouncementRequest = {
  deleteAnnouncementRequest: {
    id: 440796,
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `deleteAnnouncementRequest`                                                                                                                                                                         | [components.DeleteAnnouncementRequest](../../models/components/deleteannouncementrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                  | Delete announcement request                                                                                                                                                                         |