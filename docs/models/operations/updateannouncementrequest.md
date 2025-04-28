# UpdateannouncementRequest

## Example Usage

```typescript
import { UpdateannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: UpdateannouncementRequest = {
  updateAnnouncementRequest: {
    startTime: new Date("2024-08-06T01:29:54.751Z"),
    endTime: new Date("2024-06-28T13:45:35.258Z"),
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
    id: 940454,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `updateAnnouncementRequest`                                                                                              | [components.UpdateAnnouncementRequest](../../models/components/updateannouncementrequest.md)                             | :heavy_check_mark:                                                                                                       | Announcement content. Id need to be specified for the announcement.                                                      |