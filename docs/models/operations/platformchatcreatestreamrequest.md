# PlatformChatCreateStreamRequest

## Example Usage

```typescript
import { PlatformChatCreateStreamRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformChatCreateStreamRequest = {
  input: "Summarize our parental leave policy as JSON.",
  text: {
    format: {
      type: "JSON_SCHEMA",
      name: "policy_summary",
      schema: {
        "type": "object",
        "properties": {
          "eligible_employees": {
            "type": "string",
          },
          "duration_weeks": {
            "type": "integer",
          },
        },
        "required": [
          "eligible_employees",
          "duration_weeks",
        ],
      },
      strict: true,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                                                                                                                                                     | *operations.PlatformChatCreateStreamInput*                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                          | Either a plain string (single user turn) or a chronological array of `USER`/`ASSISTANT` messages. The final array message must be `USER`.<br/>                                                                                                                              |
| `stream`                                                                                                                                                                                                                                                                    | *true*                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                         |
| `store`                                                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                          | When true (default), persist the interaction and return a `conversation_id`. When false, run ephemerally with no persistence.<br/>                                                                                                                                          |
| `conversationId`                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                          | Continue an existing stored conversation. Incompatible with message-array `input` and with `store: false`.<br/>                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                      | [operations.PlatformChatCreateStreamText](../../models/operations/platformchatcreatestreamtext.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                          | Optional configuration for the assistant's text response. When `format.type` is `JSON_SCHEMA`, the response is constrained to the supplied JSON schema and returned in `output[*].content[*].structured_output`. Structured output is not supported when `stream` is true.<br/> |