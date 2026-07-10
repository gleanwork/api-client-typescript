# AuthContext

Context for authentication responses, containing identifiers for the entity being authenticated.


## Example Usage

```typescript
import { AuthContext } from "@gleanwork/api-client/models/components";

let value: AuthContext = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `serverId`                                             | *string*                                               | :heavy_minus_sign:                                     | ID of the MCP server (populated when toolType is MCP). |