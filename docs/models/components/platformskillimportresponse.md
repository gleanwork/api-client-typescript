# PlatformSkillImportResponse

## Example Usage

```typescript
import { PlatformSkillImportResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillImportResponse = {
  skills: [
    {
      id: "<id>",
      display_name: "Kameron36",
      description:
        "sedately scowl other yearningly aggravating anti heavily extract",
      latest_version: 33039,
      latest_minor_version: 380295,
      status: "DRAFT",
      origin: "CUSTOM",
      owner: {
        name: "<value>",
      },
      created_at: new Date("2024-11-30T20:43:59.162Z"),
      updated_at: new Date("2024-07-06T04:25:41.450Z"),
    },
  ],
  request_id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `skills`                                                               | [components.PlatformSkill](../../models/components/platformskill.md)[] | :heavy_check_mark:                                                     | Independently persisted skills in request order.                       |
| `requestId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Platform-generated request ID for support correlation.                 |