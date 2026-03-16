# CustomerMetadata

## Example Usage

```typescript
import { CustomerMetadata } from "@gleanwork/api-client/models/components";

let value: CustomerMetadata = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `datasourceId`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | The user visible id of the salesforce customer account.                                  |
| `customData`                                                                             | Record<string, [components.CustomDataValue](../../models/components/customdatavalue.md)> | :heavy_minus_sign:                                                                       | Custom fields specific to individual datasources                                         |