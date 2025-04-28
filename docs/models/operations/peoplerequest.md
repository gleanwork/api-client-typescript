# PeopleRequest

## Example Usage

```typescript
import { PeopleRequest } from "@gleanwork/api-client/models/operations";

let value: PeopleRequest = {
  peopleRequest: {
    obfuscatedIds: [
      "abc123",
      "abc456",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |                                                                                                                          |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |                                                                                                                          |
| `peopleRequest`                                                                                                          | [components.PeopleRequest](../../models/components/peoplerequest.md)                                                     | :heavy_check_mark:                                                                                                       | People request                                                                                                           | {<br/>"obfuscatedIds": [<br/>"abc123",<br/>"abc456"<br/>]<br/>}                                                          |