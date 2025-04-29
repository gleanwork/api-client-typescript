# Answers
(*client.answers*)

## Overview

### Available Operations

* [create](#create) - Create Answer
* [delete](#delete) - Delete Answer
* [edit](#edit) - Update Answer
* [get](#get) - Read Answer
* [list](#list) - List Answers

## create

Create a user-generated Answer that contains a question and answer.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.answers.create({
    createAnswerRequest: {
      data: {
        question: "Why is the sky blue?",
        bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
        addedRoles: [
          {
            person: {
              name: "George Clooney",
              obfuscatedId: "abc123",
              relatedDocuments: [],
              metadata: {
                type: "FULL_TIME",
                title: "Actor",
                department: "Movies",
                email: "george@example.com",
                location: "Hollywood, CA",
                phone: "6505551234",
                photoUrl: "https://example.com/george.jpg",
                startDate: new RFCDate("2000-01-23"),
                datasourceProfile: [
                  {
                    datasource: "github",
                    handle: "<value>",
                  },
                ],
                querySuggestions: {
                  suggestions: [],
                },
                inviteInfo: {
                  invites: [],
                },
                customFields: [],
                badges: [
                  {
                    key: "deployment_name_new_hire",
                    displayName: "New hire",
                    iconConfig: {
                      color: "#343CED",
                      key: "person_icon",
                      iconType: "GLYPH",
                      name: "user",
                    },
                  },
                ],
              },
            },
            role: "OWNER",
          },
          {
            role: "VERIFIER",
          },
        ],
        removedRoles: [
          {
            role: "VERIFIER",
          },
          {
            role: "ANSWER_MODERATOR",
          },
          {
            role: "OWNER",
          },
        ],
        roles: [
          {
            role: "ANSWER_MODERATOR",
          },
          {
            role: "OWNER",
          },
          {
            role: "VERIFIER",
          },
        ],
        combinedAnswerText: {
          text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
        },
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersCreate } from "@gleanwork/api-client/funcs/clientAnswersCreate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientAnswersCreate(glean, {
    createAnswerRequest: {
      data: {
        question: "Why is the sky blue?",
        bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
        addedRoles: [
          {
            person: {
              name: "George Clooney",
              obfuscatedId: "abc123",
              relatedDocuments: [],
              metadata: {
                type: "FULL_TIME",
                title: "Actor",
                department: "Movies",
                email: "george@example.com",
                location: "Hollywood, CA",
                phone: "6505551234",
                photoUrl: "https://example.com/george.jpg",
                startDate: new RFCDate("2000-01-23"),
                datasourceProfile: [
                  {
                    datasource: "github",
                    handle: "<value>",
                  },
                ],
                querySuggestions: {
                  suggestions: [],
                },
                inviteInfo: {
                  invites: [],
                },
                customFields: [],
                badges: [
                  {
                    key: "deployment_name_new_hire",
                    displayName: "New hire",
                    iconConfig: {
                      color: "#343CED",
                      key: "person_icon",
                      iconType: "GLYPH",
                      name: "user",
                    },
                  },
                ],
              },
            },
            role: "OWNER",
          },
          {
            role: "VERIFIER",
          },
        ],
        removedRoles: [
          {
            role: "VERIFIER",
          },
          {
            role: "ANSWER_MODERATOR",
          },
          {
            role: "OWNER",
          },
        ],
        roles: [
          {
            role: "ANSWER_MODERATOR",
          },
          {
            role: "OWNER",
          },
          {
            role: "VERIFIER",
          },
        ],
        combinedAnswerText: {
          text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
        },
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientAnswersCreateMutation
} from "@gleanwork/api-client/react-query/clientAnswersCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateanswerRequest](../../models/operations/createanswerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Answer](../../models/components/answer.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## delete

Delete an existing user-generated Answer.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.answers.delete({
    deleteAnswerRequest: {
      id: 3,
      docId: "ANSWERS_answer_3",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersDelete } from "@gleanwork/api-client/funcs/clientAnswersDelete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientAnswersDelete(glean, {
    deleteAnswerRequest: {
      id: 3,
      docId: "ANSWERS_answer_3",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientAnswersDeleteMutation
} from "@gleanwork/api-client/react-query/clientAnswersDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteanswerRequest](../../models/operations/deleteanswerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## edit

Update an existing user-generated Answer.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.answers.edit({
    editAnswerRequest: {
      id: 3,
      docId: "ANSWERS_answer_3",
      question: "Why is the sky blue?",
      bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
      addedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [],
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {
                suggestions: [],
              },
              inviteInfo: {
                invites: [],
              },
              customFields: [],
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "EDITOR",
        },
      ],
      removedRoles: [
        {
          role: "EDITOR",
        },
      ],
      roles: [
        {
          role: "ANSWER_MODERATOR",
        },
        {
          role: "OWNER",
        },
      ],
      combinedAnswerText: {
        text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersEdit } from "@gleanwork/api-client/funcs/clientAnswersEdit.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientAnswersEdit(glean, {
    editAnswerRequest: {
      id: 3,
      docId: "ANSWERS_answer_3",
      question: "Why is the sky blue?",
      bodyText: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
      addedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [],
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {
                suggestions: [],
              },
              inviteInfo: {
                invites: [],
              },
              customFields: [],
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "EDITOR",
        },
      ],
      removedRoles: [
        {
          role: "EDITOR",
        },
      ],
      roles: [
        {
          role: "ANSWER_MODERATOR",
        },
        {
          role: "OWNER",
        },
      ],
      combinedAnswerText: {
        text: "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientAnswersEditMutation
} from "@gleanwork/api-client/react-query/clientAnswersEdit.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditanswerRequest](../../models/operations/editanswerrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Answer](../../models/components/answer.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## get

Read the details of a particular Answer given its ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.answers.get({
    getAnswerRequest: {
      id: 3,
      docId: "ANSWERS_answer_3",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersGet } from "@gleanwork/api-client/funcs/clientAnswersGet.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientAnswersGet(glean, {
    getAnswerRequest: {
      id: 3,
      docId: "ANSWERS_answer_3",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientAnswersGetMutation
} from "@gleanwork/api-client/react-query/clientAnswersGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetanswerRequest](../../models/operations/getanswerrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAnswerResponse](../../models/components/getanswerresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## list

List Answers created by the current user.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.answers.list({
    listAnswersRequest: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientAnswersList } from "@gleanwork/api-client/funcs/clientAnswersList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientAnswersList(glean, {
    listAnswersRequest: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientAnswersListMutation
} from "@gleanwork/api-client/react-query/clientAnswersList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListanswersRequest](../../models/operations/listanswersrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListAnswersResponse](../../models/components/listanswersresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |