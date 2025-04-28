# StructuredResult

A single object that can support any object in the work graph. Only a single object will be populated.

## Example Usage

```typescript
import { StructuredResult } from "@gleanwork/api-client/models/components";

let value: StructuredResult = {
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
    poc: [],
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
      numLikes: 21930,
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    verification: {
      state: "VERIFIED",
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
          remindAt: 206583,
        },
        candidateVerifiers: [],
      },
    },
    board: {
      name: "<value>",
      description:
        "whoever huzzah ick warp desk tedious tightly supposing bandwidth aboard",
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
      id: 778994,
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
      snippets: [],
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
    description: "oh because times times ew how beautifully hmph difficult",
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
    id: 849339,
    items: [],
    children: [],
  },
  answerBoard: {
    name: "<value>",
    description: "kissingly slowly than swim oh windy",
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
    id: 50219,
  },
  code: {
    repoName: "scio",
    fileName: "README.md",
  },
  querySuggestions: {
    suggestions: [],
  },
  relatedDocuments: [],
  relatedQuestion: {
    ranges: [],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                                                                                                                                                                                                                                                                           | [components.Document](../../models/components/document.md)                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `person`                                                                                                                                                                                                                                                                                                                                                             | [components.Person](../../models/components/person.md)                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                                                                                                                                                                                                                                   |
| `customer`                                                                                                                                                                                                                                                                                                                                                           | [components.Customer](../../models/components/customer.md)                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `team`                                                                                                                                                                                                                                                                                                                                                               | [components.Team](../../models/components/team.md)                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `customEntity`                                                                                                                                                                                                                                                                                                                                                       | [components.CustomEntity](../../models/components/customentity.md)                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `answer`                                                                                                                                                                                                                                                                                                                                                             | [components.Answer](../../models/components/answer.md)                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `extractedQnA`                                                                                                                                                                                                                                                                                                                                                       | [components.ExtractedQnA](../../models/components/extractedqna.md)                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `meeting`                                                                                                                                                                                                                                                                                                                                                            | [components.Meeting](../../models/components/meeting.md)                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `app`                                                                                                                                                                                                                                                                                                                                                                | [components.AppResult](../../models/components/appresult.md)                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `collection`                                                                                                                                                                                                                                                                                                                                                         | [components.Collection](../../models/components/collection.md)                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `answerBoard`                                                                                                                                                                                                                                                                                                                                                        | [components.AnswerBoard](../../models/components/answerboard.md)                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `code`                                                                                                                                                                                                                                                                                                                                                               | [components.Code](../../models/components/code.md)                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  | {<br/>"repoName": "scio",<br/>"fileName": "README.md",<br/>"matches": [<br/>{<br/>"lineNumber": 1,<br/>"content": "Welcome to the beginning",<br/>"ranges": []<br/>},<br/>{<br/>"lineNumber": 2,<br/>"content": "Second line of the file",<br/>"ranges": []<br/>},<br/>{<br/>"lineNumber": 3,<br/>"content": "hello world hello world",<br/>"ranges": [<br/>{<br/>"startindex": 0,<br/>"endIndex": 5<br/>},<br/>{<br/>"startIndex": 12,<br/>"endIndex": 17<br/>}<br/>]<br/>}<br/>]<br/>} |
| `shortcut`                                                                                                                                                                                                                                                                                                                                                           | [components.Shortcut](../../models/components/shortcut.md)                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `querySuggestions`                                                                                                                                                                                                                                                                                                                                                   | [components.QuerySuggestionList](../../models/components/querysuggestionlist.md)                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `relatedDocuments`                                                                                                                                                                                                                                                                                                                                                   | [components.RelatedDocuments](../../models/components/relateddocuments.md)[]                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | A list of documents related to this structured result.                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                      |
| `relatedQuestion`                                                                                                                                                                                                                                                                                                                                                    | [components.RelatedQuestion](../../models/components/relatedquestion.md)                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `disambiguation`                                                                                                                                                                                                                                                                                                                                                     | [components.Disambiguation](../../models/components/disambiguation.md)                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | A disambiguation between multiple entities with the same name                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                      |
| `snippets`                                                                                                                                                                                                                                                                                                                                                           | [components.SearchResultSnippet](../../models/components/searchresultsnippet.md)[]                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | Any snippets associated to the populated object.                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                      |
| `trackingToken`                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | An opaque token that represents this particular result in this particular query. To be used for /feedback reporting.                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                      |
| `prominence`                                                                                                                                                                                                                                                                                                                                                         | [components.Prominence](../../models/components/prominence.md)                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | The level of visual distinction that should be given to a result.                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                      |
| `source`                                                                                                                                                                                                                                                                                                                                                             | [components.StructuredResultSource](../../models/components/structuredresultsource.md)                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | Source context for this result. Possible values depend on the result type.                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                      |