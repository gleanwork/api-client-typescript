# UpdateDlpReportRequest

## Example Usage

```typescript
import { UpdateDlpReportRequest } from "@gleanwork/api-client/models/components";

let value: UpdateDlpReportRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `config`                                                                        | [components.DlpConfig](../../models/components/dlpconfig.md)                    | :heavy_minus_sign:                                                              | Detailed configuration of what documents and sensitive content will be scanned. |
| `frequency`                                                                     | [components.DlpFrequency](../../models/components/dlpfrequency.md)              | :heavy_minus_sign:                                                              | Interval between scans. DAILY is deprecated.                                    |
| `status`                                                                        | [components.DlpReportStatus](../../models/components/dlpreportstatus.md)        | :heavy_minus_sign:                                                              | The status of the policy/report. Only ACTIVE status will be picked for scans.   |
| `autoHideDocs`                                                                  | *boolean*                                                                       | :heavy_minus_sign:                                                              | The new autoHideDoc boolean the policy will be updated to if provided.          |
| `reportName`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | The new name of the policy if provided.                                         |