# PlatformPersonalRequestCreate

New request for the authenticated canonical user in the server's current UTC month.

## Example Usage

```typescript
import { PlatformPersonalRequestCreate } from "@gleanwork/api-client/models/components";

let value: PlatformPersonalRequestCreate = {
  client_id: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `clientId`                                              | *string*                                                | :heavy_check_mark:                                      | Explicit spend client whose limit the request concerns. |
| `businessJustification`                                 | *string*                                                | :heavy_minus_sign:                                      | Optional explanation of why the increase is needed.     |