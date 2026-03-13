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
          role: "VIEWER",
        },
      ],
      removedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          role: "VERIFIER",
        },
      ],
      roles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `createAnswerRequest`                                                                                                                                                                               | [components.CreateAnswerRequest](../../models/components/createanswerrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | CreateAnswer request                                                                                                                                                                                |