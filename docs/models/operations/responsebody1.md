# ResponseBody1

## Example Usage

```typescript
import { ResponseBody1 } from "@gleanwork/api-client/models/operations";

let value: ResponseBody1 = {
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `collection`                                                             | [components.Collection](../../models/components/collection.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `error`                                                                  | [components.CollectionError](../../models/components/collectionerror.md) | :heavy_minus_sign:                                                       | N/A                                                                      |