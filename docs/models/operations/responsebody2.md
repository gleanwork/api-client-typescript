# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@gleanwork/api-client/models/operations";

let value: ResponseBody2 = {
  collection: {
    name: "<value>",
    description: "noteworthy acquire below ouch palate nor",
    addedRoles: [],
    removedRoles: [],
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
    id: 446162,
    creator: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    items: [],
    children: [],
    roles: [],
  },
  error: {
    errorCode: "NAME_EXISTS",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `collection`                                                             | [components.Collection](../../models/components/collection.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `error`                                                                  | [components.CollectionError](../../models/components/collectionerror.md) | :heavy_check_mark:                                                       | N/A                                                                      |