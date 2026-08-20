# PlatformTriggerPresetsListRequest

## Example Usage

```typescript
import { PlatformTriggerPresetsListRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggerPresetsListRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `datasource`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Restrict results to presets for a single datasource (e.g. github). |
| `pageSize`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | Maximum number of presets to return.                               |
| `cursor`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Opaque pagination cursor from a previous response.                 |