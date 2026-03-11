# AppResult

## Example Usage

```typescript
import { AppResult } from "@gleanwork/api-client/models/components";

let value: AppResult = {
  datasource: "<value>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The app or other repository type this represents                                                                            |
| `docType`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The datasource-specific type of the document (e.g. for Jira issues, this is the issue type such as Bug or Feature Request). |
| `mimeType`                                                                                                                  | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Mimetype is used to differentiate between sub applications from a datasource (e.g. Sheets, Docs from Gdrive)                |
| `iconUrl`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | If there is available icon URL.                                                                                             |