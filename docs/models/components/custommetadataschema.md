# CustomMetadataSchema

Schema for custom metadata containing metadata key definitions

## Example Usage

```typescript
import { CustomMetadataSchema } from "@gleanwork/api-client/models/components";

let value: CustomMetadataSchema = {
  metadataKeys: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `metadataKeys`                                                                                               | [components.CustomMetadataPropertyDefinition](../../models/components/custommetadatapropertydefinition.md)[] | :heavy_check_mark:                                                                                           | Array of metadata key definitions                                                                            |