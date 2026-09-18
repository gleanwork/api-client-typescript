# ChatCitationAnnotation

## Example Usage

```typescript
import { ChatCitationAnnotation } from "@gleanwork/api-client/models/components";

let value: ChatCitationAnnotation = {
  type: "CITATION",
  sources: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.ChatCitationAnnotationType](../../models/components/chatcitationannotationtype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `sources`                                                                                      | *components.ChatCitationSource*[]                                                              | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `startIndex`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `endIndex`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `snippets`                                                                                     | [components.ChatCitationSnippet](../../models/components/chatcitationsnippet.md)[]             | :heavy_minus_sign:                                                                             | N/A                                                                                            |