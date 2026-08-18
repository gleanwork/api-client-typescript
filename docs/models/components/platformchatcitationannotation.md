# PlatformChatCitationAnnotation

## Example Usage

```typescript
import { PlatformChatCitationAnnotation } from "@gleanwork/api-client/models/components";

let value: PlatformChatCitationAnnotation = {
  type: "CITATION",
  sources: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.PlatformChatCitationAnnotationType](../../models/components/platformchatcitationannotationtype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sources`                                                                                                      | *components.PlatformChatCitationSource*[]                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startIndex`                                                                                                   | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `endIndex`                                                                                                     | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `snippets`                                                                                                     | [components.PlatformChatCitationSnippet](../../models/components/platformchatcitationsnippet.md)[]             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |