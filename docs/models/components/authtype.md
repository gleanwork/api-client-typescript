# AuthType

The type of authentication being used.
Use 'OAUTH_*' when Glean calls an external API (e.g., Jira) on behalf of a user to obtain an OAuth token.
'OAUTH_ADMIN' utilizes an admin token for external API calls on behalf all users.
'OAUTH_USER' uses individual user tokens for external API calls.
'DWD' refers to domain wide delegation.


## Example Usage

```typescript
import { AuthType } from "@gleanwork/api-client/models/components";

let value: AuthType = "OAUTH_ADMIN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NONE" | "OAUTH_USER" | "OAUTH_ADMIN" | "API_KEY" | "BASIC_AUTH" | "DWD" | Unrecognized<string>
```