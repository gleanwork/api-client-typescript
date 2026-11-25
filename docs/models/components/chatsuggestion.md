# ChatSuggestion

## Example Usage

```typescript
import { ChatSuggestion } from "@gleanwork/api-client/models/components";

let value: ChatSuggestion = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The actionable chat query to run when the user selects this suggestion.                                    |
| `cta`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Button text to show for the suggestion action.                                                             |
| `shortTitle`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A shorter version of the suggestion's title for one-line lists. Fall back to the entry's title when empty. |
| `feature`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Targeted Glean Chat feature for the suggestion.                                                            |
| `artifactType`                                                                                             | [components.ArtifactType](../../models/components/artifacttype.md)                                         | :heavy_minus_sign:                                                                                         | Type of the Artifact                                                                                       |
| `sourceDocumentIds`                                                                                        | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Document IDs that grounded the suggestion.                                                                 |