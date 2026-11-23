# PlatformAgentGleanSearchConfig

Glean Search configuration. When omitted, Glean Search is disabled for the agent. An empty object searches all company knowledge available to the invoking user. Populated lists restrict search to the union of the listed datasource instances and URLs.


## Example Usage

```typescript
import { PlatformAgentGleanSearchConfig } from "@gleanwork/api-client/models/components";

let value: PlatformAgentGleanSearchConfig = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `knowledgeProfileId`                                                                                                              | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | ID of a knowledge profile whose permissions Glean Search uses instead of the invoking user's permissions.<br/>                    |
| `datasourceInstances`                                                                                                             | *string*[]                                                                                                                        | :heavy_minus_sign:                                                                                                                | Datasource instance names that search is restricted to. Each name selects one instance, not every instance of a datasource type.<br/> |
| `urls`                                                                                                                            | *string*[]                                                                                                                        | :heavy_minus_sign:                                                                                                                | Document or folder URLs that search is restricted to. Folder URLs include every document contained in the folder.<br/>            |