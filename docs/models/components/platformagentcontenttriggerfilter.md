# PlatformAgentContentTriggerFilter

A filter on the document that fired a content trigger. Values are ORed.

## Example Usage

```typescript
import { PlatformAgentContentTriggerFilter } from "@gleanwork/api-client/models/components";

let value: PlatformAgentContentTriggerFilter = {
  field: "<value>",
  operator: "FIELD_CHANGED",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | `TITLE` or `CONTENT` for the document's title or body, or a facet key.                                                       |
| `operator`                                                                                                                   | [components.PlatformAgentContentTriggerFilterOperator](../../models/components/platformagentcontenttriggerfilteroperator.md) | :heavy_check_mark:                                                                                                           | Operator of a content trigger filter.                                                                                        |
| `values`                                                                                                                     | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | Match values. Required except for FIELD_CHANGED.                                                                             |