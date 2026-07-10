# ServerToolResponse

Response to a server tool request. The applicable fields depend on requestType:

For EXECUTION requests:
- isGranted: whether tool execution is approved
- reason: optional explanation

For AUTHENTICATION_SUGGESTION requests:
- isGranted: whether auth completed successfully (true=connected, false=skipped)
- authContext: contains serverId or actionPackId for identifying the authenticated entity
- reason: optional explanation for skip

For VOTE_SUGGESTION requests:
- voted: whether the user voted for this tool


## Example Usage

```typescript
import { ServerToolResponse } from "@gleanwork/api-client/models/components";

let value: ServerToolResponse = {
  requestType: "VOTE_SUGGESTION",
  requestId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestType`                                                                                        | [components.ServerToolResponseRequestType](../../models/components/servertoolresponserequesttype.md) | :heavy_check_mark:                                                                                   | The type of request made to the user.                                                                |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique identifier for this request.                                                                  |
| `isGranted`                                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether tool request is granted (indicates approval for execution, or completion for auth).          |
| `grantScope`                                                                                         | [components.GrantScope](../../models/components/grantscope.md)                                       | :heavy_minus_sign:                                                                                   | Scope of the approval grant. Only applicable when isGranted is true and requestType is EXECUTION.<br/> |
| `authContext`                                                                                        | [components.AuthContext](../../models/components/authcontext.md)                                     | :heavy_minus_sign:                                                                                   | Context for authentication responses, containing identifiers for the entity being authenticated.<br/> |