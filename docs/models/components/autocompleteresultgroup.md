# AutocompleteResultGroup

A subsection of the results list from which distinct sections should be created.

## Example Usage

```typescript
import { AutocompleteResultGroup } from "@gleanwork/api-client/models/components";

let value: AutocompleteResultGroup = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `startIndex`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | The inclusive start index of the range.                              |
| `endIndex`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | The exclusive end index of the range.                                |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The title of the result group to be displayed. Empty means no title. |