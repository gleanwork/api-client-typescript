/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetDocPermissionsRequest = {
  /**
   * The Glean Document ID to retrieve permissions for.
   */
  documentId?: string | undefined;
};

/** @internal */
export const GetDocPermissionsRequest$inboundSchema: z.ZodType<
  GetDocPermissionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentId: z.string().optional(),
});

/** @internal */
export type GetDocPermissionsRequest$Outbound = {
  documentId?: string | undefined;
};

/** @internal */
export const GetDocPermissionsRequest$outboundSchema: z.ZodType<
  GetDocPermissionsRequest$Outbound,
  z.ZodTypeDef,
  GetDocPermissionsRequest
> = z.object({
  documentId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocPermissionsRequest$ {
  /** @deprecated use `GetDocPermissionsRequest$inboundSchema` instead. */
  export const inboundSchema = GetDocPermissionsRequest$inboundSchema;
  /** @deprecated use `GetDocPermissionsRequest$outboundSchema` instead. */
  export const outboundSchema = GetDocPermissionsRequest$outboundSchema;
  /** @deprecated use `GetDocPermissionsRequest$Outbound` instead. */
  export type Outbound = GetDocPermissionsRequest$Outbound;
}

export function getDocPermissionsRequestToJSON(
  getDocPermissionsRequest: GetDocPermissionsRequest,
): string {
  return JSON.stringify(
    GetDocPermissionsRequest$outboundSchema.parse(getDocPermissionsRequest),
  );
}

export function getDocPermissionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDocPermissionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocPermissionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocPermissionsRequest' from JSON`,
  );
}
