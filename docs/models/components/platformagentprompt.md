# PlatformAgentPrompt

A conversation starter whose template is sent as the first chat message.

## Example Usage

```typescript
import { PlatformAgentPrompt } from "@gleanwork/api-client/models/components";

let value: PlatformAgentPrompt = {
  display_name: "Jameson_Ullrich",
  template: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `displayName`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | Short title of the conversation starter.                                                  |
| `template`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | Chat message that starts the conversation. May contain `[[variable_name]]` placeholders.<br/> |