# UpdateDlpConfigRequest

## Example Usage

```typescript
import { UpdateDlpConfigRequest } from "@gleanwork/api-client/models/components";

let value: UpdateDlpConfigRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `config`                                                                        | [components.DlpConfig](../../models/components/dlpconfig.md)                    | :heavy_minus_sign:                                                              | Detailed configuration of what documents and sensitive content will be scanned. |
| `frequency`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Only "ONCE" is supported for reports.                                           |