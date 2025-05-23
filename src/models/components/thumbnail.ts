/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Thumbnail = {
  /**
   * Photo id if the thumbnail is from splash.
   */
  photoId?: string | undefined;
  /**
   * Thumbnail URL. This can be user provided image and/or from downloaded images hosted by Glean.
   */
  url?: string | undefined;
};

/** @internal */
export const Thumbnail$inboundSchema: z.ZodType<
  Thumbnail,
  z.ZodTypeDef,
  unknown
> = z.object({
  photoId: z.string().optional(),
  url: z.string().optional(),
});

/** @internal */
export type Thumbnail$Outbound = {
  photoId?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const Thumbnail$outboundSchema: z.ZodType<
  Thumbnail$Outbound,
  z.ZodTypeDef,
  Thumbnail
> = z.object({
  photoId: z.string().optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Thumbnail$ {
  /** @deprecated use `Thumbnail$inboundSchema` instead. */
  export const inboundSchema = Thumbnail$inboundSchema;
  /** @deprecated use `Thumbnail$outboundSchema` instead. */
  export const outboundSchema = Thumbnail$outboundSchema;
  /** @deprecated use `Thumbnail$Outbound` instead. */
  export type Outbound = Thumbnail$Outbound;
}

export function thumbnailToJSON(thumbnail: Thumbnail): string {
  return JSON.stringify(Thumbnail$outboundSchema.parse(thumbnail));
}

export function thumbnailFromJSON(
  jsonString: string,
): SafeParseResult<Thumbnail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Thumbnail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Thumbnail' from JSON`,
  );
}
