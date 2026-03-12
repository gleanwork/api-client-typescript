# PinDocument

## Example Usage

```typescript
import { PinDocument } from "@gleanwork/api-client/models/components";

let value: PinDocument = {
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `queries`                                                                                                                    | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | The query strings for which the pinned result will show.                                                                     |                                                                                                                              |
| `audienceFilters`                                                                                                            | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                           | :heavy_minus_sign:                                                                                                           | Filters which restrict who should see the pinned document. Values are taken from the corresponding filters in people search. |                                                                                                                              |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The opaque id of the pin.                                                                                                    |                                                                                                                              |
| `documentId`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The document which should be a pinned result.                                                                                |                                                                                                                              |
| `attribution`                                                                                                                | [components.Person](../../models/components/person.md)                                                                       | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                           |
| `updatedBy`                                                                                                                  | [components.Person](../../models/components/person.md)                                                                       | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                           |
| `createTime`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `updateTime`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |