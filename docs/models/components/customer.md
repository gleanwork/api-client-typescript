# Customer

## Example Usage

```typescript
import { Customer } from "@gleanwork/api-client/models/components";

let value: Customer = {
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
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Unique identifier.                                                                                    |                                                                                                       |
| `domains`                                                                                             | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Link to company's associated website domains.                                                         |                                                                                                       |
| `company`                                                                                             | [components.Company](../../models/components/company.md)                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `documentCounts`                                                                                      | Record<string, *number*>                                                                              | :heavy_minus_sign:                                                                                    | A map of {string, int} pairs representing counts of each document type associated with this customer. |                                                                                                       |
| `poc`                                                                                                 | [components.Person](../../models/components/person.md)[]                                              | :heavy_minus_sign:                                                                                    | A list of POC for company.                                                                            |                                                                                                       |
| `metadata`                                                                                            | [components.CustomerMetadata](../../models/components/customermetadata.md)                            | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `mergedCustomers`                                                                                     | [components.Customer](../../models/components/customer.md)[]                                          | :heavy_minus_sign:                                                                                    | A list of Customers.                                                                                  |                                                                                                       |
| `startDate`                                                                                           | [RFCDate](../../types/rfcdate.md)                                                                     | :heavy_minus_sign:                                                                                    | The date when the interaction with customer started.                                                  |                                                                                                       |
| `contractAnnualRevenue`                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Average contract annual revenue with that customer.                                                   |                                                                                                       |
| `notes`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | User facing (potentially generated) notes about company.                                              | CIO is interested in trying out the product.                                                          |