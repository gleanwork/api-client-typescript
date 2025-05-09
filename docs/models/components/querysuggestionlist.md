# QuerySuggestionList

## Example Usage

```typescript
import { QuerySuggestionList } from "@gleanwork/api-client/models/components";

let value: QuerySuggestionList = {
  suggestions: [
    {
      query: "app:github type:pull author:mortimer",
      label: "Mortimer's PRs",
      datasource: "github",
    },
  ],
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `suggestions`                                                              | [components.QuerySuggestion](../../models/components/querysuggestion.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `person`                                                                   | [components.Person](../../models/components/person.md)                     | :heavy_minus_sign:                                                         | N/A                                                                        | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}         |