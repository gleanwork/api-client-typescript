/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A subsection of the results list from which distinct sections should be created.
 */
export type AutocompleteResultGroup = {
  /**
   * The inclusive start index of the range.
   */
  startIndex?: number | undefined;
  /**
   * The exclusive end index of the range.
   */
  endIndex?: number | undefined;
  /**
   * The title of the result group to be displayed. Empty means no title.
   */
  title?: string | undefined;
};

/** @internal */
export const AutocompleteResultGroup$inboundSchema: z.ZodType<
  AutocompleteResultGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  startIndex: z.number().int().optional(),
  endIndex: z.number().int().optional(),
  title: z.string().optional(),
});

/** @internal */
export type AutocompleteResultGroup$Outbound = {
  startIndex?: number | undefined;
  endIndex?: number | undefined;
  title?: string | undefined;
};

/** @internal */
export const AutocompleteResultGroup$outboundSchema: z.ZodType<
  AutocompleteResultGroup$Outbound,
  z.ZodTypeDef,
  AutocompleteResultGroup
> = z.object({
  startIndex: z.number().int().optional(),
  endIndex: z.number().int().optional(),
  title: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AutocompleteResultGroup$ {
  /** @deprecated use `AutocompleteResultGroup$inboundSchema` instead. */
  export const inboundSchema = AutocompleteResultGroup$inboundSchema;
  /** @deprecated use `AutocompleteResultGroup$outboundSchema` instead. */
  export const outboundSchema = AutocompleteResultGroup$outboundSchema;
  /** @deprecated use `AutocompleteResultGroup$Outbound` instead. */
  export type Outbound = AutocompleteResultGroup$Outbound;
}

export function autocompleteResultGroupToJSON(
  autocompleteResultGroup: AutocompleteResultGroup,
): string {
  return JSON.stringify(
    AutocompleteResultGroup$outboundSchema.parse(autocompleteResultGroup),
  );
}

export function autocompleteResultGroupFromJSON(
  jsonString: string,
): SafeParseResult<AutocompleteResultGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AutocompleteResultGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AutocompleteResultGroup' from JSON`,
  );
}
