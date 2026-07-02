# AddCollectionItemsResponse

## Example Usage

```typescript
import { AddCollectionItemsResponse } from "@gleanwork/api-client/models/components";

let value: AddCollectionItemsResponse = {
  collection: {
    name: "<value>",
    description: "chiffonier shore even once colossal even instead",
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
    id: 769160,
    creator: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    children: [
      {
        name: "<value>",
        description: "vice queasy mushy",
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
        id: 105739,
        creator: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        updatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `collection`                                                                             | [components.Collection](../../models/components/collection.md)                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `error`                                                                                  | [components.AddCollectionItemsError](../../models/components/addcollectionitemserror.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |