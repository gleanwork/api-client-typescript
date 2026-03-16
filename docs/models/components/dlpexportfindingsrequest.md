# DlpExportFindingsRequest

## Example Usage

```typescript
import { DlpExportFindingsRequest } from "@gleanwork/api-client/models/components";

let value: DlpExportFindingsRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `exportType`                                                               | [components.ExportType](../../models/components/exporttype.md)             | :heavy_minus_sign:                                                         | The type of export to perform                                              |
| `filter`                                                                   | [components.DlpFindingFilter](../../models/components/dlpfindingfilter.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `fileName`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | The name of the file to export the findings to                             |
| `fieldScope`                                                               | [components.FieldScope](../../models/components/fieldscope.md)             | :heavy_minus_sign:                                                         | Controls which fields to include in the export                             |
| `fieldsToExclude`                                                          | *string*[]                                                                 | :heavy_minus_sign:                                                         | List of field names to exclude from the export                             |