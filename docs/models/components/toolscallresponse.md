# ToolsCallResponse

## Example Usage

```typescript
import { ToolsCallResponse } from "@gleanwork/api-client/models/components";

let value: ToolsCallResponse = {};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `rawResponse`                   | Record<string, *any*>           | :heavy_minus_sign:              | The raw response from the tool  |
| `error`                         | *string*                        | :heavy_minus_sign:              | The error message if applicable |