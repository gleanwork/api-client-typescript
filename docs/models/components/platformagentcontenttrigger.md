# PlatformAgentContentTrigger

A subscribed document event and the filters that narrow it.

## Example Usage

```typescript
import { PlatformAgentContentTrigger } from "@gleanwork/api-client/models/components";

let value: PlatformAgentContentTrigger = {
  datasource: "<value>",
  template_id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasource`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Event source in enum form, for example `JIRA`.                                                                                                   |
| `templateId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Subscribed event identifier, for example `JIRA_TICKET_CREATED`.                                                                                  |
| `documentType`                                                                                                                                   | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Document type the entry watches.                                                                                                                 |
| `timeOffsetSeconds`                                                                                                                              | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Seconds before an event time carried in the document at which the agent runs. Pre-event triggers only.<br/>                                      |
| `filters`                                                                                                                                        | [components.PlatformAgentContentTriggerFilter](../../models/components/platformagentcontenttriggerfilter.md)[]                                   | :heavy_minus_sign:                                                                                                                               | Filters on the document that fired the event. Every filter must match for the entry to fire. Without filters, every event for this entry fires.<br/> |