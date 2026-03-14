# FeedRequestOptions

## Example Usage

```typescript
import { FeedRequestOptions } from "@gleanwork/api-client/models/components";

let value: FeedRequestOptions = {
  resultSize: 904362,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `resultSize`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Number of results asked in response. If a result is a collection, counts as one.                           |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `categoryToResultSize`                                                                                     | Record<string, [components.CategoryToResultSize](../../models/components/categorytoresultsize.md)>         | :heavy_minus_sign:                                                                                         | Mapping from category to number of results asked for the category.                                         |
| `datasourceFilter`                                                                                         | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Datasources for which content should be included. Empty is for all.                                        |
| `chatZeroStateSuggestionOptions`                                                                           | [components.ChatZeroStateSuggestionOptions](../../models/components/chatzerostatesuggestionoptions.md)     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |