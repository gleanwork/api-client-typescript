# PlatformIdpGroupFilter

A filter on one IdP group field.

## Example Usage

```typescript
import { PlatformIdpGroupFilter } from "@gleanwork/api-client/models/components";

let value: PlatformIdpGroupFilter = {
  field: "<value>",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `field`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The IdP group field to filter on. The only supported field is provider_instance.<br/>                  |
| `values`                                                                                               | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | The values to match. An IdP group matches when any value matches.                                      |
| `operator`                                                                                             | [components.PlatformIdpGroupFilterOperator](../../models/components/platformidpgroupfilteroperator.md) | :heavy_minus_sign:                                                                                     | The only supported operator is EQUALS. Defaults to EQUALS.                                             |