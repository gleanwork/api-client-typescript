/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UserGeneratedContentId = {
  /**
   * The opaque id of the user generated content.
   */
  id?: number | undefined;
};

/** @internal */
export const UserGeneratedContentId$inboundSchema: z.ZodType<
  UserGeneratedContentId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
});

/** @internal */
export type UserGeneratedContentId$Outbound = {
  id?: number | undefined;
};

/** @internal */
export const UserGeneratedContentId$outboundSchema: z.ZodType<
  UserGeneratedContentId$Outbound,
  z.ZodTypeDef,
  UserGeneratedContentId
> = z.object({
  id: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserGeneratedContentId$ {
  /** @deprecated use `UserGeneratedContentId$inboundSchema` instead. */
  export const inboundSchema = UserGeneratedContentId$inboundSchema;
  /** @deprecated use `UserGeneratedContentId$outboundSchema` instead. */
  export const outboundSchema = UserGeneratedContentId$outboundSchema;
  /** @deprecated use `UserGeneratedContentId$Outbound` instead. */
  export type Outbound = UserGeneratedContentId$Outbound;
}

export function userGeneratedContentIdToJSON(
  userGeneratedContentId: UserGeneratedContentId,
): string {
  return JSON.stringify(
    UserGeneratedContentId$outboundSchema.parse(userGeneratedContentId),
  );
}

export function userGeneratedContentIdFromJSON(
  jsonString: string,
): SafeParseResult<UserGeneratedContentId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserGeneratedContentId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserGeneratedContentId' from JSON`,
  );
}
