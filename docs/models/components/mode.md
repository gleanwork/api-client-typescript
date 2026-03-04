# Mode

Top level modes to run GleanChat in.

## Example Usage

```typescript
import { Mode } from "@gleanwork/api-client/models/components";

let value: Mode = "QUICK";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DEFAULT" | "QUICK" | Unrecognized<string>
```