# DlpReport

Full policy information that will be used for scans.

## Example Usage

```typescript
import { DlpReport } from "@gleanwork/api-client/models/components";

let value: DlpReport = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `config`                                                                        | [components.DlpConfig](../../models/components/dlpconfig.md)                    | :heavy_minus_sign:                                                              | Detailed configuration of what documents and sensitive content will be scanned. |
| `frequency`                                                                     | [components.DlpFrequency](../../models/components/dlpfrequency.md)              | :heavy_minus_sign:                                                              | Interval between scans. DAILY is deprecated.                                    |
| `status`                                                                        | [components.DlpReportStatus](../../models/components/dlpreportstatus.md)        | :heavy_minus_sign:                                                              | The status of the policy/report. Only ACTIVE status will be picked for scans.   |
| `createdBy`                                                                     | [components.DlpPerson](../../models/components/dlpperson.md)                    | :heavy_minus_sign:                                                              | Details about the person who created this report/policy.                        |
| `createdAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Timestamp at which the policy was created.                                      |
| `lastUpdatedAt`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | Timestamp at which the policy was last updated.                                 |
| `autoHideDocs`                                                                  | *boolean*                                                                       | :heavy_minus_sign:                                                              | Auto hide documents with findings in the policy.                                |
| `lastScanStatus`                                                                | [components.LastScanStatus](../../models/components/lastscanstatus.md)          | :heavy_minus_sign:                                                              | N/A                                                                             |
| `lastScanStartTime`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | The timestamp at which the report's last run/scan began.                        |
| `updatedBy`                                                                     | [components.DlpPerson](../../models/components/dlpperson.md)                    | :heavy_minus_sign:                                                              | Details about the person who created this report/policy.                        |