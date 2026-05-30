# ChatSuggestion

## Example Usage

```typescript
import { ChatSuggestion } from "@gleanwork/api-client/models/components";

let value: ChatSuggestion = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `query`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | The actionable chat query to run when the user selects this suggestion. |
| `cta`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | Button text to show for the suggestion action.                          |
| `feature`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Targeted Glean Chat feature for the suggestion.                         |
| `sourceDocumentIds`                                                     | *string*[]                                                              | :heavy_minus_sign:                                                      | Document IDs that grounded the suggestion.                              |