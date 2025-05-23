/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FacetBucket,
  FacetBucket$inboundSchema,
  FacetBucket$Outbound,
  FacetBucket$outboundSchema,
} from "./facetbucket.js";

export type FacetResult = {
  /**
   * The source of this facet (e.g. container_name, type, last_updated_at).
   */
  sourceName?: string | undefined;
  /**
   * How to display this facet. Currently supportes 'SelectSingle' and 'SelectMultiple'.
   */
  operatorName?: string | undefined;
  /**
   * A list of unique buckets that exist within this result set.
   */
  buckets?: Array<FacetBucket> | undefined;
  /**
   * Returns true if more buckets exist than those returned. Additional buckets can be retrieve by requesting again with a higher facetBucketSize.
   */
  hasMoreBuckets?: boolean | undefined;
  /**
   * For most facets this will be the empty string, meaning the facet is high-level and applies to all documents for the datasource. When non-empty, this is used to group facets together (i.e. group facets for each doctype for a certain datasource)
   */
  groupName?: string | undefined;
};

/** @internal */
export const FacetResult$inboundSchema: z.ZodType<
  FacetResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceName: z.string().optional(),
  operatorName: z.string().optional(),
  buckets: z.array(FacetBucket$inboundSchema).optional(),
  hasMoreBuckets: z.boolean().optional(),
  groupName: z.string().optional(),
});

/** @internal */
export type FacetResult$Outbound = {
  sourceName?: string | undefined;
  operatorName?: string | undefined;
  buckets?: Array<FacetBucket$Outbound> | undefined;
  hasMoreBuckets?: boolean | undefined;
  groupName?: string | undefined;
};

/** @internal */
export const FacetResult$outboundSchema: z.ZodType<
  FacetResult$Outbound,
  z.ZodTypeDef,
  FacetResult
> = z.object({
  sourceName: z.string().optional(),
  operatorName: z.string().optional(),
  buckets: z.array(FacetBucket$outboundSchema).optional(),
  hasMoreBuckets: z.boolean().optional(),
  groupName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FacetResult$ {
  /** @deprecated use `FacetResult$inboundSchema` instead. */
  export const inboundSchema = FacetResult$inboundSchema;
  /** @deprecated use `FacetResult$outboundSchema` instead. */
  export const outboundSchema = FacetResult$outboundSchema;
  /** @deprecated use `FacetResult$Outbound` instead. */
  export type Outbound = FacetResult$Outbound;
}

export function facetResultToJSON(facetResult: FacetResult): string {
  return JSON.stringify(FacetResult$outboundSchema.parse(facetResult));
}

export function facetResultFromJSON(
  jsonString: string,
): SafeParseResult<FacetResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FacetResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FacetResult' from JSON`,
  );
}
