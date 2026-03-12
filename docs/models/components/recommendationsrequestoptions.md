# RecommendationsRequestOptions

## Example Usage

```typescript
import { RecommendationsRequestOptions } from "@gleanwork/api-client/models/components";

let value: RecommendationsRequestOptions = {
  facetFilterSets: [
    {
      filters: [
        {
          fieldName: "type",
          values: [
            {
              value: "Spreadsheet",
              relationType: "EQUALS",
            },
            {
              value: "Presentation",
              relationType: "EQUALS",
            },
          ],
        },
      ],
    },
  ],
  context: {
    containerDocument: {
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
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `datasourceFilter`                                                                                                         | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter results to a single datasource name (e.g. gmail, slack). All results are returned if missing.                       |
| `datasourcesFilter`                                                                                                        | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | Filter results to only those relevant to one or more datasources (e.g. jira, gdrive). All results are returned if missing. |
| `facetFilterSets`                                                                                                          | [components.FacetFilterSet](../../models/components/facetfilterset.md)[]                                                   | :heavy_minus_sign:                                                                                                         | A list of facet filter sets that will be OR'ed together.                                                                   |
| `context`                                                                                                                  | [components.Document](../../models/components/document.md)                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `resultProminence`                                                                                                         | [components.SearchResultProminenceEnum](../../models/components/searchresultprominenceenum.md)[]                           | :heavy_minus_sign:                                                                                                         | The types of prominence wanted in results returned. Default is any type.                                                   |