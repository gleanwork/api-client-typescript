# OperatorMetadata

## Example Usage

```typescript
import { OperatorMetadata } from "@gleanwork/api-client/models/components";

let value: OperatorMetadata = {
  name: "Last Updated",
  operatorType: "DATE",
  scopes: [
    {
      datasource: "GDRIVE",
      docType: "Document",
    },
    {
      datasource: "ZENDESK",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `isCustom`                                                                                                                   | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether this operator is supported by default or something that was created within a workplace app (e.g. custom jira field). |
| `operatorType`                                                                                                               | [components.OperatorType](../../models/components/operatortype.md)                                                           | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `helpText`                                                                                                                   | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `scopes`                                                                                                                     | [components.OperatorScope](../../models/components/operatorscope.md)[]                                                       | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `value`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Raw/canonical value of the operator. Only applies when result is an operator value.                                          |
| `displayValue`                                                                                                               | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Human readable value of the operator that can be shown to the user. Only applies when result is an operator value.           |