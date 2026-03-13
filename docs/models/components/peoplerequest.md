# PeopleRequest

## Example Usage

```typescript
import { PeopleRequest } from "@gleanwork/api-client/models/components";

let value: PeopleRequest = {
  obfuscatedIds: [
    "abc123",
    "abc456",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `obfuscatedIds`                                                                                            | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The Person IDs to retrieve. If no IDs are requested, the current user's details are returned.              |
| `emailIds`                                                                                                 | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The email IDs to retrieve. The result is the deduplicated union of emailIds and obfuscatedIds.             |
| `includeFields`                                                                                            | [components.PeopleRequestIncludeField](../../models/components/peoplerequestincludefield.md)[]             | :heavy_minus_sign:                                                                                         | List of PersonMetadata fields to return (that aren't returned by default)                                  |
| `includeTypes`                                                                                             | [components.IncludeType](../../models/components/includetype.md)[]                                         | :heavy_minus_sign:                                                                                         | The types of people entities to include in the response in addition to those returned by default.          |
| `source`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A string denoting the search surface from which the endpoint is called.                                    |