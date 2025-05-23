/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * describes the membership row of a group in the bulk uploaded. Only one of memberUserId and memberGroupName can be specified.
 */
export type DatasourceBulkMembershipDefinition = {
  /**
   * If the member is a user, then the email or datasource id for the user
   */
  memberUserId?: string | undefined;
  /**
   * If the member is a group, then the name of the member group
   */
  memberGroupName?: string | undefined;
};

/** @internal */
export const DatasourceBulkMembershipDefinition$inboundSchema: z.ZodType<
  DatasourceBulkMembershipDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  memberUserId: z.string().optional(),
  memberGroupName: z.string().optional(),
});

/** @internal */
export type DatasourceBulkMembershipDefinition$Outbound = {
  memberUserId?: string | undefined;
  memberGroupName?: string | undefined;
};

/** @internal */
export const DatasourceBulkMembershipDefinition$outboundSchema: z.ZodType<
  DatasourceBulkMembershipDefinition$Outbound,
  z.ZodTypeDef,
  DatasourceBulkMembershipDefinition
> = z.object({
  memberUserId: z.string().optional(),
  memberGroupName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DatasourceBulkMembershipDefinition$ {
  /** @deprecated use `DatasourceBulkMembershipDefinition$inboundSchema` instead. */
  export const inboundSchema = DatasourceBulkMembershipDefinition$inboundSchema;
  /** @deprecated use `DatasourceBulkMembershipDefinition$outboundSchema` instead. */
  export const outboundSchema =
    DatasourceBulkMembershipDefinition$outboundSchema;
  /** @deprecated use `DatasourceBulkMembershipDefinition$Outbound` instead. */
  export type Outbound = DatasourceBulkMembershipDefinition$Outbound;
}

export function datasourceBulkMembershipDefinitionToJSON(
  datasourceBulkMembershipDefinition: DatasourceBulkMembershipDefinition,
): string {
  return JSON.stringify(
    DatasourceBulkMembershipDefinition$outboundSchema.parse(
      datasourceBulkMembershipDefinition,
    ),
  );
}

export function datasourceBulkMembershipDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<DatasourceBulkMembershipDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DatasourceBulkMembershipDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DatasourceBulkMembershipDefinition' from JSON`,
  );
}
