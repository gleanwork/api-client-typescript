# SectionType

Type of the section. This defines how the section should be interpreted and rendered in the digest.

## Example Usage

```typescript
import { SectionType } from "@gleanwork/api-client/models/components";

let value: SectionType = "TOPIC";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CHANNEL" | "MENTIONS" | "TOPIC" | Unrecognized<string>
```