# AgentUseCaseInsight

## Example Usage

```typescript
import { AgentUseCaseInsight } from "@gleanwork/api-client/models/components";

let value: AgentUseCaseInsight = {
  topAgentIcon: {
    color: "#343CED",
    key: "person_icon",
    iconType: "GLYPH",
    name: "user",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `useCase`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | Use case name                                                                     |                                                                                   |
| `runCount`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | Total number of runs for this use case over the specified time period.            |                                                                                   |
| `trend`                                                                           | *number*                                                                          | :heavy_minus_sign:                                                                | Percentage change in runs compared to the previous equivalent time period.        |                                                                                   |
| `topDepartments`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | Comma-separated list of the top departments using this use case.                  |                                                                                   |
| `topAgentId`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | ID of the most-used agent for this use case.                                      |                                                                                   |
| `topAgentName`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Name of the most-used agent for this use case.                                    |                                                                                   |
| `topAgentIcon`                                                                    | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |
| `topAgentIsDeleted`                                                               | *boolean*                                                                         | :heavy_minus_sign:                                                                | Indicates whether the top agent has been deleted.                                 |                                                                                   |