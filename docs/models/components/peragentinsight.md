# PerAgentInsight

## Example Usage

```typescript
import { PerAgentInsight } from "@gleanwork/api-client/models/components";

let value: PerAgentInsight = {
  icon: {
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
| `agentId`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | Agent ID                                                                          |                                                                                   |
| `agentName`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Agent name                                                                        |                                                                                   |
| `icon`                                                                            | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |
| `userCount`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | Total number of users for this agent over the specified time period.              |                                                                                   |
| `runCount`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | Total number of runs for this agent over the specified time period.               |                                                                                   |