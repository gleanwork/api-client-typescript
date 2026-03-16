# PersonDistance

## Example Usage

```typescript
import { PersonDistance } from "@gleanwork/api-client/models/components";

let value: PersonDistance = {
  name: "<value>",
  obfuscatedId: "<id>",
  distance: 2771.12,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The display name.                                                                    |
| `obfuscatedId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | An opaque identifier that can be used to request metadata for a Person.              |
| `distance`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Distance to person, refer to PeopleDistance pipeline on interpretation of the value. |