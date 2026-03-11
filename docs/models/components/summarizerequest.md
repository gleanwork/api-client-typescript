# SummarizeRequest

Summary of the document

## Example Usage

```typescript
import { SummarizeRequest } from "@gleanwork/api-client/models/components";

let value: SummarizeRequest = {
  documentSpecs: [
    {
      ugcType: "CHATS",
      ugcId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The ISO 8601 timestamp associated with the client request.                                    |
| `query`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional query that the summary should be about                                               |
| `preferredSummaryLength`                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Optional length of summary output. If not given, defaults to 500 chars.                       |
| `documentSpecs`                                                                               | *components.DocumentSpecUnion*[]                                                              | :heavy_check_mark:                                                                            | Specifications of documents to summarize                                                      |
| `trackingToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | An opaque token that represents this particular result. To be used for /feedback reporting.   |