# DlpFindingFilter

## Example Usage

```typescript
import { DlpFindingFilter } from "@gleanwork/api-client/models/components";

let value: DlpFindingFilter = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `infoType`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `regexId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `reportId`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `datasource`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `visibility`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `documentIds`                                                            | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `severity`                                                               | [components.DlpSeverity](../../models/components/dlpseverity.md)         | :heavy_minus_sign:                                                       | Severity levels for DLP findings and analyses.                           |
| `documentSeverity`                                                       | [components.DlpSeverity](../../models/components/dlpseverity.md)[]       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `timeRange`                                                              | [components.TimeRangeFilter](../../models/components/timerangefilter.md) | :heavy_minus_sign:                                                       | N/A                                                                      |