# CreatedisplayablelistsRequest

## Example Usage

```typescript
import { CreatedisplayablelistsRequest } from "@gleanwork/api-client/models/operations";

let value: CreatedisplayablelistsRequest = {
  createDisplayableListsRequest: {
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
| `createDisplayableListsRequest`                                                                                          | [components.CreateDisplayableListsRequest](../../models/components/createdisplayablelistsrequest.md)                     | :heavy_check_mark:                                                                                                       | Create new displayable lists                                                                                             |