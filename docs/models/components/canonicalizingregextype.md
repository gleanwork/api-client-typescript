# CanonicalizingRegexType

Regular expression to apply to an arbitrary string to transform it into a canonical string.

## Example Usage

```typescript
import { CanonicalizingRegexType } from "@gleanwork/api-client/models/components";

let value: CanonicalizingRegexType = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `matchRegex`                                             | *string*                                                 | :heavy_minus_sign:                                       | Regular expression to match to an arbitrary string.      |
| `rewriteRegex`                                           | *string*                                                 | :heavy_minus_sign:                                       | Regular expression to transform into a canonical string. |