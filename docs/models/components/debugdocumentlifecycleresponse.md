# DebugDocumentLifecycleResponse

Describes the response body of the /debug/{datasource}/document/events API call

## Example Usage

```typescript
import { DebugDocumentLifecycleResponse } from "@gleanwork/api-client/models/components";

let value: DebugDocumentLifecycleResponse = {
  lifeCycleEvents: [
    {
      event: "INDEXED",
      timestamp: "2021-08-06T17:58:01.000Z",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `lifeCycleEvents`                                                        | [components.LifeCycleEvent](../../models/components/lifecycleevent.md)[] | :heavy_minus_sign:                                                       | List of lifecycle events corresponding to the document                   |