/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Controls how "shared" a document must be to get picked for scans.
 */
export type SharingOptions = {
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  enabled?: boolean | undefined;
  /**
   * The minimum number of users the document is shared with.
   */
  threshold?: number | undefined;
  /**
   * Documents will be filtered based on how many people have access to it.
   */
  thresholdEnabled?: boolean | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  anyoneWithLinkEnabled?: boolean | undefined;
  /**
   * Only users within the organization can access the document.
   */
  anyoneInternalEnabled?: boolean | undefined;
  /**
   * Anyone on the internet can access the document.
   */
  anonymousAccessEnabled?: boolean | undefined;
  /**
   * Enable user access check
   */
  userAccessEnabled?: boolean | undefined;
  /**
   * Any one of the specified users can access the document.
   */
  userIds?: Array<string> | undefined;
};

/** @internal */
export const SharingOptions$inboundSchema: z.ZodType<
  SharingOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  enabled: z.boolean().optional(),
  threshold: z.number().int().optional(),
  thresholdEnabled: z.boolean().optional(),
  anyoneWithLinkEnabled: z.boolean().optional(),
  anyoneInternalEnabled: z.boolean().optional(),
  anonymousAccessEnabled: z.boolean().optional(),
  userAccessEnabled: z.boolean().optional(),
  userIds: z.array(z.string()).optional(),
});

/** @internal */
export type SharingOptions$Outbound = {
  enabled?: boolean | undefined;
  threshold?: number | undefined;
  thresholdEnabled?: boolean | undefined;
  anyoneWithLinkEnabled?: boolean | undefined;
  anyoneInternalEnabled?: boolean | undefined;
  anonymousAccessEnabled?: boolean | undefined;
  userAccessEnabled?: boolean | undefined;
  userIds?: Array<string> | undefined;
};

/** @internal */
export const SharingOptions$outboundSchema: z.ZodType<
  SharingOptions$Outbound,
  z.ZodTypeDef,
  SharingOptions
> = z.object({
  enabled: z.boolean().optional(),
  threshold: z.number().int().optional(),
  thresholdEnabled: z.boolean().optional(),
  anyoneWithLinkEnabled: z.boolean().optional(),
  anyoneInternalEnabled: z.boolean().optional(),
  anonymousAccessEnabled: z.boolean().optional(),
  userAccessEnabled: z.boolean().optional(),
  userIds: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SharingOptions$ {
  /** @deprecated use `SharingOptions$inboundSchema` instead. */
  export const inboundSchema = SharingOptions$inboundSchema;
  /** @deprecated use `SharingOptions$outboundSchema` instead. */
  export const outboundSchema = SharingOptions$outboundSchema;
  /** @deprecated use `SharingOptions$Outbound` instead. */
  export type Outbound = SharingOptions$Outbound;
}

export function sharingOptionsToJSON(sharingOptions: SharingOptions): string {
  return JSON.stringify(SharingOptions$outboundSchema.parse(sharingOptions));
}

export function sharingOptionsFromJSON(
  jsonString: string,
): SafeParseResult<SharingOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SharingOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SharingOptions' from JSON`,
  );
}
