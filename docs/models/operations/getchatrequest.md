# GetchatRequest

## Example Usage

```typescript
import { GetchatRequest } from "@gleanwork/api-client/models/operations";

let value: GetchatRequest = {
  getChatRequest: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `timezoneOffset`                                                                                                         | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.               |
| `getChatRequest`                                                                                                         | [components.GetChatRequest](../../models/components/getchatrequest.md)                                                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |