# PlatformPersonReference

A lightweight reference to a person, used where a payload merely points at someone.

## Example Usage

```typescript
import { PlatformPersonReference } from "@gleanwork/api-client/models/components";

let value: PlatformPersonReference = {
  name: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_minus_sign:      | Opaque Glean person ID. |
| `name`                  | *string*                | :heavy_check_mark:      | Display name.           |