# ListAnswersResponse

## Example Usage

```typescript
import { ListAnswersResponse } from "@gleanwork/api-client/models/components";

let value: ListAnswersResponse = {
  answerResults: [
    {
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
          numLikes: 347282,
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
              remindAt: 180714,
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
          description: "after pivot promise pish who talkative more",
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
          id: 26919,
          creator: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        },
        collections: [],
        sourceDocument: {},
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `answerResults`                                                      | [components.AnswerResult](../../models/components/answerresult.md)[] | :heavy_check_mark:                                                   | List of answers with tracking tokens.                                |