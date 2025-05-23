/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Describes the request body for /getdocumentstatus API call
 */
export type GetDocumentStatusRequest = {
  /**
   * Datasource to get fetch document status for
   */
  datasource: string;
  /**
   * Object type of the document to get the status for
   */
  objectType: string;
  /**
   * Glean Document ID within the datasource to get the status for.
   */
  docId: string;
};

/** @internal */
export const GetDocumentStatusRequest$inboundSchema: z.ZodType<
  GetDocumentStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasource: z.string(),
  objectType: z.string(),
  docId: z.string(),
});

/** @internal */
export type GetDocumentStatusRequest$Outbound = {
  datasource: string;
  objectType: string;
  docId: string;
};

/** @internal */
export const GetDocumentStatusRequest$outboundSchema: z.ZodType<
  GetDocumentStatusRequest$Outbound,
  z.ZodTypeDef,
  GetDocumentStatusRequest
> = z.object({
  datasource: z.string(),
  objectType: z.string(),
  docId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentStatusRequest$ {
  /** @deprecated use `GetDocumentStatusRequest$inboundSchema` instead. */
  export const inboundSchema = GetDocumentStatusRequest$inboundSchema;
  /** @deprecated use `GetDocumentStatusRequest$outboundSchema` instead. */
  export const outboundSchema = GetDocumentStatusRequest$outboundSchema;
  /** @deprecated use `GetDocumentStatusRequest$Outbound` instead. */
  export type Outbound = GetDocumentStatusRequest$Outbound;
}

export function getDocumentStatusRequestToJSON(
  getDocumentStatusRequest: GetDocumentStatusRequest,
): string {
  return JSON.stringify(
    GetDocumentStatusRequest$outboundSchema.parse(getDocumentStatusRequest),
  );
}

export function getDocumentStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDocumentStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocumentStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocumentStatusRequest' from JSON`,
  );
}
