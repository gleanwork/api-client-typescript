# GetDocPermissionsResponse

## Example Usage

```typescript
import { GetDocPermissionsResponse } from "@gleanwork/api-client/models/components";

let value: GetDocPermissionsResponse = {};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedUserEmails`                                                                                                                                            | *string*[]                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                             | A list of emails of users who have access to the document. If the document is visible to all Glean users, a list with only a single value of 'VISIBLE_TO_ALL'. |