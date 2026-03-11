# DlpPerson

Details about the person who created this report/policy.

## Example Usage

```typescript
import { DlpPerson } from "@gleanwork/api-client/models/components";

let value: DlpPerson = {
  name: "<value>",
  obfuscatedId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The display name.                                                            |
| `obfuscatedId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | An opaque identifier that can be used to request metadata for a Person.      |
| `metadata`                                                                   | [components.DlpPersonMetadata](../../models/components/dlppersonmetadata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |