# CustomSensitiveExpression

## Example Usage

```typescript
import { CustomSensitiveExpression } from "@gleanwork/api-client/models/components";

let value: CustomSensitiveExpression = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | Identifier for the custom sensitive expression.                                  |
| `keyword`                                                                        | [components.CustomSensitiveRule](../../models/components/customsensitiverule.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `evaluationExpression`                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The expression to evaluate the keyword match.                                    |