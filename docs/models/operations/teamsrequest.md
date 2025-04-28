# TeamsRequest

## Example Usage

```typescript
import { TeamsRequest } from "@gleanwork/api-client/models/operations";

let value: TeamsRequest = {
  teamsRequest: {
    ids: [
      "abc123",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |                                                                                                                          |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |                                                                                                                          |
| `teamsRequest`                                                                                                           | [components.TeamsRequest](../../models/components/teamsrequest.md)                                                       | :heavy_check_mark:                                                                                                       | Teams request                                                                                                            | {<br/>"ids": [<br/>"abc123"<br/>]<br/>}                                                                                  |