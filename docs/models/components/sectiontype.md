# SectionType

Type of the section. This defines how the section should be interpreted and rendered in the digest.

## Example Usage

```typescript
import { SectionType } from "@gleanwork/api-client/models/components";

let value: SectionType = "TOPIC";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CHANNEL" | "MENTIONS" | "TOPIC" | Unrecognized<string>
```