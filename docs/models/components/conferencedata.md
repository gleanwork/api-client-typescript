# ConferenceData

## Example Usage

```typescript
import { ConferenceData } from "@gleanwork/api-client/models/components";

let value: ConferenceData = {
  provider: "ZOOM",
  uri: "https://oval-palate.net",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `provider`                                                                         | [components.Provider](../../models/components/provider.md)                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `uri`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | A permalink for the conference.                                                    |
| `source`                                                                           | [components.ConferenceDataSource](../../models/components/conferencedatasource.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |