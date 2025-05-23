/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Agent,
  Agent$inboundSchema,
  Agent$Outbound,
  Agent$outboundSchema,
} from "./agent.js";

export type SearchAgentsResponse = {
  agents?: Array<Agent> | undefined;
};

/** @internal */
export const SearchAgentsResponse$inboundSchema: z.ZodType<
  SearchAgentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  agents: z.array(Agent$inboundSchema).optional(),
});

/** @internal */
export type SearchAgentsResponse$Outbound = {
  agents?: Array<Agent$Outbound> | undefined;
};

/** @internal */
export const SearchAgentsResponse$outboundSchema: z.ZodType<
  SearchAgentsResponse$Outbound,
  z.ZodTypeDef,
  SearchAgentsResponse
> = z.object({
  agents: z.array(Agent$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchAgentsResponse$ {
  /** @deprecated use `SearchAgentsResponse$inboundSchema` instead. */
  export const inboundSchema = SearchAgentsResponse$inboundSchema;
  /** @deprecated use `SearchAgentsResponse$outboundSchema` instead. */
  export const outboundSchema = SearchAgentsResponse$outboundSchema;
  /** @deprecated use `SearchAgentsResponse$Outbound` instead. */
  export type Outbound = SearchAgentsResponse$Outbound;
}

export function searchAgentsResponseToJSON(
  searchAgentsResponse: SearchAgentsResponse,
): string {
  return JSON.stringify(
    SearchAgentsResponse$outboundSchema.parse(searchAgentsResponse),
  );
}

export function searchAgentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<SearchAgentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchAgentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchAgentsResponse' from JSON`,
  );
}
