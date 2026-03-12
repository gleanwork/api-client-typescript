# DatasourceObjectTypeDocumentCountEntry

## Example Usage

```typescript
import { DatasourceObjectTypeDocumentCountEntry } from "@gleanwork/api-client/models/components";

let value: DatasourceObjectTypeDocumentCountEntry = {
  objectType: "Article",
  count: 15,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `objectType`                                            | *string*                                                | :heavy_minus_sign:                                      | The object type of the document                         | Article                                                 |
| `count`                                                 | *number*                                                | :heavy_minus_sign:                                      | The number of documents of the corresponding objectType | 15                                                      |