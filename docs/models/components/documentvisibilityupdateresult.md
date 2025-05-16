# DocumentVisibilityUpdateResult

## Example Usage

```typescript
import { DocumentVisibilityUpdateResult } from "@gleanwork/api-client/models/components";

let value: DocumentVisibilityUpdateResult = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `docId`                                                                                                                | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `override`                                                                                                             | [components.DocumentVisibilityUpdateResultOverride](../../models/components/documentvisibilityupdateresultoverride.md) | :heavy_minus_sign:                                                                                                     | The visibility-override state of the document.                                                                         |
| `success`                                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether this document was successfully set to its desired visibility state.                                            |