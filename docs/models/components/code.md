# Code

## Example Usage

```typescript
import { Code } from "@gleanwork/api-client/models/components";

let value: Code = {
  repoName: "scio",
  fileName: "README.md",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `repoName`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `fileName`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `fileUrl`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `lines`                                                      | [components.CodeLine](../../models/components/codeline.md)[] | :heavy_minus_sign:                                           | N/A                                                          |
| `isLastMatch`                                                | *boolean*                                                    | :heavy_minus_sign:                                           | Last file match for a repo                                   |