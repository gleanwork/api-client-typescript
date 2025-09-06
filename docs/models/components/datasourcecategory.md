# DatasourceCategory

The type of this datasource. It is an important signal for relevance and must be specified and cannot be UNCATEGORIZED. Please refer to [this](https://developers.glean.com/docs/indexing_api_datasource_category/) for more details.

## Example Usage

```typescript
import { DatasourceCategory } from "@gleanwork/api-client/models/components";

let value: DatasourceCategory = "EXTERNAL_SHORTCUT";
```

## Values

```typescript
"UNCATEGORIZED" | "TICKETS" | "CRM" | "PUBLISHED_CONTENT" | "COLLABORATIVE_CONTENT" | "QUESTION_ANSWER" | "MESSAGING" | "CODE_REPOSITORY" | "CHANGE_MANAGEMENT" | "PEOPLE" | "EMAIL" | "SSO" | "ATS" | "KNOWLEDGE_HUB" | "EXTERNAL_SHORTCUT" | "ENTITY" | "CALENDAR" | "AGENTS"
```