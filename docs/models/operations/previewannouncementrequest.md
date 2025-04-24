# PreviewannouncementRequest

## Example Usage

```typescript
import { PreviewannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: PreviewannouncementRequest = {
  structuredTextMutableProperties: {
    text:
      "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `structuredTextMutableProperties`                                                                                        | [components.StructuredTextMutableProperties](../../models/components/structuredtextmutableproperties.md)                 | :heavy_check_mark:                                                                                                       | preview structured text request                                                                                          |