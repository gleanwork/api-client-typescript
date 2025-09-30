# ListCollectionsResponse

## Example Usage

```typescript
import { ListCollectionsResponse } from "@gleanwork/api-client/models/components";

let value: ListCollectionsResponse = {
  collections: [],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `collections`                                                    | [components.Collection](../../models/components/collection.md)[] | :heavy_check_mark:                                               | List of all Collections, no Collection items are fetched.        |