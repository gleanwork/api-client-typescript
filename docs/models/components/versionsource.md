# VersionSource

Provenance recorded on the staged commit or published version this import produces. Doesn't change the agent's management mode (workflowSource). GIT: synced from a Git repository. USER: uploaded by a user. Defaults to USER when omitted. Ignored for transient imports.


## Example Usage

```typescript
import { VersionSource } from "@gleanwork/api-client/models/components";

let value: VersionSource = "GIT";
```

## Values

```typescript
"GIT" | "USER"
```