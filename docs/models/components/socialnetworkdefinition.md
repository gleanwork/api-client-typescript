# SocialNetworkDefinition

Employee's social network profile

## Example Usage

```typescript
import { SocialNetworkDefinition } from "@gleanwork/api-client/models/components";

let value: SocialNetworkDefinition = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | Possible values are "twitter", "linkedin". |
| `profileName`                              | *string*                                   | :heavy_minus_sign:                         | Human-readable profile name.               |
| `profileUrl`                               | *string*                                   | :heavy_minus_sign:                         | Link to profile.                           |