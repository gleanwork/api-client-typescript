# ExportInfo

## Example Usage

```typescript
import { ExportInfo } from "@gleanwork/api-client/models/components";

let value: ExportInfo = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `createdBy`                                                                        | [components.DlpPerson](../../models/components/dlpperson.md)                       | :heavy_minus_sign:                                                                 | Details about the person who created this report/policy.                           |
| `startTime`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Timestamp at which this export started.                                            |
| `endTime`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | Timestamp at which this export completed.                                          |
| `exportId`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the export                                                               |
| `fileName`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the file to export the findings to                                     |
| `exportType`                                                                       | [components.ExportInfoExportType](../../models/components/exportinfoexporttype.md) | :heavy_minus_sign:                                                                 | The type of export to perform                                                      |
| `filter`                                                                           | [components.DlpFindingFilter](../../models/components/dlpfindingfilter.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `issueFilter`                                                                      | [components.DlpIssueFilter](../../models/components/dlpissuefilter.md)             | :heavy_minus_sign:                                                                 | Filter for DLP issues. Includes document-level filters and issue-specific filters. |
| `status`                                                                           | [components.ExportInfoStatus](../../models/components/exportinfostatus.md)         | :heavy_minus_sign:                                                                 | The status of the export                                                           |
| `exportSize`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | The size of the exported file in bytes                                             |