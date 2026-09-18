# ChatPersonSource

## Example Usage

```typescript
import { ChatPersonSource } from "@gleanwork/api-client/models/components";

let value: ChatPersonSource = {
  type: "PERSON",
  person_id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"PERSON"*         | :heavy_check_mark: | N/A                |
| `personId`         | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `url`              | *string*           | :heavy_minus_sign: | N/A                |