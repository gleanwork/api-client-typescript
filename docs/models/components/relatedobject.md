# RelatedObject

## Example Usage

```typescript
import { RelatedObject } from "@gleanwork/api-client/models/components";

let value: RelatedObject = {
  id: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | The ID of the related object                                                            |
| `metadata`                                                                              | [components.RelatedObjectMetadata](../../models/components/relatedobjectmetadata.md)    | :heavy_minus_sign:                                                                      | Some metadata of the object which can be displayed, while not having the actual object. |