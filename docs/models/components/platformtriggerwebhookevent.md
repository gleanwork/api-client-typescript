# PlatformTriggerWebhookEvent

Every delivered webhook is one of these two variants. A trigger with a cron schedule carries no document and so cannot be delivered over a webhook.


## Supported Types

### `components.PlatformDocumentChangeWebhookEvent`

```typescript
const value: components.PlatformDocumentChangeWebhookEvent = {
  version: "1",
  trigger_id: "trigger_test_123",
  event_type: "DOCUMENT_CHANGE",
  datasource: "GITHUB",
  reason: "REVIEW_REQUESTED",
  doc_type: "pull",
  doc_id: "GITHUB_pull_123",
  view_url: "https://github.com/acme/payments-api/pull/123",
  title: "Add retry backoff to the crawler",
  event_time: new Date("2025-04-23T11:00:00Z"),
};
```

### `components.PlatformContentScheduleWebhookEvent`

```typescript
const value: components.PlatformContentScheduleWebhookEvent = {
  version: "1",
  trigger_id: "trigger_test_123",
  event_type: "CONTENT_SCHEDULE",
  datasource: "GOOGLECALENDAR",
  reason: "CONTENT_SCHEDULE",
  doc_type: "event",
  doc_id: "GCAL_event_123",
  view_url: "https://calendar.google.com/event?eid=abc",
  title: "Weekly Sync",
  event_time: new Date("2025-04-23T12:00:00Z"),
  time_offset_seconds: 1800,
};
```

