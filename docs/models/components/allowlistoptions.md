# AllowlistOptions

Terms that are allow-listed during the scans. If any finding picked up by a rule exactly matches a term in the allow-list, it will not be counted as a violation.

## Example Usage

```typescript
import { AllowlistOptions } from "@gleanwork/api-client/models/components";

let value: AllowlistOptions = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `terms`                                                      | *string*[]                                                   | :heavy_minus_sign:                                           | list of words and phrases to consider as whitelisted content |