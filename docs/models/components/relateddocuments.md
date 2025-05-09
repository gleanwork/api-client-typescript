# RelatedDocuments

## Example Usage

```typescript
import { RelatedDocuments } from "@gleanwork/api-client/models/components";

let value: RelatedDocuments = {
  querySuggestion: {
    query: "app:github type:pull author:mortimer",
    label: "Mortimer's PRs",
    datasource: "github",
  },
  results: [
    {
      title: "title",
      url: "https://example.com/foo/bar",
      nativeAppUrl: "slack://foo/bar",
      snippets: [
        {
          snippet: "snippet",
          mimeType: "mimeType",
        },
      ],
      mustIncludeSuggestions: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  | Example                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `relation`                                                                                                                                                                                   | [components.Relation](../../models/components/relation.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                           | How this document relates to the including entity.                                                                                                                                           |                                                                                                                                                                                              |
| `associatedEntityId`                                                                                                                                                                         | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | Which entity in the response that this entity relates to. Relevant when there are multiple entities associated with the response (such as merged customers)                                  |                                                                                                                                                                                              |
| `querySuggestion`                                                                                                                                                                            | [components.QuerySuggestion](../../models/components/querysuggestion.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | N/A                                                                                                                                                                                          | {<br/>"query": "app:github type:pull author:mortimer",<br/>"label": "Mortimer's PRs",<br/>"datasource": "github"<br/>}                                                                       |
| ~~`documents`~~                                                                                                                                                                              | [components.Document](../../models/components/document.md)[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>A truncated list of documents with this relation. TO BE DEPRECATED. |                                                                                                                                                                                              |
| `results`                                                                                                                                                                                    | [components.SearchResult](../../models/components/searchresult.md)[]                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                           | A truncated list of documents associated with this relation. To be used in favor of `documents` because it contains a trackingToken.                                                         |                                                                                                                                                                                              |