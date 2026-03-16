# PersonObject

## Example Usage

```typescript
import { PersonObject } from "@gleanwork/api-client/models/components";

let value: PersonObject = {
  name: "<value>",
  obfuscatedId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | The display name.                                                       |
| `obfuscatedId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | An opaque identifier that can be used to request metadata for a Person. |