# ContentDefinition

Describes text content or base64 encoded binary content

## Example Usage

```typescript
import { ContentDefinition } from "@gleanwork/api-client/models/components";

let value: ContentDefinition = {
  mimeType: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mimeType`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `textContent`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | text content. Only one of textContent or binary content can be specified                  |
| `binaryContent`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | base64 encoded binary content. Only one of textContent or binary content can be specified |