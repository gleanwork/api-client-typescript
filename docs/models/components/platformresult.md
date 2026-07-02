# PlatformResult

## Example Usage

```typescript
import { PlatformResult } from "@gleanwork/api-client/models/components";

let value: PlatformResult = {
  url: "https://company.atlassian.net/wiki/spaces/ENG/pages/12345",
  title: "Q2 2026 Platform Roadmap",
  snippets: [
    "The platform team will focus on API stability and...",
  ],
  datasource: "confluence",
  datasource_instance: "confluence_acme",
  document_type: "page",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Canonical URL of the result.                                                                  | https://company.atlassian.net/wiki/spaces/ENG/pages/12345                                     |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Result title.                                                                                 | Q2 2026 Platform Roadmap                                                                      |
| `snippets`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Query-relevant plain-text excerpts from the result body.                                      | [<br/>"The platform team will focus on API stability and..."<br/>]                            |
| `datasource`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The datasource this result originates from.                                                   | confluence                                                                                    |
| `datasourceInstance`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The datasource instance this result originates from, if known.                                | confluence_acme                                                                               |
| `documentType`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The document type within the datasource.                                                      | page                                                                                          |
| `creator`                                                                                     | [components.PlatformPersonReference](../../models/components/platformpersonreference.md)      | :heavy_minus_sign:                                                                            | A lightweight reference to a person, used where a payload merely points at someone.           |                                                                                               |
| `owner`                                                                                       | [components.PlatformPersonReference](../../models/components/platformpersonreference.md)      | :heavy_minus_sign:                                                                            | A lightweight reference to a person, used where a payload merely points at someone.           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the result was last modified.                                                            |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the result was created.                                                                  |                                                                                               |