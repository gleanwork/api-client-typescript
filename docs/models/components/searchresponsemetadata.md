# SearchResponseMetadata

## Example Usage

```typescript
import { SearchResponseMetadata } from "@gleanwork/api-client/models/components";

let value: SearchResponseMetadata = {
  searchedQueryRanges: [
    {
      startIndex: 278083,
      document: {
        containerDocument: {
          parentDocument: {
            metadata: {
              datasource: "datasource",
              objectType: "Feature Request",
              container: "container",
              parentId: "JIRA_EN-1337",
              mimeType: "mimeType",
              documentId: "documentId",
              createTime: new Date("2000-01-23T04:56:07.000Z"),
              updateTime: new Date("2000-01-23T04:56:07.000Z"),
              author: {
                name: "name",
                obfuscatedId: "<id>",
              },
              components: [
                "Backend",
                "Networking",
              ],
              status: "[\"Done\"]",
              customData: {
                "someCustomField": {},
              },
            },
          },
        },
      },
    },
  ],
  querySuggestion: {
    query: "app:github type:pull author:mortimer",
    label: "Mortimer's PRs",
    datasource: "github",
  },
  additionalQuerySuggestions: {
    suggestions: [
      {
        query: "app:github type:pull author:mortimer",
        label: "Mortimer's PRs",
        datasource: "github",
      },
    ],
    person: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  | Example                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rewrittenQuery`                                                                                                                                                                             | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | A cleaned up or updated version of the query to be displayed in the query box. Useful for mapping visual facets to search operators.                                                         |                                                                                                                                                                                              |
| `searchedQuery`                                                                                                                                                                              | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | The actual query used to perform search and return results.                                                                                                                                  |                                                                                                                                                                                              |
| `searchedQueryRanges`                                                                                                                                                                        | [components.TextRange](../../models/components/textrange.md)[]                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | The bolded ranges within the searched query.                                                                                                                                                 |                                                                                                                                                                                              |
| `originalQuery`                                                                                                                                                                              | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | The query text sent by the client in the request.                                                                                                                                            |                                                                                                                                                                                              |
| `querySuggestion`                                                                                                                                                                            | [components.QuerySuggestion](../../models/components/querysuggestion.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | N/A                                                                                                                                                                                          | {<br/>"query": "app:github type:pull author:mortimer",<br/>"label": "Mortimer's PRs",<br/>"datasource": "github"<br/>}                                                                       |
| `additionalQuerySuggestions`                                                                                                                                                                 | [components.QuerySuggestionList](../../models/components/querysuggestionlist.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                           | N/A                                                                                                                                                                                          |                                                                                                                                                                                              |
| `negatedTerms`                                                                                                                                                                               | *string*[]                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                           | A list of terms that were negated when processing the query.                                                                                                                                 |                                                                                                                                                                                              |
| `modifiedQueryWasUsed`                                                                                                                                                                       | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | A different query was performed than the one requested.                                                                                                                                      |                                                                                                                                                                                              |
| `originalQueryHadNoResults`                                                                                                                                                                  | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | No results were found for the original query. The usage of this bit in conjunction with modifiedQueryWasUsed will dictate whether the full page replacement is 0-result or few-result based. |                                                                                                                                                                                              |
| `searchWarning`                                                                                                                                                                              | [components.SearchWarning](../../models/components/searchwarning.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                           | N/A                                                                                                                                                                                          |                                                                                                                                                                                              |
| `triggeredExpertDetection`                                                                                                                                                                   | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | Whether the query triggered expert detection results in the People tab.                                                                                                                      |                                                                                                                                                                                              |
| `isNoQuotesSuggestion`                                                                                                                                                                       | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | Whether the query was modified to remove quotes                                                                                                                                              |                                                                                                                                                                                              |