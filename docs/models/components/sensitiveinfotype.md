# SensitiveInfoType

## Example Usage

```typescript
import { SensitiveInfoType } from "@gleanwork/api-client/models/components";

let value: SensitiveInfoType = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ~~`likelihoodThreshold`~~                                                                                               | [components.LikelihoodThreshold](../../models/components/likelihoodthreshold.md)                                        | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `infoType`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Text representation of an info-type to scan for.                                                                        |