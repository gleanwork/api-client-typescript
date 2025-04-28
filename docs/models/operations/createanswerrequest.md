# CreateanswerRequest

## Example Usage

```typescript
import { CreateanswerRequest } from "@gleanwork/api-client/models/operations";

let value: CreateanswerRequest = {
  createAnswerRequest: {
    data: {
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
          role: "EDITOR",
        },
      ],
      removedRoles: [
        {
          role: "VIEWER",
        },
      ],
      roles: [
        {
          role: "ANSWER_MODERATOR",
        },
      ],
      combinedAnswerText: {
        text:
          "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `createAnswerRequest`                                                                                                    | [components.CreateAnswerRequest](../../models/components/createanswerrequest.md)                                         | :heavy_check_mark:                                                                                                       | CreateAnswer request                                                                                                     |