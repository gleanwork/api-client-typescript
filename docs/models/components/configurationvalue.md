# ConfigurationValue

A single configuration value, either a scalar or a list

## Example Usage

```typescript
import { ConfigurationValue } from "@gleanwork/api-client/models/components";

let value: ConfigurationValue = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `value`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | The configuration value as a string. Only one of value or valueList should be populated.          |
| `valueList`                                                                                       | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | The configuration value as a list of strings. Only one of value or valueList should be populated. |