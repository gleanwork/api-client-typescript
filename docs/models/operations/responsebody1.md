# ResponseBody1

## Example Usage

```typescript
import { ResponseBody1 } from "@gleanwork/api-client/models/operations";

let value: ResponseBody1 = {
  collection: {
    name: "<value>",
    description:
      "feline charming fast vibraphone immediately viciously creator",
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
    id: 278414,
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
        description: "design cappelletti kettledrum",
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
        id: 635422,
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `collection`                                                             | [components.Collection](../../models/components/collection.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `error`                                                                  | [components.CollectionError](../../models/components/collectionerror.md) | :heavy_minus_sign:                                                       | N/A                                                                      |