# PlatformLimitIncreaseRequestSettings

Settings that govern usage limit increase requests.


## Example Usage

```typescript
import { PlatformLimitIncreaseRequestSettings } from "@gleanwork/api-client/models/components";

let value: PlatformLimitIncreaseRequestSettings = {
  business_justification: "OPTIONAL",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `businessJustification`                                                               | [components.BusinessJustification](../../models/components/businessjustification.md)  | :heavy_check_mark:                                                                    | Whether a business justification is required when requesting a usage limit increase.<br/> |