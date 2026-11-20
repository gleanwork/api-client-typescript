# PlatformAgentServiceCredential

A service credential the agent uses.

## Example Usage

```typescript
import { PlatformAgentServiceCredential } from "@gleanwork/api-client/models/components";

let value: PlatformAgentServiceCredential = {
  service_credential_id: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `serviceCredentialId`         | *string*                      | :heavy_check_mark:            | ID of the service credential. |