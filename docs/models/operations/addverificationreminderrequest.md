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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `reminderRequest`                                                                                                        | [components.ReminderRequest](../../models/components/reminderrequest.md)                                                 | :heavy_check_mark:                                                                                                       | Details about the reminder.                                                                                              |