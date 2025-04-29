# React hooks

This SDK provides React hooks and utilies for making queries and mutations that
can take the pain out of building front-end applications for the web or React
Native.

They are built as a thin wrapper around [TanStack Query for React v5][rq], a
powerful, asynchronous state management library. A good understanding of that
library will be very helpful while using them. In addition to hooks, there are
several helper functions that can be used for cache management and data fetching
during server-rendering and in React Server Components.

## Getting started

To get started using React hooks, you will need to inject TanStack query and an
SDK instance into your application. Typically, this will be done high up in
your React app at the root or layout component. For example:



## Mutations

Operations that can have side-effects in this SDK are exposed as mutation hooks.
These can be integrated into HTML forms to submit data to the API. They also
take the same options as the [`useMutation` hook][use-mutation] from TanStack
Query.

[use-mutation]: https://tanstack.com/query/v5/docs/framework/react/reference/useMutation

```tsx
import { useClientActivityReportMutation } from "@gleanwork/api-client/react-query/clientActivityReport.js";

export function Example() {
  const { mutate, status } = useClientActivityReportMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // Read form data here...

        mutate({
          events: [
            {
              action: "HISTORICAL_VIEW",
              timestamp: new Date("2000-01-23T04:56:07.000Z"),
              url: "https://example.com/",
            },
            {
              action: "SEARCH",
              params: {
                query: "query",
              },
              timestamp: new Date("2000-01-23T04:56:07.000Z"),
              url: "https://example.com/search?q=query",
            },
            {
              action: "VIEW",
              params: {
                duration: 20,
                referrer: "https://example.com/document",
              },
              timestamp: new Date("2000-01-23T04:56:07.000Z"),
              url: "https://example.com/",
            },
          ],
        });
      }}
    >
      {/* Form fields go here... */} 
      <button type="submit" disabled={status === "pending"}>Submit</button>
    </form>
  );
}
``` 

### Mutation timeouts and retries

Since the underlying SDK handles request timeouts and retries, there are a few
more options provided by the mutation hooks to control these behaviors.

```tsx
import { useClientActivityReportMutation } from "@gleanwork/api-client/react-query/clientActivityReport.js";

export function ExampleWithOptions() {
  const { mutate, status } = useClientActivityReportMutation({
    // TanStack Query options:
    networkMode: "online",
    gcTime: 5 * 60 * 1000, // 5 minutes

    // Request options for the underlying API call:
    timeoutMs: 1000,
    retryCodes: ["5XX"],
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 500,
        maxInterval: 10 * 1000, // 10 seconds
        exponent: 1.5,
        maxElapsedTime: 60 * 1000, // 1 minute
      },
    },
  });

  // Render the UI here...
}
```


[rq]: https://tanstack.com/query/v5/docs/framework/react/overview