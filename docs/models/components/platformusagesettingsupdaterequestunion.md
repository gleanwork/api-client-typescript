# PlatformUsageSettingsUpdateRequestUnion

Request body for updating workspace-wide usage settings.



## Supported Types

### `components.PlatformUsageSettingsUpdateRequest1`

```typescript
const value: components.PlatformUsageSettingsUpdateRequest1 = {
  multiple_membership_resolution: {
    per_member: {
      idp_groups: "LOWEST",
    },
  },
};
```

### `components.PlatformUsageSettingsUpdateRequest2`

```typescript
const value: components.PlatformUsageSettingsUpdateRequest2 = {
  limit_increase_requests: {
    business_justification: "OPTIONAL",
  },
};
```

