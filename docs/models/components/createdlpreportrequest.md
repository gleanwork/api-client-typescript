# CreateDlpReportRequest

## Example Usage

```typescript
import { CreateDlpReportRequest } from "@gleanwork/api-client/models/components";

let value: CreateDlpReportRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Name of the policy being created.                                               |
| `config`                                                                        | [components.DlpConfig](../../models/components/dlpconfig.md)                    | :heavy_minus_sign:                                                              | Detailed configuration of what documents and sensitive content will be scanned. |
| `frequency`                                                                     | [components.DlpFrequency](../../models/components/dlpfrequency.md)              | :heavy_minus_sign:                                                              | Interval between scans. DAILY is deprecated.                                    |
| `autoHideDocs`                                                                  | *boolean*                                                                       | :heavy_minus_sign:                                                              | Controls whether the policy should hide documents with violations.              |