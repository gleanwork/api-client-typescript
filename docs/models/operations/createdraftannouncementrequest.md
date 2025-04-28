# CreatedraftannouncementRequest

## Example Usage

```typescript
import { CreatedraftannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: CreatedraftannouncementRequest = {
  createDraftAnnouncementRequest: {
    body: {
      text:
        "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [],
    },
    audienceFilters: [
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `createDraftAnnouncementRequest`                                                                                         | [components.CreateDraftAnnouncementRequest](../../models/components/createdraftannouncementrequest.md)                   | :heavy_check_mark:                                                                                                       | Draft announcement content                                                                                               |