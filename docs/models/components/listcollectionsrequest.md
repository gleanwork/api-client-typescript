# ListCollectionsRequest

## Example Usage

```typescript
import { ListCollectionsRequest } from "@gleanwork/api-client/models/components";

let value: ListCollectionsRequest = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `includeAudience`                                                                                  | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether to include the audience filters with the listed Collections.                               |
| `includeRoles`                                                                                     | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether to include the editor roles with the listed Collections.                                   |
| `allowedDatasource`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The datasource type this Collection can hold.<br/>ANSWERS - for Collections representing answer boards |