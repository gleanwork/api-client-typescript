# CustomMetadataPropertyDefinition

The definition for a key within a Custom Metadata schema. Only the fields applicable to Custom Metadata are exposed.

## Example Usage

```typescript
import { CustomMetadataPropertyDefinition } from "@gleanwork/api-client/models/components";

let value: CustomMetadataPropertyDefinition = {
  name: "<value>",
  propertyType: "PICKLIST",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The name of the metadata key.                                                                                                      |
| `propertyType`                                                                                                                     | [components.CustomMetadataPropertyDefinitionPropertyType](../../models/components/custommetadatapropertydefinitionpropertytype.md) | :heavy_check_mark:                                                                                                                 | The type of metadata key. This governs the search and faceting behavior.                                                           |
| `skipIndexing`                                                                                                                     | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | If true then the property will not be indexed for retrieval and ranking.                                                           |