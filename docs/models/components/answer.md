# Answer

## Example Usage

```typescript
import { Answer } from "@gleanwork/api-client/models/components";

let value: Answer = {
  id: 3,
  docId: "ANSWERS_answer_3",
  question: "Why is the sky blue?",
  bodyText:
    "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
  addedRoles: [],
  removedRoles: [],
  roles: [],
  combinedAnswerText: {
    text:
      "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
    structuredList: [],
  },
  likes: {
    likedBy: [],
    likedByUser: false,
    numLikes: 523411,
  },
  author: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  updatedBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  verification: {
    state: "UNVERIFIED",
    metadata: {
      lastVerifier: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      document: {
        containerDocument: {
          parentDocument: {
            metadata: {
              datasource: "datasource",
              objectType: "Feature Request",
              container: "container",
              parentId: "JIRA_EN-1337",
              mimeType: "mimeType",
              documentId: "documentId",
              createTime: new Date("2000-01-23T04:56:07.000Z"),
              updateTime: new Date("2000-01-23T04:56:07.000Z"),
              author: {
                name: "name",
                obfuscatedId: "<id>",
              },
              components: [
                "Backend",
                "Networking",
              ],
              status: "[\"Done\"]",
              customData: {
                "someCustomField": {},
              },
            },
          },
        },
      },
      reminders: [],
      lastReminder: {
        assignee: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        requestor: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        remindAt: 108859,
      },
      candidateVerifiers: [
        {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      ],
    },
  },
  board: {
    name: "<value>",
    description: "who obediently well-off so whoa diligently",
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
    id: 509681,
    creator: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  },
  collections: [],
  sourceDocument: {},
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                        | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The opaque ID of the Answer.                                                                                                                                                | 3                                                                                                                                                                           |
| `docId`                                                                                                                                                                     | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Glean Document ID of the Answer. The Glean Document ID is supported for cases where the Answer ID isn't available. If both are available, using the Answer ID is preferred. | ANSWERS_answer_3                                                                                                                                                            |
| `question`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | Why is the sky blue?                                                                                                                                                        |
| `questionVariations`                                                                                                                                                        | *string*[]                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                          | Additional ways of phrasing this question.                                                                                                                                  |                                                                                                                                                                             |
| `bodyText`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The plain text answer to the question.                                                                                                                                      | From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.                       |
| `boardId`                                                                                                                                                                   | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The parent board ID of this Answer, or 0 if it's a floating Answer.                                                                                                         |                                                                                                                                                                             |
| `audienceFilters`                                                                                                                                                           | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                                                                          | :heavy_minus_sign:                                                                                                                                                          | Filters which restrict who should see the answer. Values are taken from the corresponding filters in people search.                                                         |                                                                                                                                                                             |
| `addedRoles`                                                                                                                                                                | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                                          | A list of user roles for the answer added by the owner.                                                                                                                     |                                                                                                                                                                             |
| `removedRoles`                                                                                                                                                              | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                                          | A list of user roles for the answer removed by the owner.                                                                                                                   |                                                                                                                                                                             |
| `roles`                                                                                                                                                                     | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                                          | A list of roles for this answer explicitly granted by an owner, editor, or admin.                                                                                           |                                                                                                                                                                             |
| `sourceDocumentSpec`                                                                                                                                                        | *components.DocumentSpecUnion*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `sourceType`                                                                                                                                                                | [components.AnswerSourceType](../../models/components/answersourcetype.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `permissions`                                                                                                                                                               | [components.ObjectPermissions](../../models/components/objectpermissions.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `combinedAnswerText`                                                                                                                                                        | [components.StructuredText](../../models/components/structuredtext.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `likes`                                                                                                                                                                     | [components.AnswerLikes](../../models/components/answerlikes.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `author`                                                                                                                                                                    | [components.Person](../../models/components/person.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                                          |
| `createTime`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_minus_sign:                                                                                                                                                          | The time the answer was created in ISO format (ISO 8601).                                                                                                                   |                                                                                                                                                                             |
| `updateTime`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_minus_sign:                                                                                                                                                          | The time the answer was last updated in ISO format (ISO 8601).                                                                                                              |                                                                                                                                                                             |
| `updatedBy`                                                                                                                                                                 | [components.Person](../../models/components/person.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                                          |
| `verification`                                                                                                                                                              | [components.Verification](../../models/components/verification.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `board`                                                                                                                                                                     | [components.AnswerBoard](../../models/components/answerboard.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `collections`                                                                                                                                                               | [components.Collection](../../models/components/collection.md)[]                                                                                                            | :heavy_minus_sign:                                                                                                                                                          | The collections to which the answer belongs.                                                                                                                                |                                                                                                                                                                             |
| `documentCategory`                                                                                                                                                          | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The document's document_category(.proto).                                                                                                                                   |                                                                                                                                                                             |
| `sourceDocument`                                                                                                                                                            | [components.Document](../../models/components/document.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |