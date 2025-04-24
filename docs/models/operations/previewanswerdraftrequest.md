# PreviewanswerdraftRequest

## Example Usage

```typescript
import { PreviewanswerdraftRequest } from "@gleanwork/api-client/models/operations";

let value: PreviewanswerdraftRequest = {
  previewUgcRequest: {
    draft: {
      announcement: {
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
      answer: {
        question: "Why is the sky blue?",
        bodyText:
          "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
        addedRoles: [
          {
            person: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            role: "VERIFIER",
          },
        ],
        removedRoles: [
          {
            role: "VERIFIER",
          },
        ],
        roles: [
          {
            role: "VIEWER",
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `previewUgcRequest`                                                                                                      | [components.PreviewUgcRequest](../../models/components/previewugcrequest.md)                                             | :heavy_check_mark:                                                                                                       | preview answer request                                                                                                   |