# CustomFieldValuePerson

## Example Usage

```typescript
import { CustomFieldValuePerson } from "@gleanwork/api-client/models/components";

let value: CustomFieldValuePerson = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `person`                                               | [components.Person](../../models/components/person.md) | :heavy_minus_sign:                                     | N/A                                                    | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>} |