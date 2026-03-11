# Disambiguation

A disambiguation between multiple entities with the same name

## Example Usage

```typescript
import { Disambiguation } from "@gleanwork/api-client/models/components";

let value: Disambiguation = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the ambiguous entity                                   |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | The unique id of the entity in the knowledge graph             |
| `type`                                                         | [components.EntityType](../../models/components/entitytype.md) | :heavy_minus_sign:                                             | The type of entity.                                            |