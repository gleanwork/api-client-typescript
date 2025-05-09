# PeopleResponse

## Example Usage

```typescript
import { PeopleResponse } from "@gleanwork/api-client/models/components";

let value: PeopleResponse = {
  results: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
  relatedDocuments: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                                  | [components.Person](../../models/components/person.md)[]                                                                                                   | :heavy_minus_sign:                                                                                                                                         | A Person for each ID in the request, each with PersonMetadata populated.                                                                                   |
| `relatedDocuments`                                                                                                                                         | [components.RelatedDocuments](../../models/components/relateddocuments.md)[]                                                                               | :heavy_minus_sign:                                                                                                                                         | A list of documents related to this people response. This is only included if DOCUMENT_ACTIVITY is requested and only 1 person is included in the request. |
| `errors`                                                                                                                                                   | *string*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | A list of IDs that could not be found.                                                                                                                     |