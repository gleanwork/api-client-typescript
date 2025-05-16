# StructuredTextItem

## Example Usage

```typescript
import { StructuredTextItem } from "@gleanwork/api-client/models/components";

let value: StructuredTextItem = {
  link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
  text:
    "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
  structuredResult: {
    person: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    customer: {
      id: "<id>",
      company: {
        name: "<value>",
        location: "New York City",
        industry: "Finances",
        about:
          "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
      },
      poc: [
        {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      ],
      mergedCustomers: [],
      notes: "CIO is interested in trying out the product.",
    },
    team: {
      id: "<id>",
      name: "<value>",
      members: [],
      customFields: [],
      datasourceProfiles: [
        {
          datasource: "github",
          handle: "<value>",
        },
      ],
    },
    customEntity: {
      roles: [],
    },
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
      combinedAnswerText: {
        text:
          "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
        structuredList: [],
      },
      likes: {
        likedBy: [],
        likedByUser: false,
        numLikes: 514053,
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
            remindAt: 90777,
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
        description:
          "insidious weird cantaloupe until who whitewash vainly fixed deceivingly fiercely",
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
        id: 243713,
        creator: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
      collections: [],
      sourceDocument: {},
    },
    extractedQnA: {
      questionResult: {
        title: "title",
        url: "https://example.com/foo/bar",
        nativeAppUrl: "slack://foo/bar",
        snippets: [
          {
            snippet: "snippet",
            mimeType: "mimeType",
          },
        ],
        mustIncludeSuggestions: {},
      },
    },
    meeting: {
      attendees: {
        people: [],
      },
    },
    collection: {
      name: "<value>",
      description:
        "woot abaft across brr boohoo neglect gummy democratize round mockingly",
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
      id: 890490,
      items: [],
      children: [],
    },
    answerBoard: {
      name: "<value>",
      description: "dual fond lined if and ack easy",
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
      id: 787359,
    },
    code: {
      repoName: "scio",
      fileName: "README.md",
    },
    shortcut: {
      inputAlias: "<value>",
      createdBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      destinationDocument: {},
    },
    querySuggestions: {
      suggestions: [
        {
          query: "app:github type:pull author:mortimer",
          label: "Mortimer's PRs",
          datasource: "github",
        },
      ],
    },
    relatedDocuments: [],
    relatedQuestion: {
      ranges: [],
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `link`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                           | https://en.wikipedia.org/wiki/Diffuse_sky_radiation                                                                                                                                                                                                           |
| `document`                                                                                                                                                                                                                                                    | [components.Document](../../models/components/document.md)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                           | Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue. |
| `structuredResult`                                                                                                                                                                                                                                            | [components.StructuredResult](../../models/components/structuredresult.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                            | A single object that can support any object in the work graph. Only a single object will be populated.                                                                                                                                                        |                                                                                                                                                                                                                                                               |