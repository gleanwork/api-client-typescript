# GetAnswerResponse

## Example Usage

```typescript
import { GetAnswerResponse } from "@gleanwork/api-client/models/components";

let value: GetAnswerResponse = {
  answerResult: {
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
        numLikes: 406117,
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
            remindAt: 475812,
          },
          candidateVerifiers: [],
        },
      },
      board: {
        name: "<value>",
        description: "drat via over miserably militate teriyaki squid yahoo",
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
        id: 322521,
        creator: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
      collections: [],
      sourceDocument: {},
    },
  },
  error: {
    answerAuthor: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `answerResult`                                                         | [components.AnswerResult](../../models/components/answerresult.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `error`                                                                | [components.GetAnswerError](../../models/components/getanswererror.md) | :heavy_minus_sign:                                                     | N/A                                                                    |