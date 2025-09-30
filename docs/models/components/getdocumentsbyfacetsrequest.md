# GetDocumentsByFacetsRequest

## Example Usage

```typescript
import { GetDocumentsByFacetsRequest } from "@gleanwork/api-client/models/components";

let value: GetDocumentsByFacetsRequest = {
  filterSets: [],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `datasourcesFilter`                                                                                                       | *string*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | Filter results to one or more datasources (e.g. gmail, slack). All results are returned if missing.                       |
| `filterSets`                                                                                                              | [components.FacetFilterSet](../../models/components/facetfilterset.md)[]                                                  | :heavy_check_mark:                                                                                                        | A list of facet filter sets that will be OR'ed together. An AND is assumed between different filters in each set.         |
| `cursor`                                                                                                                  | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Pagination cursor. A previously received opaque token representing the position in the overall results at which to start. |