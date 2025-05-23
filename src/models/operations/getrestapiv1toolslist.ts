/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetRestApiV1ToolsListRequest = {
  /**
   * Optional array of tool names to filter by
   */
  toolNames?: Array<string> | undefined;
};

/** @internal */
export const GetRestApiV1ToolsListRequest$inboundSchema: z.ZodType<
  GetRestApiV1ToolsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  toolNames: z.array(z.string()).optional(),
});

/** @internal */
export type GetRestApiV1ToolsListRequest$Outbound = {
  toolNames?: Array<string> | undefined;
};

/** @internal */
export const GetRestApiV1ToolsListRequest$outboundSchema: z.ZodType<
  GetRestApiV1ToolsListRequest$Outbound,
  z.ZodTypeDef,
  GetRestApiV1ToolsListRequest
> = z.object({
  toolNames: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRestApiV1ToolsListRequest$ {
  /** @deprecated use `GetRestApiV1ToolsListRequest$inboundSchema` instead. */
  export const inboundSchema = GetRestApiV1ToolsListRequest$inboundSchema;
  /** @deprecated use `GetRestApiV1ToolsListRequest$outboundSchema` instead. */
  export const outboundSchema = GetRestApiV1ToolsListRequest$outboundSchema;
  /** @deprecated use `GetRestApiV1ToolsListRequest$Outbound` instead. */
  export type Outbound = GetRestApiV1ToolsListRequest$Outbound;
}

export function getRestApiV1ToolsListRequestToJSON(
  getRestApiV1ToolsListRequest: GetRestApiV1ToolsListRequest,
): string {
  return JSON.stringify(
    GetRestApiV1ToolsListRequest$outboundSchema.parse(
      getRestApiV1ToolsListRequest,
    ),
  );
}

export function getRestApiV1ToolsListRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRestApiV1ToolsListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRestApiV1ToolsListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRestApiV1ToolsListRequest' from JSON`,
  );
}
