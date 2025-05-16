# SensitiveExpression

## Example Usage

```typescript
import { SensitiveExpression } from "@gleanwork/api-client/models/components";

let value: SensitiveExpression = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `expression`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Sensitive word, phrase, or regular expression.                                                        |
| `hotwords`                                                                                            | [components.Hotword](../../models/components/hotword.md)[]                                            | :heavy_minus_sign:                                                                                    | Zero to three proximate regular expressions necessary to consider an expression as sensitive content. |