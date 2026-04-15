# DlpIssueFilter

Filter for DLP issues. Includes document-level filters and issue-specific filters.

## Example Usage

```typescript
import { DlpIssueFilter } from "@gleanwork/api-client/models/components";

let value: DlpIssueFilter = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `searchText`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Text to search for in issue fields.                                      |
| `statuses`                                                               | [components.DlpIssueStatus](../../models/components/dlpissuestatus.md)[] | :heavy_minus_sign:                                                       | Filter by one or more issue statuses.                                    |
| `assigneeId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Filter by assignee user ID.                                              |
| `infoType`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `regexId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `reportIds`                                                              | *string*[]                                                               | :heavy_minus_sign:                                                       | Filter by one or more report/policy IDs.                                 |
| `docId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `datasource`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `visibility`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `severities`                                                             | [components.DlpSeverity](../../models/components/dlpseverity.md)[]       | :heavy_minus_sign:                                                       | Filter by one or more severity levels.                                   |
| `timeRange`                                                              | [components.TimeRangeFilter](../../models/components/timerangefilter.md) | :heavy_minus_sign:                                                       | N/A                                                                      |