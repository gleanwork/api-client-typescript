# CustomEntityMetadata

## Example Usage

```typescript
import { CustomEntityMetadata } from "@gleanwork/api-client/models/components";

let value: CustomEntityMetadata = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `customData`                                                                             | Record<string, [components.CustomDataValue](../../models/components/customdatavalue.md)> | :heavy_minus_sign:                                                                       | Custom fields specific to individual datasources                                         |