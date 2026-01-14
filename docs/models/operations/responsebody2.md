# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@gleanwork/api-client/models/operations";

let value: ResponseBody2 = {
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
  error: {
    errorCode: "CONCURRENT_HIERARCHY_EDIT",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `collection`                                                             | [components.Collection](../../models/components/collection.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `error`                                                                  | [components.CollectionError](../../models/components/collectionerror.md) | :heavy_check_mark:                                                       | N/A                                                                      |