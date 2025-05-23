/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomFieldValueHyperlink = {
  /**
   * Anchor text for hyperlink.
   */
  urlAnchor?: string | undefined;
  /**
   * Link for this URL.
   */
  urlLink?: string | undefined;
};

/** @internal */
export const CustomFieldValueHyperlink$inboundSchema: z.ZodType<
  CustomFieldValueHyperlink,
  z.ZodTypeDef,
  unknown
> = z.object({
  urlAnchor: z.string().optional(),
  urlLink: z.string().optional(),
});

/** @internal */
export type CustomFieldValueHyperlink$Outbound = {
  urlAnchor?: string | undefined;
  urlLink?: string | undefined;
};

/** @internal */
export const CustomFieldValueHyperlink$outboundSchema: z.ZodType<
  CustomFieldValueHyperlink$Outbound,
  z.ZodTypeDef,
  CustomFieldValueHyperlink
> = z.object({
  urlAnchor: z.string().optional(),
  urlLink: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldValueHyperlink$ {
  /** @deprecated use `CustomFieldValueHyperlink$inboundSchema` instead. */
  export const inboundSchema = CustomFieldValueHyperlink$inboundSchema;
  /** @deprecated use `CustomFieldValueHyperlink$outboundSchema` instead. */
  export const outboundSchema = CustomFieldValueHyperlink$outboundSchema;
  /** @deprecated use `CustomFieldValueHyperlink$Outbound` instead. */
  export type Outbound = CustomFieldValueHyperlink$Outbound;
}

export function customFieldValueHyperlinkToJSON(
  customFieldValueHyperlink: CustomFieldValueHyperlink,
): string {
  return JSON.stringify(
    CustomFieldValueHyperlink$outboundSchema.parse(customFieldValueHyperlink),
  );
}

export function customFieldValueHyperlinkFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldValueHyperlink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldValueHyperlink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldValueHyperlink' from JSON`,
  );
}
