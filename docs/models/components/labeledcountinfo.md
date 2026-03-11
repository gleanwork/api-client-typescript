# LabeledCountInfo

## Example Usage

```typescript
import { LabeledCountInfo } from "@gleanwork/api-client/models/components";

let value: LabeledCountInfo = {
  label: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `label`                                                        | *string*                                                       | :heavy_check_mark:                                             | Label for the included count information.                      |
| `countInfo`                                                    | [components.CountInfo](../../models/components/countinfo.md)[] | :heavy_minus_sign:                                             | List of data points for counts for a given date period.        |