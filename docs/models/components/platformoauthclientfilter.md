# PlatformOAuthClientFilter

A filter on one OAuth client field.

## Example Usage

```typescript
import { PlatformOAuthClientFilter } from "@gleanwork/api-client/models/components";

let value: PlatformOAuthClientFilter = {
  field: "<value>",
  values: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `field`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The client field to filter on. The only supported field is is_active.                                        |
| `values`                                                                                                     | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | The values to match. A client matches when any value matches.                                                |
| `operator`                                                                                                   | [components.PlatformOAuthClientFilterOperator](../../models/components/platformoauthclientfilteroperator.md) | :heavy_minus_sign:                                                                                           | The only supported operator is EQUALS. Defaults to EQUALS.                                                   |