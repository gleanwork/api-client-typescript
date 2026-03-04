# Provider

## Example Usage

```typescript
import { Provider } from "@gleanwork/api-client/models/components";

let value: Provider = "ZOOM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ZOOM" | "HANGOUTS" | Unrecognized<string>
```