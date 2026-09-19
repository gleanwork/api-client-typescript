# PlatformChatOutputTextContent

## Example Usage

```typescript
import { PlatformChatOutputTextContent } from "@gleanwork/api-client/models/components";

let value: PlatformChatOutputTextContent = {
  type: "OUTPUT_TEXT",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                          | [components.PlatformChatOutputTextContentType](../../models/components/platformchatoutputtextcontenttype.md)                                    | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `text`                                                                                                                                          | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `structuredOutput`                                                                                                                              | [components.StructuredOutput](../../models/components/structuredoutput.md)                                                                      | :heavy_minus_sign:                                                                                                                              | Parsed and validated JSON object when structured output was requested. Present only when the request included `text.format.type: JSON_SCHEMA`.<br/> |
| `annotations`                                                                                                                                   | [components.PlatformChatCitationAnnotation](../../models/components/platformchatcitationannotation.md)[]                                        | :heavy_minus_sign:                                                                                                                              | N/A                                                                                                                                             |