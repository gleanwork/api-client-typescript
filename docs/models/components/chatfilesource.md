# ChatFileSource

## Example Usage

```typescript
import { ChatFileSource } from "@gleanwork/api-client/models/components";

let value: ChatFileSource = {
  type: "FILE",
  file_id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"FILE"*           | :heavy_check_mark: | N/A                |
| `fileId`           | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `url`              | *string*           | :heavy_minus_sign: | N/A                |
| `datasource`       | *string*           | :heavy_minus_sign: | N/A                |