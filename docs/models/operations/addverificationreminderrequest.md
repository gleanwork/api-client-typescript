# AddverificationreminderRequest

## Example Usage

```typescript
import { AddverificationreminderRequest } from "@gleanwork/api-client/models/operations";

let value: AddverificationreminderRequest = {
  reminderRequest: {
    documentId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `reminderRequest`                                                                                                                                                                                   | [components.ReminderRequest](../../models/components/reminderrequest.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | Details about the reminder.                                                                                                                                                                         |