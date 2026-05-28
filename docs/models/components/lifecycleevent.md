# LifeCycleEvent

## Example Usage

```typescript
import { LifeCycleEvent } from "@gleanwork/api-client/models/components";

let value: LifeCycleEvent = {
  event: "INDEXED",
  timestamp: "2021-08-06T17:58:01.000Z",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `event`                                                                          | [components.LifeCycleEventEvent](../../models/components/lifecycleeventevent.md) | :heavy_minus_sign:                                                               | Type of event                                                                    | INDEXED                                                                          |
| `timestamp`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Timestamp of the event                                                           | 2021-08-06T17:58:01.000Z                                                         |