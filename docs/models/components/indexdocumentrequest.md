# IndexDocumentRequest

Describes the request body of the /indexdocument API call

## Example Usage

```typescript
import { IndexDocumentRequest } from "@gleanwork/api-client/models/components";

let value: IndexDocumentRequest = {
  document: {
    datasource: "<value>",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `document`                                                                                                      | [components.DocumentDefinition](../../models/components/documentdefinition.md)                                  | :heavy_check_mark:                                                                                              | Indexable document structure                                                                                    |