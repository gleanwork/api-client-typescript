# GleanDataError

## Example Usage

```typescript
import { GleanDataError } from "@gleanwork/api-client/models/components";

let value: GleanDataError = {
  unauthorizedDatasourceInstances: [
    {
      datasourceInstance: "slack_0",
      displayName: "Slack",
    },
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `badGmailToken`                                                                                                   | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Indicates the gmail results could not be fetched due to bad token.                                                |
| `badOutlookToken`                                                                                                 | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Indicates the outlook results could not be fetched due to bad token.                                              |
| `invalidOperators`                                                                                                | [components.InvalidOperatorValueError](../../models/components/invalidoperatorvalueerror.md)[]                    | :heavy_minus_sign:                                                                                                | Indicates results could not be fetched due to invalid operators in the query.                                     |
| `errorMessages`                                                                                                   | [components.ErrorMessage](../../models/components/errormessage.md)[]                                              | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `federatedSearchRateLimitError`                                                                                   | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Indicates the federated search results could not be fetched due to rate limiting.                                 |
| `unauthorizedDatasourceInstances`                                                                                 | [components.UnauthorizedDatasourceInstance](../../models/components/unauthorizeddatasourceinstance.md)[]          | :heavy_minus_sign:                                                                                                | Datasource instances that could not be queried because the user has not completed or has expired per-user OAuth.<br/> |