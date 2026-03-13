# UserReferenceDefinition

Describes how a user is referenced in a document. The user can be referenced by email or by a datasource specific id.

## Example Usage

```typescript
import { UserReferenceDefinition } from "@gleanwork/api-client/models/components";

let value: UserReferenceDefinition = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `email`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `datasourceUserId`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | some datasources refer to the user by the datasource user id in the document |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |