# UiConfig

## Example Usage

```typescript
import { UiConfig } from "@gleanwork/api-client/models/components";

let value: UiConfig = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `format`                                                                                         | [components.Format](../../models/components/format.md)                                           | :heavy_minus_sign:                                                                               | defines how to render this particular displayable list card                                      |
| `additionalFlags`                                                                                | [components.DisplayableListItemUIConfig](../../models/components/displayablelistitemuiconfig.md) | :heavy_minus_sign:                                                                               | UI configurations for each item of the list                                                      |