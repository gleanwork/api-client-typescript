# ToolSets

The types of tools that the agent is allowed to use. Only works with FAST and ADVANCED `agent` values

## Example Usage

```typescript
import { ToolSets } from "@gleanwork/api-client/models/components";

let value: ToolSets = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `enableWebSearch`                                                                  | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the agent is allowed to use web search (default: true).                    |
| `enableCompanyTools`                                                               | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the agent is allowed to search internal company resources (default: true). |