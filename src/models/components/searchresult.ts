/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ClusterGroup,
  ClusterGroup$inboundSchema,
  ClusterGroup$Outbound,
  ClusterGroup$outboundSchema,
} from "./clustergroup.js";
import {
  ClusterTypeEnum,
  ClusterTypeEnum$inboundSchema,
  ClusterTypeEnum$outboundSchema,
} from "./clustertypeenum.js";
import {
  Document,
  Document$inboundSchema,
  Document$Outbound,
  Document$outboundSchema,
} from "./document.js";
import {
  PinDocument,
  PinDocument$inboundSchema,
  PinDocument$Outbound,
  PinDocument$outboundSchema,
} from "./pindocument.js";
import {
  QuerySuggestion,
  QuerySuggestion$inboundSchema,
  QuerySuggestion$Outbound,
  QuerySuggestion$outboundSchema,
} from "./querysuggestion.js";
import {
  QuerySuggestionList,
  QuerySuggestionList$inboundSchema,
  QuerySuggestionList$Outbound,
  QuerySuggestionList$outboundSchema,
} from "./querysuggestionlist.js";
import {
  RelatedDocuments,
  RelatedDocuments$inboundSchema,
  RelatedDocuments$Outbound,
  RelatedDocuments$outboundSchema,
} from "./relateddocuments.js";
import {
  SearchResultProminenceEnum,
  SearchResultProminenceEnum$inboundSchema,
  SearchResultProminenceEnum$outboundSchema,
} from "./searchresultprominenceenum.js";
import {
  SearchResultSnippet,
  SearchResultSnippet$inboundSchema,
  SearchResultSnippet$Outbound,
  SearchResultSnippet$outboundSchema,
} from "./searchresultsnippet.js";
import {
  StructuredResult,
  StructuredResult$inboundSchema,
  StructuredResult$Outbound,
  StructuredResult$outboundSchema,
} from "./structuredresult.js";

export type SearchResult = {
  /**
   * An array of entities in the work graph retrieved via a data request.
   */
  structuredResults?: Array<StructuredResult> | undefined;
  /**
   * An opaque token that represents this particular result in this particular query. To be used for /feedback reporting.
   */
  trackingToken?: string | undefined;
  document?: Document | undefined;
  title?: string | undefined;
  url: string;
  /**
   * A deep link, if available, into the datasource's native application for the user's platform (e.g. slack://...).
   */
  nativeAppUrl?: string | undefined;
  /**
   * Text content from the result document which contains search query terms, if available.
   */
  snippets?: Array<SearchResultSnippet> | undefined;
  /**
   * The full body text of the result if not already contained in the snippets. Only populated for conversation results (e.g. results from a messaging app such as Slack).
   */
  fullText?: string | undefined;
  /**
   * The full body text of the result if not already contained in the snippets; each item in the array represents a separate line in the original text. Only populated for conversation results (e.g. results from a messaging app such as Slack).
   */
  fullTextList?: Array<string> | undefined;
  /**
   * A list of results related to this search result. Eg. for conversation results it contains individual messages from the conversation document which will be shown on SERP.
   */
  relatedResults?: Array<RelatedDocuments> | undefined;
  /**
   * A list of results that should be displayed as associated with this result.
   */
  clusteredResults?: Array<SearchResult> | undefined;
  /**
   * A list of results that should be displayed as associated with this result.
   */
  allClusteredResults?: Array<ClusterGroup> | undefined;
  /**
   * The total number of attachments.
   */
  attachmentCount?: number | undefined;
  /**
   * A (potentially partial) list of results representing documents attached to the main result document.
   */
  attachments?: Array<SearchResult> | undefined;
  /**
   * A list of results that should be displayed as backlinks of this result in reverse chronological order.
   */
  backlinkResults?: Array<SearchResult> | undefined;
  /**
   * The reason for inclusion of clusteredResults.
   */
  clusterType?: ClusterTypeEnum | undefined;
  mustIncludeSuggestions?: QuerySuggestionList | undefined;
  querySuggestion?: QuerySuggestion | undefined;
  /**
   * The level of visual distinction that should be given to a result.
   *
   * @remarks
   */
  prominence?: SearchResultProminenceEnum | undefined;
  /**
   * Additional context for the relationship between the result and the document it's attached to.
   */
  attachmentContext?: string | undefined;
  /**
   * A list of pins associated with this search result.
   */
  pins?: Array<PinDocument> | undefined;
};

/** @internal */
export const SearchResult$inboundSchema: z.ZodType<
  SearchResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  structuredResults: z.array(z.lazy(() => StructuredResult$inboundSchema))
    .optional(),
  trackingToken: z.string().optional(),
  document: z.lazy(() => Document$inboundSchema).optional(),
  title: z.string().optional(),
  url: z.string(),
  nativeAppUrl: z.string().optional(),
  snippets: z.array(z.lazy(() => SearchResultSnippet$inboundSchema)).optional(),
  fullText: z.string().optional(),
  fullTextList: z.array(z.string()).optional(),
  relatedResults: z.array(z.lazy(() => RelatedDocuments$inboundSchema))
    .optional(),
  clusteredResults: z.array(z.lazy(() => SearchResult$inboundSchema))
    .optional(),
  allClusteredResults: z.array(z.lazy(() => ClusterGroup$inboundSchema))
    .optional(),
  attachmentCount: z.number().int().optional(),
  attachments: z.array(z.lazy(() => SearchResult$inboundSchema)).optional(),
  backlinkResults: z.array(z.lazy(() => SearchResult$inboundSchema)).optional(),
  clusterType: ClusterTypeEnum$inboundSchema.optional(),
  mustIncludeSuggestions: z.lazy(() => QuerySuggestionList$inboundSchema)
    .optional(),
  querySuggestion: z.lazy(() => QuerySuggestion$inboundSchema).optional(),
  prominence: SearchResultProminenceEnum$inboundSchema.optional(),
  attachmentContext: z.string().optional(),
  pins: z.array(z.lazy(() => PinDocument$inboundSchema)).optional(),
});

/** @internal */
export type SearchResult$Outbound = {
  structuredResults?: Array<StructuredResult$Outbound> | undefined;
  trackingToken?: string | undefined;
  document?: Document$Outbound | undefined;
  title?: string | undefined;
  url: string;
  nativeAppUrl?: string | undefined;
  snippets?: Array<SearchResultSnippet$Outbound> | undefined;
  fullText?: string | undefined;
  fullTextList?: Array<string> | undefined;
  relatedResults?: Array<RelatedDocuments$Outbound> | undefined;
  clusteredResults?: Array<SearchResult$Outbound> | undefined;
  allClusteredResults?: Array<ClusterGroup$Outbound> | undefined;
  attachmentCount?: number | undefined;
  attachments?: Array<SearchResult$Outbound> | undefined;
  backlinkResults?: Array<SearchResult$Outbound> | undefined;
  clusterType?: string | undefined;
  mustIncludeSuggestions?: QuerySuggestionList$Outbound | undefined;
  querySuggestion?: QuerySuggestion$Outbound | undefined;
  prominence?: string | undefined;
  attachmentContext?: string | undefined;
  pins?: Array<PinDocument$Outbound> | undefined;
};

/** @internal */
export const SearchResult$outboundSchema: z.ZodType<
  SearchResult$Outbound,
  z.ZodTypeDef,
  SearchResult
> = z.object({
  structuredResults: z.array(z.lazy(() => StructuredResult$outboundSchema))
    .optional(),
  trackingToken: z.string().optional(),
  document: z.lazy(() => Document$outboundSchema).optional(),
  title: z.string().optional(),
  url: z.string(),
  nativeAppUrl: z.string().optional(),
  snippets: z.array(z.lazy(() => SearchResultSnippet$outboundSchema))
    .optional(),
  fullText: z.string().optional(),
  fullTextList: z.array(z.string()).optional(),
  relatedResults: z.array(z.lazy(() => RelatedDocuments$outboundSchema))
    .optional(),
  clusteredResults: z.array(z.lazy(() => SearchResult$outboundSchema))
    .optional(),
  allClusteredResults: z.array(z.lazy(() => ClusterGroup$outboundSchema))
    .optional(),
  attachmentCount: z.number().int().optional(),
  attachments: z.array(z.lazy(() => SearchResult$outboundSchema)).optional(),
  backlinkResults: z.array(z.lazy(() => SearchResult$outboundSchema))
    .optional(),
  clusterType: ClusterTypeEnum$outboundSchema.optional(),
  mustIncludeSuggestions: z.lazy(() => QuerySuggestionList$outboundSchema)
    .optional(),
  querySuggestion: z.lazy(() => QuerySuggestion$outboundSchema).optional(),
  prominence: SearchResultProminenceEnum$outboundSchema.optional(),
  attachmentContext: z.string().optional(),
  pins: z.array(z.lazy(() => PinDocument$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchResult$ {
  /** @deprecated use `SearchResult$inboundSchema` instead. */
  export const inboundSchema = SearchResult$inboundSchema;
  /** @deprecated use `SearchResult$outboundSchema` instead. */
  export const outboundSchema = SearchResult$outboundSchema;
  /** @deprecated use `SearchResult$Outbound` instead. */
  export type Outbound = SearchResult$Outbound;
}

export function searchResultToJSON(searchResult: SearchResult): string {
  return JSON.stringify(SearchResult$outboundSchema.parse(searchResult));
}

export function searchResultFromJSON(
  jsonString: string,
): SafeParseResult<SearchResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchResult' from JSON`,
  );
}
