# CreateannouncementRequest

## Example Usage

```typescript
import { CreateannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: CreateannouncementRequest = {
  createAnnouncementRequest: {
    startTime: new Date("2024-05-23T19:17:22.992Z"),
    endTime: new Date("2024-11-26T23:16:26.570Z"),
    title: "<value>",
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
| `createAnnouncementRequest`                                                                                              | [components.CreateAnnouncementRequest](../../models/components/createannouncementrequest.md)                             | :heavy_check_mark:                                                                                                       | Announcement content                                                                                                     |