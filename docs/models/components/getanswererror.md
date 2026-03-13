# GetAnswerError

## Example Usage

```typescript
import { GetAnswerError } from "@gleanwork/api-client/models/components";

let value: GetAnswerError = {
  answerAuthor: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `errorType`                                                                              | [components.GetAnswerErrorErrorType](../../models/components/getanswererrorerrortype.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `answerAuthor`                                                                           | [components.Person](../../models/components/person.md)                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                       |