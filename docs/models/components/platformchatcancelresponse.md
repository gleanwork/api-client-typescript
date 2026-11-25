# PlatformChatCancelResponse

Confirmation that the cancel request was handled.

## Example Usage

```typescript
import { PlatformChatCancelResponse } from "@gleanwork/api-client/models/components";

let value: PlatformChatCancelResponse = {
  request_id: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `requestId`                     | *string*                        | :heavy_check_mark:              | An identifier for this request. |