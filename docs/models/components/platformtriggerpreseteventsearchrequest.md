# PlatformTriggerPresetEventSearchRequest

## Example Usage

```typescript
import { PlatformTriggerPresetEventSearchRequest } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetEventSearchRequest = {
  inputs: {
    "repository": "acme/payments-api",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `inputs`                                                    | Record<string, *string*>                                    | :heavy_minus_sign:                                          | Values for the preset's input fields, keyed by field name.<br/> | {<br/>"repository": "acme/payments-api"<br/>}               |
| `pageSize`                                                  | *number*                                                    | :heavy_minus_sign:                                          | Maximum number of events to return.                         |                                                             |