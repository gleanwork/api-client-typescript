# PeoplesuggestRequest

## Example Usage

```typescript
import { PeoplesuggestRequest } from "@gleanwork/api-client/models/operations";

let value: PeoplesuggestRequest = {
  peopleSuggestRequest: {
    categories: [
      "INVITE_NONUSERS",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `peopleSuggestRequest`                                                                                                   | [components.PeopleSuggestRequest](../../models/components/peoplesuggestrequest.md)                                       | :heavy_check_mark:                                                                                                       | Includes request params for type of suggestions.                                                                         |