/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * describes a list of groups that are all required in a permissions constraint
 */
export type PermissionsGroupIntersectionDefinition = {
  requiredGroups?: Array<string> | undefined;
};

/** @internal */
export const PermissionsGroupIntersectionDefinition$inboundSchema: z.ZodType<
  PermissionsGroupIntersectionDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  requiredGroups: z.array(z.string()).optional(),
});

/** @internal */
export type PermissionsGroupIntersectionDefinition$Outbound = {
  requiredGroups?: Array<string> | undefined;
};

/** @internal */
export const PermissionsGroupIntersectionDefinition$outboundSchema: z.ZodType<
  PermissionsGroupIntersectionDefinition$Outbound,
  z.ZodTypeDef,
  PermissionsGroupIntersectionDefinition
> = z.object({
  requiredGroups: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PermissionsGroupIntersectionDefinition$ {
  /** @deprecated use `PermissionsGroupIntersectionDefinition$inboundSchema` instead. */
  export const inboundSchema =
    PermissionsGroupIntersectionDefinition$inboundSchema;
  /** @deprecated use `PermissionsGroupIntersectionDefinition$outboundSchema` instead. */
  export const outboundSchema =
    PermissionsGroupIntersectionDefinition$outboundSchema;
  /** @deprecated use `PermissionsGroupIntersectionDefinition$Outbound` instead. */
  export type Outbound = PermissionsGroupIntersectionDefinition$Outbound;
}

export function permissionsGroupIntersectionDefinitionToJSON(
  permissionsGroupIntersectionDefinition:
    PermissionsGroupIntersectionDefinition,
): string {
  return JSON.stringify(
    PermissionsGroupIntersectionDefinition$outboundSchema.parse(
      permissionsGroupIntersectionDefinition,
    ),
  );
}

export function permissionsGroupIntersectionDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<PermissionsGroupIntersectionDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PermissionsGroupIntersectionDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PermissionsGroupIntersectionDefinition' from JSON`,
  );
}
