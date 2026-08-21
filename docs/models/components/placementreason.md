# PlacementReason

Placement source for ranked feed results. ORGANIC means the card was emitted by normal feed ranking. PROMO means the card was inserted by the homepage cards promo framework. PINNED means the card was moved to the head of the ranked stack (e.g. knowledge-gap pilot cards).

## Example Usage

```typescript
import { PlacementReason } from "@gleanwork/api-client/models/components";

let value: PlacementReason = "PINNED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ORGANIC" | "PROMO" | "PINNED" | Unrecognized<string>
```