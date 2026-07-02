# PlatformSearchResponse

## Example Usage

```typescript
import { PlatformSearchResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSearchResponse = {
  results: [],
  hasMore: true,
  nextCursor: "<value>",
  requestId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `results`                                                                | [components.PlatformResult](../../models/components/platformresult.md)[] | :heavy_check_mark:                                                       | Ordered list of search results.                                          |
| `hasMore`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Indicates whether additional pages of results are available.             |
| `nextCursor`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Opaque token to pass as `cursor` in the next request.                    |
| `requestId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Platform-generated request ID for support correlation.                   |