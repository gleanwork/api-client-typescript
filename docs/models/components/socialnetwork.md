# SocialNetwork

## Example Usage

```typescript
import { SocialNetwork } from "@gleanwork/api-client/models/components";

let value: SocialNetwork = {
  name: "<value>",
  profileUrl: "https://heavenly-ownership.com",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | Possible values are "twitter", "linkedin". |
| `profileName`                              | *string*                                   | :heavy_minus_sign:                         | Human-readable profile name.               |
| `profileUrl`                               | *string*                                   | :heavy_check_mark:                         | Link to profile.                           |