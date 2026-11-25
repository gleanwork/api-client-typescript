# PlatformAgentInputField

A typed input of the agent, referenced from the instructions as `[[display_name]]`.


## Example Usage

```typescript
import { PlatformAgentInputField } from "@gleanwork/api-client/models/components";

let value: PlatformAgentInputField = {
  display_name: "Kayden59",
  type: "DATE",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Label of the field and its placeholder name in the instructions. Unique within the agent.              |
| `type`                                                                                                 | [components.PlatformAgentInputFieldType](../../models/components/platformagentinputfieldtype.md)       | :heavy_check_mark:                                                                                     | Type of an agent input field.                                                                          |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Helper text describing the field.                                                                      |
| `defaultValue`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Pre-filled value. For SELECT fields, one of the option values. For DATE fields, a `YYYY-MM-DD` date.<br/> |
| `isOptional`                                                                                           | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Whether the field accepts empty input. Defaults to false.                                              |
| `options`                                                                                              | [components.PlatformAgentInputFieldOption](../../models/components/platformagentinputfieldoption.md)[] | :heavy_minus_sign:                                                                                     | Choices of a SELECT field.                                                                             |