# SearchProviderInfo

## Example Usage

```typescript
import { SearchProviderInfo } from "@gleanwork/api-client/models/components";

let value: SearchProviderInfo = {
  name: "Google",
  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Name of the search provider.                                                                                                  |
| `logoUrl`                                                                                                                     | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | URL to the provider's logo.                                                                                                   |
| `searchLinkUrlTemplate`                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | URL template that can be used to perform the suggested search by replacing the {query} placeholder with the query suggestion. |