# SummarizeRequest

## Example Usage

```typescript
import { SummarizeRequest } from "@gleanwork/api-client/models/operations";

let value: SummarizeRequest = {
  summarizeRequest: {
    documentSpecs: [
      {
        ugcType: "CHATS",
        ugcId: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `summarizeRequest`                                                                                                                                                                                  | [components.SummarizeRequest](../../models/components/summarizerequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | Includes request params such as the query and specs of the documents to summarize.                                                                                                                  |