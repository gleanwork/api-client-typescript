/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AuthToken,
  AuthToken$inboundSchema,
  AuthToken$Outbound,
  AuthToken$outboundSchema,
} from "./authtoken.js";
import {
  FacetBucketFilter,
  FacetBucketFilter$inboundSchema,
  FacetBucketFilter$Outbound,
  FacetBucketFilter$outboundSchema,
} from "./facetbucketfilter.js";
import {
  FacetFilter,
  FacetFilter$inboundSchema,
  FacetFilter$Outbound,
  FacetFilter$outboundSchema,
} from "./facetfilter.js";
import {
  FacetFilterSet,
  FacetFilterSet$inboundSchema,
  FacetFilterSet$Outbound,
  FacetFilterSet$outboundSchema,
} from "./facetfilterset.js";
import {
  RestrictionFilters,
  RestrictionFilters$inboundSchema,
  RestrictionFilters$Outbound,
  RestrictionFilters$outboundSchema,
} from "./restrictionfilters.js";

/**
 * Hints for the response content.
 */
export const ResponseHint = {
  AllResultCounts: "ALL_RESULT_COUNTS",
  FacetResults: "FACET_RESULTS",
  QueryMetadata: "QUERY_METADATA",
  Results: "RESULTS",
  SpellcheckMetadata: "SPELLCHECK_METADATA",
} as const;
/**
 * Hints for the response content.
 */
export type ResponseHint = ClosedEnum<typeof ResponseHint>;

export type SearchRequestOptions = {
  /**
   * Filter results to a single datasource name (e.g. gmail, slack). All results are returned if missing.
   */
  datasourceFilter?: string | undefined;
  /**
   * Filter results to one or more datasources (e.g. gmail, slack). All results are returned if missing.
   */
  datasourcesFilter?: Array<string> | undefined;
  /**
   * If true, the operators in the query are taken to override any operators in facetFilters in the case of conflict. This is used to correctly set rewrittenFacetFilters and rewrittenQuery.
   */
  queryOverridesFacetFilters?: boolean | undefined;
  /**
   * A list of filters for the query. An AND is assumed between different facetFilters. For example, owner Sumeet and type Spreadsheet shows documents that are by Sumeet AND are Spreadsheets.
   */
  facetFilters?: Array<FacetFilter> | undefined;
  /**
   * A list of facet filter sets that will be OR'ed together. SearchRequestOptions where both facetFilterSets and facetFilters set are considered as bad request. Callers should set only one of these fields.
   */
  facetFilterSets?: Array<FacetFilterSet> | undefined;
  facetBucketFilter?: FacetBucketFilter | undefined;
  /**
   * The maximum number of FacetBuckets to return in each FacetResult.
   */
  facetBucketSize: number;
  /**
   * Facets for which FacetResults should be fetched and that don't apply to a particular datasource. If specified, these values will replace the standard default facets (last_updated_at, from, etc.). The requested facets will be returned alongside datasource-specific facets if searching a single datasource.
   */
  defaultFacets?: Array<string> | undefined;
  /**
   * Auth tokens which may be used for non-indexed, federated results (e.g. Gmail).
   */
  authTokens?: Array<AuthToken> | undefined;
  /**
   * Hints that the QE should return result counts (via the datasource facet result) for all supported datasources, rather than just those specified in the datasource[s]Filter
   */
  fetchAllDatasourceCounts?: boolean | undefined;
  /**
   * Array of hints containing which fields should be populated in the response.
   */
  responseHints?: Array<ResponseHint> | undefined;
  /**
   * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.
   */
  timezoneOffset?: number | undefined;
  /**
   * Whether or not to disable spellcheck.
   */
  disableSpellcheck?: boolean | undefined;
  /**
   * Disables automatic adjustment of the input query for spelling corrections or other reasons.
   */
  disableQueryAutocorrect?: boolean | undefined;
  /**
   * [beta] Enables expanded content to be returned for LLM usage. The size of content per result returned should be modified using maxSnippetSize. Server may return less or more than what is specified in maxSnippetSize. For more details, https://docs.google.com/document/d/1CTOLSxWWT9WDEnHVLoCUaxbGYyXYP8kctPRF-RluSQY/edit. Requires sufficient permissions.
   */
  returnLlmContentOverSnippets?: boolean | undefined;
  inclusions?: RestrictionFilters | undefined;
  exclusions?: RestrictionFilters | undefined;
};

/** @internal */
export const ResponseHint$inboundSchema: z.ZodNativeEnum<typeof ResponseHint> =
  z.nativeEnum(ResponseHint);

/** @internal */
export const ResponseHint$outboundSchema: z.ZodNativeEnum<typeof ResponseHint> =
  ResponseHint$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseHint$ {
  /** @deprecated use `ResponseHint$inboundSchema` instead. */
  export const inboundSchema = ResponseHint$inboundSchema;
  /** @deprecated use `ResponseHint$outboundSchema` instead. */
  export const outboundSchema = ResponseHint$outboundSchema;
}

/** @internal */
export const SearchRequestOptions$inboundSchema: z.ZodType<
  SearchRequestOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasourceFilter: z.string().optional(),
  datasourcesFilter: z.array(z.string()).optional(),
  queryOverridesFacetFilters: z.boolean().optional(),
  facetFilters: z.array(FacetFilter$inboundSchema).optional(),
  facetFilterSets: z.array(FacetFilterSet$inboundSchema).optional(),
  facetBucketFilter: FacetBucketFilter$inboundSchema.optional(),
  facetBucketSize: z.number().int(),
  defaultFacets: z.array(z.string()).optional(),
  authTokens: z.array(AuthToken$inboundSchema).optional(),
  fetchAllDatasourceCounts: z.boolean().optional(),
  responseHints: z.array(ResponseHint$inboundSchema).optional(),
  timezoneOffset: z.number().int().optional(),
  disableSpellcheck: z.boolean().optional(),
  disableQueryAutocorrect: z.boolean().optional(),
  returnLlmContentOverSnippets: z.boolean().optional(),
  inclusions: RestrictionFilters$inboundSchema.optional(),
  exclusions: RestrictionFilters$inboundSchema.optional(),
});

/** @internal */
export type SearchRequestOptions$Outbound = {
  datasourceFilter?: string | undefined;
  datasourcesFilter?: Array<string> | undefined;
  queryOverridesFacetFilters?: boolean | undefined;
  facetFilters?: Array<FacetFilter$Outbound> | undefined;
  facetFilterSets?: Array<FacetFilterSet$Outbound> | undefined;
  facetBucketFilter?: FacetBucketFilter$Outbound | undefined;
  facetBucketSize: number;
  defaultFacets?: Array<string> | undefined;
  authTokens?: Array<AuthToken$Outbound> | undefined;
  fetchAllDatasourceCounts?: boolean | undefined;
  responseHints?: Array<string> | undefined;
  timezoneOffset?: number | undefined;
  disableSpellcheck?: boolean | undefined;
  disableQueryAutocorrect?: boolean | undefined;
  returnLlmContentOverSnippets?: boolean | undefined;
  inclusions?: RestrictionFilters$Outbound | undefined;
  exclusions?: RestrictionFilters$Outbound | undefined;
};

/** @internal */
export const SearchRequestOptions$outboundSchema: z.ZodType<
  SearchRequestOptions$Outbound,
  z.ZodTypeDef,
  SearchRequestOptions
> = z.object({
  datasourceFilter: z.string().optional(),
  datasourcesFilter: z.array(z.string()).optional(),
  queryOverridesFacetFilters: z.boolean().optional(),
  facetFilters: z.array(FacetFilter$outboundSchema).optional(),
  facetFilterSets: z.array(FacetFilterSet$outboundSchema).optional(),
  facetBucketFilter: FacetBucketFilter$outboundSchema.optional(),
  facetBucketSize: z.number().int(),
  defaultFacets: z.array(z.string()).optional(),
  authTokens: z.array(AuthToken$outboundSchema).optional(),
  fetchAllDatasourceCounts: z.boolean().optional(),
  responseHints: z.array(ResponseHint$outboundSchema).optional(),
  timezoneOffset: z.number().int().optional(),
  disableSpellcheck: z.boolean().optional(),
  disableQueryAutocorrect: z.boolean().optional(),
  returnLlmContentOverSnippets: z.boolean().optional(),
  inclusions: RestrictionFilters$outboundSchema.optional(),
  exclusions: RestrictionFilters$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRequestOptions$ {
  /** @deprecated use `SearchRequestOptions$inboundSchema` instead. */
  export const inboundSchema = SearchRequestOptions$inboundSchema;
  /** @deprecated use `SearchRequestOptions$outboundSchema` instead. */
  export const outboundSchema = SearchRequestOptions$outboundSchema;
  /** @deprecated use `SearchRequestOptions$Outbound` instead. */
  export type Outbound = SearchRequestOptions$Outbound;
}

export function searchRequestOptionsToJSON(
  searchRequestOptions: SearchRequestOptions,
): string {
  return JSON.stringify(
    SearchRequestOptions$outboundSchema.parse(searchRequestOptions),
  );
}

export function searchRequestOptionsFromJSON(
  jsonString: string,
): SafeParseResult<SearchRequestOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchRequestOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchRequestOptions' from JSON`,
  );
}
