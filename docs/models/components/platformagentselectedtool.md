# PlatformAgentSelectedTool

A tool selected from a tool provider.

## Example Usage

```typescript
import { PlatformAgentSelectedTool } from "@gleanwork/api-client/models/components";

let value: PlatformAgentSelectedTool = {
  display_name: "Brennon.Keebler21",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `displayName`                         | *string*                              | :heavy_check_mark:                    | Name of the tool within its provider. |