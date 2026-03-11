# FollowupAction

A follow-up action that can be invoked by the user after a response. The action parameters are not included and need to be predicted/filled separately.

## Example Usage

```typescript
import { FollowupAction } from "@gleanwork/api-client/models/components";

let value: FollowupAction = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `actionRunId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this actionRun recommendation event.                     |
| `actionInstanceId`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the action instance that will be invoked.                            |
| `actionId`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the associated action.                                               |
| `parameters`                                                                   | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | Map of assistant predicted parameters and their corresponding values.          |
| `recommendationText`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | Text to be displayed to the user when recommending the action instance.        |
| `actionLabel`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The label to be used when displaying a button to execute this action instance. |
| `userConfirmationRequired`                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether user confirmation is needed before executing this action instance.     |