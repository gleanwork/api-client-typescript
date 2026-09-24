# PlatformSkillSourcePreviewStreamEventServerSentEvent

A typed server-sent event.


## Supported Types

### `components.PlatformSkillSourcePreviewStreamScanServerSentEvent`

```typescript
const value: components.PlatformSkillSourcePreviewStreamScanServerSentEvent = {
  event: "SCAN",
  data: {
    type: "SCAN",
    total: 524276,
    skill_paths: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

### `components.PlatformSkillSourcePreviewStreamProgressServerSentEvent`

```typescript
const value:
  components.PlatformSkillSourcePreviewStreamProgressServerSentEvent = {
    event: "PROGRESS",
    data: {
      type: "PROGRESS",
      completed: 84574,
      total: 663604,
      current_skill: "<value>",
    },
  };
```

### `components.PlatformSkillSourcePreviewStreamSkillServerSentEvent`

```typescript
const value: components.PlatformSkillSourcePreviewStreamSkillServerSentEvent = {
  event: "SKILL",
  data: {
    type: "SKILL",
    skill: {
      display_name: "Grady_Hagenes25",
      description:
        "superb ultimately throbbing holster atop nauseate violent minus till perp",
      source_url: "https://disloyal-fun.biz",
      commit_sha: "<value>",
      main_content: "<value>",
      files: [],
      file_tree: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
};
```

### `components.PlatformSkillSourcePreviewStreamResultServerSentEvent`

```typescript
const value: components.PlatformSkillSourcePreviewStreamResultServerSentEvent =
  {
    event: "RESULT",
    data: {
      type: "RESULT",
      response: {
        skills: [],
        failures: [],
        request_id: "<id>",
      },
    },
  };
```

### `components.PlatformSkillSourcePreviewStreamErrorServerSentEvent`

```typescript
const value: components.PlatformSkillSourcePreviewStreamErrorServerSentEvent = {
  event: "ERROR",
  data: {
    type: "ERROR",
    error: {
      type: "https://developers.glean.com/errors/invalid-cursor",
      title: "Invalid Pagination Cursor",
      status: 400,
      detail:
        "The provided cursor has expired. Start a new search to get a fresh cursor.\n",
      code: "invalid_cursor",
      documentation_url: "https://developers.glean.com/errors/invalid-cursor",
      request_id: "req_7f8a9b0c1d2e",
      errors: [
        {
          pointer: "/messages/0/role",
          detail: "Must be one of: USER, GLEAN_AI.",
          code: "invalid_cursor",
        },
      ],
      authentication_suggestions: [],
    },
  },
};
```

