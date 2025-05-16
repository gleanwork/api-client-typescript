# SensitiveContentOptions

Options for defining sensitive content within scanned documents.

## Example Usage

```typescript
import { SensitiveContentOptions } from "@gleanwork/api-client/models/components";

let value: SensitiveContentOptions = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `sensitiveInfoTypes`                                                                                                                            | [components.SensitiveInfoType](../../models/components/sensitiveinfotype.md)[]                                                                  | :heavy_minus_sign:                                                                                                                              | Predefined categories of terms to consider as sensitive content. See https://cloud.google.com/dlp/docs/infotypes-reference for available types. |
| `sensitiveTerms`                                                                                                                                | [components.SensitiveExpression](../../models/components/sensitiveexpression.md)[]                                                              | :heavy_minus_sign:                                                                                                                              | list of words and phrases to consider as sensitive content                                                                                      |
| `sensitiveRegexes`                                                                                                                              | [components.SensitiveExpression](../../models/components/sensitiveexpression.md)[]                                                              | :heavy_minus_sign:                                                                                                                              | list of regular expressions to consider as sensitive content                                                                                    |