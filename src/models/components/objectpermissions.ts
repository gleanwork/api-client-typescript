/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WritePermission,
  WritePermission$inboundSchema,
  WritePermission$Outbound,
  WritePermission$outboundSchema,
} from "./writepermission.js";

export type ObjectPermissions = {
  /**
   * Describes the write permissions levels that a user has for a specific feature
   */
  write?: WritePermission | undefined;
};

/** @internal */
export const ObjectPermissions$inboundSchema: z.ZodType<
  ObjectPermissions,
  z.ZodTypeDef,
  unknown
> = z.object({
  write: WritePermission$inboundSchema.optional(),
});

/** @internal */
export type ObjectPermissions$Outbound = {
  write?: WritePermission$Outbound | undefined;
};

/** @internal */
export const ObjectPermissions$outboundSchema: z.ZodType<
  ObjectPermissions$Outbound,
  z.ZodTypeDef,
  ObjectPermissions
> = z.object({
  write: WritePermission$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ObjectPermissions$ {
  /** @deprecated use `ObjectPermissions$inboundSchema` instead. */
  export const inboundSchema = ObjectPermissions$inboundSchema;
  /** @deprecated use `ObjectPermissions$outboundSchema` instead. */
  export const outboundSchema = ObjectPermissions$outboundSchema;
  /** @deprecated use `ObjectPermissions$Outbound` instead. */
  export type Outbound = ObjectPermissions$Outbound;
}

export function objectPermissionsToJSON(
  objectPermissions: ObjectPermissions,
): string {
  return JSON.stringify(
    ObjectPermissions$outboundSchema.parse(objectPermissions),
  );
}

export function objectPermissionsFromJSON(
  jsonString: string,
): SafeParseResult<ObjectPermissions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ObjectPermissions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ObjectPermissions' from JSON`,
  );
}
