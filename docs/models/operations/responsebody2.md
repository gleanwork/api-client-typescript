# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@gleanwork/api-client/models/operations";

let value: ResponseBody2 = {
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