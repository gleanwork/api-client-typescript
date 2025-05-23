/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ActivityEventParams,
  ActivityEventParams$inboundSchema,
  ActivityEventParams$Outbound,
  ActivityEventParams$outboundSchema,
} from "./activityeventparams.js";

/**
 * The type of activity this represents.
 */
export const ActivityEventAction = {
  View: "VIEW",
  Edit: "EDIT",
  Search: "SEARCH",
  Comment: "COMMENT",
  Crawl: "CRAWL",
  HistoricalSearch: "HISTORICAL_SEARCH",
  HistoricalView: "HISTORICAL_VIEW",
} as const;
/**
 * The type of activity this represents.
 */
export type ActivityEventAction = ClosedEnum<typeof ActivityEventAction>;

export type ActivityEvent = {
  /**
   * Universally unique identifier of the event. To allow for reliable retransmission, only the earliest received event of a given UUID is considered valid by the server and subsequent are ignored.
   */
  id?: string | undefined;
  /**
   * The type of activity this represents.
   */
  action: ActivityEventAction;
  params?: ActivityEventParams | undefined;
  /**
   * The ISO 8601 timestamp when the activity began.
   */
  timestamp: Date;
  /**
   * The URL of the activity.
   */
  url: string;
};

/** @internal */
export const ActivityEventAction$inboundSchema: z.ZodNativeEnum<
  typeof ActivityEventAction
> = z.nativeEnum(ActivityEventAction);

/** @internal */
export const ActivityEventAction$outboundSchema: z.ZodNativeEnum<
  typeof ActivityEventAction
> = ActivityEventAction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityEventAction$ {
  /** @deprecated use `ActivityEventAction$inboundSchema` instead. */
  export const inboundSchema = ActivityEventAction$inboundSchema;
  /** @deprecated use `ActivityEventAction$outboundSchema` instead. */
  export const outboundSchema = ActivityEventAction$outboundSchema;
}

/** @internal */
export const ActivityEvent$inboundSchema: z.ZodType<
  ActivityEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  action: ActivityEventAction$inboundSchema,
  params: ActivityEventParams$inboundSchema.optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  url: z.string(),
});

/** @internal */
export type ActivityEvent$Outbound = {
  id?: string | undefined;
  action: string;
  params?: ActivityEventParams$Outbound | undefined;
  timestamp: string;
  url: string;
};

/** @internal */
export const ActivityEvent$outboundSchema: z.ZodType<
  ActivityEvent$Outbound,
  z.ZodTypeDef,
  ActivityEvent
> = z.object({
  id: z.string().optional(),
  action: ActivityEventAction$outboundSchema,
  params: ActivityEventParams$outboundSchema.optional(),
  timestamp: z.date().transform(v => v.toISOString()),
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityEvent$ {
  /** @deprecated use `ActivityEvent$inboundSchema` instead. */
  export const inboundSchema = ActivityEvent$inboundSchema;
  /** @deprecated use `ActivityEvent$outboundSchema` instead. */
  export const outboundSchema = ActivityEvent$outboundSchema;
  /** @deprecated use `ActivityEvent$Outbound` instead. */
  export type Outbound = ActivityEvent$Outbound;
}

export function activityEventToJSON(activityEvent: ActivityEvent): string {
  return JSON.stringify(ActivityEvent$outboundSchema.parse(activityEvent));
}

export function activityEventFromJSON(
  jsonString: string,
): SafeParseResult<ActivityEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivityEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivityEvent' from JSON`,
  );
}
