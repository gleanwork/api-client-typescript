# FeedbackRequest

## Example Usage

```typescript
import { FeedbackRequest } from "@gleanwork/api-client/models/operations";

let value: FeedbackRequest = {
  feedback1: {
    trackingTokens: [
      "trackingTokens",
    ],
    event: "VIEW",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |                                                                                                                          |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |                                                                                                                          |
| `feedbackQueryParameter`                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A URL encoded versions of Feedback. This is useful for requests.                                                         |                                                                                                                          |
| `feedback1`                                                                                                              | [components.Feedback](../../models/components/feedback.md)                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"trackingTokens": [<br/>"trackingTokens"<br/>],<br/>"event": "VIEW"<br/>}                                          |