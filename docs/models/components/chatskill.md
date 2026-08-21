# ChatSkill

A skill cited by Assistant.

## Example Usage

```typescript
import { ChatSkill } from "@gleanwork/api-client/models/components";

let value: ChatSkill = {
  id: "<id>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `id`                       | *string*                   | :heavy_check_mark:         | Artifact ID of the skill.  |
| `name`                     | *string*                   | :heavy_minus_sign:         | Name of the skill.         |
| `url`                      | *string*                   | :heavy_minus_sign:         | URL for viewing the skill. |