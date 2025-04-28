# PeoplesuggestadminRequest

## Example Usage

```typescript
import { PeoplesuggestadminRequest } from "@gleanwork/api-client/models/operations";

let value: PeoplesuggestadminRequest = {
  peopleSuggestRequest: {
    categories: [
      "INVITE_INACTIVE_PROMO",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `peopleSuggestRequest`                                                                                                   | [components.PeopleSuggestRequest](../../models/components/peoplesuggestrequest.md)                                       | :heavy_check_mark:                                                                                                       | Includes request params for type of suggestions.                                                                         |