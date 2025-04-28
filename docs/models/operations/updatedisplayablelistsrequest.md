# UpdatedisplayablelistsRequest

## Example Usage

```typescript
import { UpdatedisplayablelistsRequest } from "@gleanwork/api-client/models/operations";

let value: UpdatedisplayablelistsRequest = {
  updateDisplayableListsRequest: {
    items: [
      {
        config: {
          audienceFilters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `updateDisplayableListsRequest`                                                                                          | [components.UpdateDisplayableListsRequest](../../models/components/updatedisplayablelistsrequest.md)                     | :heavy_check_mark:                                                                                                       | Updated version of the displayable list configs.                                                                         |