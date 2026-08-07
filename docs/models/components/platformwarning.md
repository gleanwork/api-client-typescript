# PlatformWarning

Non-blocking warning attached to a successful Platform response.

## Example Usage

```typescript
import { PlatformWarning } from "@gleanwork/api-client/models/components";

let value: PlatformWarning = {
  code: "results_incomplete",
  message: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Open snake_case warning code. Clients must tolerate unknown values; the set of codes is not a closed enum.<br/> | results_incomplete                                                                                          |
| `message`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Human-readable warning message.                                                                             |                                                                                                             |