# StructuredLocation

Detailed location with information about country, state, city etc.

## Example Usage

```typescript
import { StructuredLocation } from "@gleanwork/api-client/models/components";

let value: StructuredLocation = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `deskLocation`                                            | *string*                                                  | :heavy_minus_sign:                                        | Desk number.                                              |
| `timezone`                                                | *string*                                                  | :heavy_minus_sign:                                        | Location's timezone, e.g. UTC, PST.                       |
| `address`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Office address or name.                                   |
| `city`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Name of the city.                                         |
| `state`                                                   | *string*                                                  | :heavy_minus_sign:                                        | State code.                                               |
| `region`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Region information, e.g. NORAM, APAC.                     |
| `zipCode`                                                 | *string*                                                  | :heavy_minus_sign:                                        | ZIP Code for the address.                                 |
| `country`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Country name.                                             |
| `countryCode`                                             | *string*                                                  | :heavy_minus_sign:                                        | Alpha-2 or Alpha-3 ISO 3166 country code, e.g. US or USA. |