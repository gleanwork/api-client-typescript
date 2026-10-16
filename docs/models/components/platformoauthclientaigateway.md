# PlatformOAuthClientAiGateway

LLM Gateway details of an OAuth client.

## Example Usage

```typescript
import { PlatformOAuthClientAiGateway } from "@gleanwork/api-client/models/components";

let value: PlatformOAuthClientAiGateway = {
  usage_client_id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `usageClientId`                                                                                                                                                                                  | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The spend-client ID that usage records and usage limits use for this client. Send it as the client_id of a usage limit. It is an opaque, case-sensitive string; do not build it from client_id.<br/> |