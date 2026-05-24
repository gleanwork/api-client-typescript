# CustomMetadataPutRequest

Request body for adding or updating custom metadata on a document

## Example Usage

```typescript
import { CustomMetadataPutRequest } from "@gleanwork/api-client/models/components";

let value: CustomMetadataPutRequest = {
  customMetadata: [
    {},
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `customMetadata`                                                         | [components.CustomProperty](../../models/components/customproperty.md)[] | :heavy_check_mark:                                                       | Array of custom metadata key-value pairs                                 |