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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |                                                                                                                                                                                                     |
| `autocompleteRequest`                                                                                                                                                                               | [components.AutocompleteRequest](../../models/components/autocompleterequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | Autocomplete request                                                                                                                                                                                | {<br/>"trackingToken": "trackingToken",<br/>"query": "what is a que",<br/>"datasource": "GDRIVE",<br/>"resultSize": 10<br/>}                                                                        |