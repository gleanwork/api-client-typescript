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
| `feature`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Targeted Glean Chat feature for the suggestion.                         |