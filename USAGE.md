<!-- Start SDK Example Usage [usage] -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.chat.create({
    messages: [
      {
        fragments: [
          {
            text: "What are the company holidays this year?",
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.chat.createStream({
    messages: [
      {
        fragments: [
          {
            text: "What are the company holidays this year?",
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->