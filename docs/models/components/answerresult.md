# AnswerResult

## Example Usage

```typescript
import { AnswerResult } from "@gleanwork/api-client/models/components";

let value: AnswerResult = {
  answer: {
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
      numLikes: 94933,
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
      state: "DEPRECATED",
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
          remindAt: 236261,
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
      description: "careless who yellowish lest finding revere gosh apropos",
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
      id: 306223,
      creator: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
    collections: [],
    sourceDocument: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `answer`                                                                                      | [components.Answer](../../models/components/answer.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `trackingToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | An opaque token that represents this particular Answer. To be used for `/feedback` reporting. |