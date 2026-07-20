# PostRestApiIndexSubmissionsDatasourceInstanceTypeRequest

## Example Usage

```typescript
import { PostRestApiIndexSubmissionsDatasourceInstanceTypeRequest } from "@gleanwork/api-client/models/operations";

let value: PostRestApiIndexSubmissionsDatasourceInstanceTypeRequest = {
  datasourceInstance: "<value>",
  type: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `datasourceInstance`                                   | *string*                                               | :heavy_check_mark:                                     | Datasource instance that should process the submission |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | Submission type registered for the datasource          |
| `requestBody`                                          | Record<string, *any*>                                  | :heavy_check_mark:                                     | N/A                                                    |