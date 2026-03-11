# AnswerLike

## Example Usage

```typescript
import { AnswerLike } from "@gleanwork/api-client/models/components";

let value: AnswerLike = {
  user: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `user`                                                                                        | [components.Person](../../models/components/person.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                            |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the user liked the answer in ISO format (ISO 8601).                                  |                                                                                               |