# ChatCustomEntitySource

## Example Usage

```typescript
import { ChatCustomEntitySource } from "@gleanwork/api-client/models/components";

let value: ChatCustomEntitySource = {
  type: "CUSTOM_ENTITY",
  entity_id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"CUSTOM_ENTITY"*  | :heavy_check_mark: | N/A                |
| `entityId`         | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `url`              | *string*           | :heavy_minus_sign: | N/A                |
| `datasource`       | *string*           | :heavy_minus_sign: | N/A                |