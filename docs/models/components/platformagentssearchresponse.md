# PlatformAgentsSearchResponse

## Example Usage

```typescript
import { PlatformAgentsSearchResponse } from "@gleanwork/api-client/models/components";

let value: PlatformAgentsSearchResponse = {
  agents: [],
  requestId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `agents`                                                               | [components.PlatformAgent](../../models/components/platformagent.md)[] | :heavy_check_mark:                                                     | Agents matching the search request.                                    |
| `requestId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Platform-generated request ID for support correlation.                 |