/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostApiIndexV1DebugDatasourceDocumentRequest = {
  /**
   * The datasource to which the document belongs
   */
  datasource: string;
  debugDocumentRequest: components.DebugDocumentRequest;
};

/** @internal */
export const PostApiIndexV1DebugDatasourceDocumentRequest$inboundSchema:
  z.ZodType<
    PostApiIndexV1DebugDatasourceDocumentRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    datasource: z.string(),
    DebugDocumentRequest: components.DebugDocumentRequest$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "DebugDocumentRequest": "debugDocumentRequest",
    });
  });

/** @internal */
export type PostApiIndexV1DebugDatasourceDocumentRequest$Outbound = {
  datasource: string;
  DebugDocumentRequest: components.DebugDocumentRequest$Outbound;
};

/** @internal */
export const PostApiIndexV1DebugDatasourceDocumentRequest$outboundSchema:
  z.ZodType<
    PostApiIndexV1DebugDatasourceDocumentRequest$Outbound,
    z.ZodTypeDef,
    PostApiIndexV1DebugDatasourceDocumentRequest
  > = z.object({
    datasource: z.string(),
    debugDocumentRequest: components.DebugDocumentRequest$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      debugDocumentRequest: "DebugDocumentRequest",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiIndexV1DebugDatasourceDocumentRequest$ {
  /** @deprecated use `PostApiIndexV1DebugDatasourceDocumentRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostApiIndexV1DebugDatasourceDocumentRequest$inboundSchema;
  /** @deprecated use `PostApiIndexV1DebugDatasourceDocumentRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostApiIndexV1DebugDatasourceDocumentRequest$outboundSchema;
  /** @deprecated use `PostApiIndexV1DebugDatasourceDocumentRequest$Outbound` instead. */
  export type Outbound = PostApiIndexV1DebugDatasourceDocumentRequest$Outbound;
}

export function postApiIndexV1DebugDatasourceDocumentRequestToJSON(
  postApiIndexV1DebugDatasourceDocumentRequest:
    PostApiIndexV1DebugDatasourceDocumentRequest,
): string {
  return JSON.stringify(
    PostApiIndexV1DebugDatasourceDocumentRequest$outboundSchema.parse(
      postApiIndexV1DebugDatasourceDocumentRequest,
    ),
  );
}

export function postApiIndexV1DebugDatasourceDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiIndexV1DebugDatasourceDocumentRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiIndexV1DebugDatasourceDocumentRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostApiIndexV1DebugDatasourceDocumentRequest' from JSON`,
  );
}
