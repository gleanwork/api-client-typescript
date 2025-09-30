# GreenlistUsersRequest

Describes the request body of the /betausers API call

## Example Usage

```typescript
import { GreenlistUsersRequest } from "@gleanwork/api-client/models/components";

let value: GreenlistUsersRequest = {
  datasource: "<value>",
  emails: [
    "Lydia_Pouros@yahoo.com",
    "Jacinto84@hotmail.com",
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `datasource`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | Datasource which needs to be made visible to users specified in the `emails` field. |
| `emails`                                                                            | *string*[]                                                                          | :heavy_check_mark:                                                                  | The emails of the beta users                                                        |