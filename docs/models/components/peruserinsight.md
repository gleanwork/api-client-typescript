# PerUserInsight

## Example Usage

```typescript
import { PerUserInsight } from "@gleanwork/api-client/models/components";

let value: PerUserInsight = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `person`                                                              | [components.Person](../../models/components/person.md)                | :heavy_minus_sign:                                                    | N/A                                                                   | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}    |
| `numSearches`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | Total number of searches by this user over the specified time period. |                                                                       |
| `numChats`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Total number of chats by this user over the specified time period.    |                                                                       |