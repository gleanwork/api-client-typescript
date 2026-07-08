# AuthorizeToolServerRequest

## Example Usage

```typescript
import { AuthorizeToolServerRequest } from "@gleanwork/api-client/models/operations";

let value: AuthorizeToolServerRequest = {
  serverId: "<id>",
  authorizeToolServerRequest: {
    returnUrl: "https://timely-jazz.biz",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `serverId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier of the tool server.                                                          |
| `authorizeToolServerRequest`                                                                   | [components.AuthorizeToolServerRequest](../../models/components/authorizetoolserverrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |