# SearchResponse

## Example Usage

```typescript
import { SearchResponse } from "@gleanwork/api-client/models/components";

let value: SearchResponse = {
  trackingToken: "trackingToken",
  results: [
    {
      title: "title",
      url: "https://www.example.com/",
      snippets: [],
    },
    {
      title: "title",
      url: "https://www.example.com/",
    },
  ],
  gleanDataError: {
    errorMessages: [
      {
        source: "gmail",
        errorMessage: "invalid token",
      },
      {
        source: "slack",
        errorMessage: "expired token",
      },
    ],
  },
  requestID:
    "5e345ae500ff0befa2b9d1a3ba0001737e7363696f312d323535323137000171756572792d656e64706f696e743a323032303031333074313830343032000100",
  facetResults: [
    {
      sourceName: "sourceName",
      operatorName: "operatorName",
      buckets: [
        {
          count: 1,
          percentage: 5,
          value: {
            stringValue: "stringValue",
            integerValue: 5,
          },
        },
        {
          count: 1,
          percentage: 5,
          value: {
            stringValue: "stringValue",
            integerValue: 5,
          },
        },
      ],
    },
    {
      sourceName: "sourceName",
      operatorName: "operatorName",
      buckets: [
        {
          count: 1,
          percentage: 5,
          value: {
            stringValue: "stringValue",
            integerValue: 5,
          },
        },
        {
          count: 1,
          percentage: 5,
          value: {
            stringValue: "stringValue",
            integerValue: 5,
          },
        },
      ],
    },
  ],
  rewrittenFacetFilters: [
    {
      fieldName: "fieldName",
      values: [
        {},
        {},
      ],
    },
    {
      fieldName: "fieldName",
      values: [
        {},
        {},
      ],
    },
  ],
  hasMoreResults: true,
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `trackingToken`                                                                                                                             | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | A token that should be passed for additional requests related to this request (such as more results requests).                              |                                                                                                                                             |
| `sessionInfo`                                                                                                                               | [components.SessionInfo](../../models/components/sessioninfo.md)                                                                            | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `results`                                                                                                                                   | [components.SearchResult](../../models/components/searchresult.md)[]                                                                        | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `structuredResults`                                                                                                                         | [components.StructuredResult](../../models/components/structuredresult.md)[]                                                                | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `generatedQnaResult`                                                                                                                        | [components.GeneratedQna](../../models/components/generatedqna.md)                                                                          | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `gleanDataError`                                                                                                                            | [components.GleanDataError](../../models/components/gleandataerror.md)                                                                      | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `requestID`                                                                                                                                 | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | A platform-generated request ID to correlate backend logs.                                                                                  |                                                                                                                                             |
| `backendTimeMillis`                                                                                                                         | *number*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Time in milliseconds the backend took to respond to the request.                                                                            | 1100                                                                                                                                        |
| `experimentIds`                                                                                                                             | *number*[]                                                                                                                                  | :heavy_minus_sign:                                                                                                                          | List of experiment ids for the corresponding request.                                                                                       |                                                                                                                                             |
| `metadata`                                                                                                                                  | [components.SearchResponseMetadata](../../models/components/searchresponsemetadata.md)                                                      | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `facetResults`                                                                                                                              | [components.FacetResult](../../models/components/facetresult.md)[]                                                                          | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `resultTabs`                                                                                                                                | [components.ResultTab](../../models/components/resulttab.md)[]                                                                              | :heavy_minus_sign:                                                                                                                          | All result tabs available for the current query. Populated if QUERY_METADATA is specified in the request.                                   |                                                                                                                                             |
| `resultTabIds`                                                                                                                              | *string*[]                                                                                                                                  | :heavy_minus_sign:                                                                                                                          | The unique IDs of the result tabs to which this response belongs.                                                                           |                                                                                                                                             |
| `resultsDescription`                                                                                                                        | [components.ResultsDescription](../../models/components/resultsdescription.md)                                                              | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `rewrittenFacetFilters`                                                                                                                     | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                                          | :heavy_minus_sign:                                                                                                                          | The actual applied facet filters based on the operators and facetFilters in the query. Useful for mapping typed operators to visual facets. |                                                                                                                                             |
| `cursor`                                                                                                                                    | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Cursor that indicates the start of the next page of results. To be passed in "more" requests for this query.                                |                                                                                                                                             |
| `hasMoreResults`                                                                                                                            | *boolean*                                                                                                                                   | :heavy_minus_sign:                                                                                                                          | Whether more results are available. Use cursor to retrieve them.                                                                            |                                                                                                                                             |