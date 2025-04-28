# AutocompleteRequest

## Example Usage

```typescript
import { AutocompleteRequest } from "@gleanwork/api-client/models/operations";

let value: AutocompleteRequest = {
  autocompleteRequest: {
    trackingToken: "trackingToken",
    query: "what is a que",
    datasource: "GDRIVE",
    resultSize: 10,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |                                                                                                                          |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |                                                                                                                          |
| `autocompleteRequest`                                                                                                    | [components.AutocompleteRequest](../../models/components/autocompleterequest.md)                                         | :heavy_check_mark:                                                                                                       | Autocomplete request                                                                                                     | {<br/>"trackingToken": "trackingToken",<br/>"query": "what is a que",<br/>"datasource": "GDRIVE",<br/>"resultSize": 10<br/>} |