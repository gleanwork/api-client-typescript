# GeneratedAttachment

These are attachments that aren't natively present on the event, and have been smartly suggested.

## Example Usage

```typescript
import { GeneratedAttachment } from "@gleanwork/api-client/models/components";

let value: GeneratedAttachment = {
  documents: [
    {
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
  ],
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
  externalLinks: [
    {
      iconConfig: {
        color: "#343CED",
        key: "person_icon",
        iconType: "GLYPH",
        name: "user",
      },
    },
  ],
  content: [
    {
      displayHeader: "Action Items",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `strategyName`                                                                                   | [components.EventStrategyName](../../models/components/eventstrategyname.md)                     | :heavy_minus_sign:                                                                               | The name of method used to surface relevant data for a given calendar event.                     |                                                                                                  |
| `documents`                                                                                      | [components.Document](../../models/components/document.md)[]                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `person`                                                                                         | [components.Person](../../models/components/person.md)                                           | :heavy_minus_sign:                                                                               | N/A                                                                                              | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                               |
| `customer`                                                                                       | [components.Customer](../../models/components/customer.md)                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `externalLinks`                                                                                  | [components.StructuredLink](../../models/components/structuredlink.md)[]                         | :heavy_minus_sign:                                                                               | A list of links to external sources outside of Glean.                                            |                                                                                                  |
| `content`                                                                                        | [components.GeneratedAttachmentContent](../../models/components/generatedattachmentcontent.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |