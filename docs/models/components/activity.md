# Activity

## Example Usage

```typescript
import { Activity } from "@gleanwork/api-client/models/components";

let value: Activity = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `events`                                                               | [components.ActivityEvent](../../models/components/activityevent.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |