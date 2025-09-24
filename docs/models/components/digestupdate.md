# DigestUpdate

## Example Usage

```typescript
import { DigestUpdate } from "@gleanwork/api-client/models/components";

let value: DigestUpdate = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `url`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | URL link to the content or document.                                   |
| `title`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Title or headline of the update.                                       |
| `datasource`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | Name or identifier of the data source (e.g., slack, confluence, etc.). |
| `summary`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Brief summary or description of the update content.                    |
| `type`                                                                 | [components.UpdateType](../../models/components/updatetype.md)         | :heavy_minus_sign:                                                     | Optional type classification for the update.                           |