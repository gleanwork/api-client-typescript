# AddCollectionItemsResponse

## Example Usage

```typescript
import { AddCollectionItemsResponse } from "@gleanwork/api-client/models/components";

let value: AddCollectionItemsResponse = {
  collection: {
    name: "<value>",
    description:
      "impanel importance pale parody towards wildly elementary unbearably",
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
    id: 390864,
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
        description: "viciously creator incidentally hole pecan",
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
        id: 581341,
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