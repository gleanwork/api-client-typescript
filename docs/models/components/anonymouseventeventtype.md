# AnonymousEventEventType

The nature of the event, for example "out of office".

## Example Usage

```typescript
import { AnonymousEventEventType } from "@gleanwork/api-client/models/components";

let value: AnonymousEventEventType = "DEFAULT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DEFAULT" | "OUT_OF_OFFICE" | Unrecognized<string>
```