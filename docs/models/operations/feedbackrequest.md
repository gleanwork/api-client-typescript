# FeedbackRequest

## Example Usage

```typescript
import { FeedbackRequest } from "@gleanwork/api-client/models/operations";

let value: FeedbackRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `feedbackQueryParameter`                                         | *string*                                                         | :heavy_minus_sign:                                               | A URL encoded versions of Feedback. This is useful for requests. |                                                                  |
| `feedback1`                                                      | [components.Feedback](../../models/components/feedback.md)       | :heavy_minus_sign:                                               | N/A                                                              | {<br/>"trackingTokens": [<br/>"trackingTokens"<br/>],<br/>"event": "VIEW"<br/>} |