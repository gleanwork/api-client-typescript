# GetPinResponse

## Example Usage

```typescript
import { GetPinResponse } from "@gleanwork/api-client/models/components";

let value: GetPinResponse = {
  pin: {
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
    documentId: "<id>",
    attribution: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `pin`                                                            | [components.PinDocument](../../models/components/pindocument.md) | :heavy_minus_sign:                                               | N/A                                                              |