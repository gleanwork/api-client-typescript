# PlatformListAdminAgentsResponse

One page of agents.

## Example Usage

```typescript
import { PlatformListAdminAgentsResponse } from "@gleanwork/api-client/models/components";

let value: PlatformListAdminAgentsResponse = {
  results: [
    {
      agent_id: "mho4lwzylcozgoc2",
      name: "HR Policy Agent",
      capabilities: {},
    },
  ],
  has_more: true,
  request_id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `results`                                                               | [components.PlatformAgent](../../models/components/platformagent.md)[]  | :heavy_check_mark:                                                      | The agents on this page, ordered by name and then by agent_id.          |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | Whether more agents are available after this page.                      |
| `nextCursor`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | Opaque cursor for the next page; null or absent when has_more is false. |
| `requestId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Request identifier for correlating this response.                       |