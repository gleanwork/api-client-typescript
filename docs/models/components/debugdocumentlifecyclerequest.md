# DebugDocumentLifecycleRequest

Describes the request body of the /debug/{datasource}/document/events API call.

## Example Usage

```typescript
import { DebugDocumentLifecycleRequest } from "@gleanwork/api-client/models/components";

let value: DebugDocumentLifecycleRequest = {
  objectType: "Article",
  docId: "art123",
  startDate: "2025-05-01",
  maxEvents: 50,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `objectType`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | Object type of the document to get lifecycle events for.                                           | Article                                                                                            |
| `docId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Glean Document ID within the datasource to get lifecycle events for.                               | art123                                                                                             |
| `startDate`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The start date for events to be fetched. Cannot be more than 30 days (default 7 days) in the past. | 2025-05-01                                                                                         |
| `maxEvents`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Max number of events to be fetched. Cannot be more than 100 (default 20).                          | 50                                                                                                 |