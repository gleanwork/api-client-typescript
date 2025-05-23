/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type User = {
  /**
   * An opaque user ID for the claimed authority (i.e., the actas param, or the origid if actas is not specified).
   */
  userID?: string | undefined;
  /**
   * An opaque user ID for the authenticated user (ignores actas).
   */
  origID?: string | undefined;
};

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .object({
    userID: z.string().optional(),
    origID: z.string().optional(),
  });

/** @internal */
export type User$Outbound = {
  userID?: string | undefined;
  origID?: string | undefined;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.object({
    userID: z.string().optional(),
    origID: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

export function userToJSON(user: User): string {
  return JSON.stringify(User$outboundSchema.parse(user));
}

export function userFromJSON(
  jsonString: string,
): SafeParseResult<User, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => User$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'User' from JSON`,
  );
}
