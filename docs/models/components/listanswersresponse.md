# ListAnswersResponse

## Example Usage

```typescript
import { ListAnswersResponse } from "@gleanwork/api-client/models/components";

let value: ListAnswersResponse = {
  answerResults: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `answerResults`                                                      | [components.AnswerResult](../../models/components/answerresult.md)[] | :heavy_check_mark:                                                   | List of answers with tracking tokens.                                |