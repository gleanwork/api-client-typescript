# CustomisationData

Settings applied to every tool in this provider entry.

## Example Usage

```typescript
import { CustomisationData } from "@gleanwork/api-client/models/components";

let value: CustomisationData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `skipConfirmation`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether tools in this entry run without asking the user for confirmation. Defaults to false.<br/> |