/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type GleanDataErrorData = {
  /**
   * Indicates the gmail results could not be fetched due to bad token.
   */
  badGmailToken?: boolean | undefined;
  /**
   * Indicates the outlook results could not be fetched due to bad token.
   */
  badOutlookToken?: boolean | undefined;
  /**
   * Indicates results could not be fetched due to invalid operators in the query.
   */
  invalidOperators?: Array<components.InvalidOperatorValueError> | undefined;
  errorMessages?: Array<components.ErrorMessage> | undefined;
};

export class GleanDataError extends Error {
  /**
   * Indicates the gmail results could not be fetched due to bad token.
   */
  badGmailToken?: boolean | undefined;
  /**
   * Indicates the outlook results could not be fetched due to bad token.
   */
  badOutlookToken?: boolean | undefined;
  /**
   * Indicates results could not be fetched due to invalid operators in the query.
   */
  invalidOperators?: Array<components.InvalidOperatorValueError> | undefined;
  errorMessages?: Array<components.ErrorMessage> | undefined;

  /** The original data that was passed to this error instance. */
  data$: GleanDataErrorData;

  constructor(err: GleanDataErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.badGmailToken != null) this.badGmailToken = err.badGmailToken;
    if (err.badOutlookToken != null) this.badOutlookToken = err.badOutlookToken;
    if (err.invalidOperators != null) {
      this.invalidOperators = err.invalidOperators;
    }
    if (err.errorMessages != null) this.errorMessages = err.errorMessages;

    this.name = "GleanDataError";
  }
}

/** @internal */
export const GleanDataError$inboundSchema: z.ZodType<
  GleanDataError,
  z.ZodTypeDef,
  unknown
> = z.object({
  badGmailToken: z.boolean().optional(),
  badOutlookToken: z.boolean().optional(),
  invalidOperators: z.array(components.InvalidOperatorValueError$inboundSchema)
    .optional(),
  errorMessages: z.array(components.ErrorMessage$inboundSchema).optional(),
})
  .transform((v) => {
    return new GleanDataError(v);
  });

/** @internal */
export type GleanDataError$Outbound = {
  badGmailToken?: boolean | undefined;
  badOutlookToken?: boolean | undefined;
  invalidOperators?:
    | Array<components.InvalidOperatorValueError$Outbound>
    | undefined;
  errorMessages?: Array<components.ErrorMessage$Outbound> | undefined;
};

/** @internal */
export const GleanDataError$outboundSchema: z.ZodType<
  GleanDataError$Outbound,
  z.ZodTypeDef,
  GleanDataError
> = z.instanceof(GleanDataError)
  .transform(v => v.data$)
  .pipe(z.object({
    badGmailToken: z.boolean().optional(),
    badOutlookToken: z.boolean().optional(),
    invalidOperators: z.array(
      components.InvalidOperatorValueError$outboundSchema,
    ).optional(),
    errorMessages: z.array(components.ErrorMessage$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GleanDataError$ {
  /** @deprecated use `GleanDataError$inboundSchema` instead. */
  export const inboundSchema = GleanDataError$inboundSchema;
  /** @deprecated use `GleanDataError$outboundSchema` instead. */
  export const outboundSchema = GleanDataError$outboundSchema;
  /** @deprecated use `GleanDataError$Outbound` instead. */
  export type Outbound = GleanDataError$Outbound;
}
