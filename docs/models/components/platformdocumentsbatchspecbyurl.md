# PlatformDocumentsBatchSpecByUrl

## Example Usage

```typescript
import { PlatformDocumentsBatchSpecByUrl } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentsBatchSpecByUrl = {
  url: "https://super-mallard.net",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                                                      | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Document URL to resolve. An empty or malformed URL is not a schema 400. The batch response reports it as a warning after a complete read.<br/> |