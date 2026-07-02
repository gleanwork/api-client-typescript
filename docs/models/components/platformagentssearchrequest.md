# PlatformAgentsSearchRequest

## Example Usage

```typescript
import { PlatformAgentsSearchRequest } from "@gleanwork/api-client/models/components";

let value: PlatformAgentsSearchRequest = {
  name: "HR Policy Agent",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Case-insensitive substring to match against agent names. If omitted or empty, no name filter is applied. | HR Policy Agent                                                                                          |