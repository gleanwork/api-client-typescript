# PlatformTriggerPresetEventSearchRequest

## Example Usage

```typescript
import { PlatformTriggerPresetEventSearchRequest } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetEventSearchRequest = {
  inputs: {
    "TITLE": "checkout outage",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `inputs`                                                    | Record<string, *string*>                                    | :heavy_minus_sign:                                          | Values for the preset's input fields, keyed by field name.<br/> | {<br/>"TITLE": "checkout outage"<br/>}                      |
| `pageSize`                                                  | *number*                                                    | :heavy_minus_sign:                                          | Maximum number of events to return.                         |                                                             |