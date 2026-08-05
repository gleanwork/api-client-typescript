# PlatformAuthenticationSuggestion

One tool the caller must authorize before the agent can run.

## Example Usage

```typescript
import { PlatformAuthenticationSuggestion } from "@gleanwork/api-client/models/components";

let value: PlatformAuthenticationSuggestion = {
  server_id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `toolName`                                                                                                                                                           | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | Human-readable tool name.                                                                                                                                            |
| `serverId`                                                                                                                                                           | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Identifier to POST to `/tool-servers/{serverId}/auth` (Client API) with `returnUrl` in the request body to obtain an `authorizationUrl` to redirect the end user to. |