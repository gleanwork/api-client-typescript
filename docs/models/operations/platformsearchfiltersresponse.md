# PlatformSearchFiltersResponse

## Example Usage

```typescript
import { PlatformSearchFiltersResponse } from "@gleanwork/api-client/models/operations";

let value: PlatformSearchFiltersResponse = {
  Headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    datasources: [],
    request_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.PlatformSearchFiltersResponse](../../models/components/platformsearchfiltersresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |