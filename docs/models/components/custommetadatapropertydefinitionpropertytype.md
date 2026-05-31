# CustomMetadataPropertyDefinitionPropertyType

The type of metadata key. This governs the search and faceting behavior.

## Example Usage

```typescript
import { CustomMetadataPropertyDefinitionPropertyType } from "@gleanwork/api-client/models/components";

let value: CustomMetadataPropertyDefinitionPropertyType = "MULTIPICKLIST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "PICKLIST" | "TEXTLIST" | "MULTIPICKLIST" | Unrecognized<string>
```