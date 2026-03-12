# PropertyGroup

A grouping for multiple PropertyDefinition. Grouped properties will be displayed together in the UI.

## Example Usage

```typescript
import { PropertyGroup } from "@gleanwork/api-client/models/components";

let value: PropertyGroup = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | The unique identifier of the group.       |
| `displayLabel`                            | *string*                                  | :heavy_minus_sign:                        | The user-friendly group label to display. |