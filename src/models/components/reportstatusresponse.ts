/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ReportStatusResponseStatus = {
  Pending: "PENDING",
  Success: "SUCCESS",
  Failure: "FAILURE",
  Cancelled: "CANCELLED",
  Cancelling: "CANCELLING",
  Active: "ACTIVE",
} as const;
export type ReportStatusResponseStatus = ClosedEnum<
  typeof ReportStatusResponseStatus
>;

export type ReportStatusResponse = {
  status?: ReportStatusResponseStatus | undefined;
  /**
   * The timestamp at which the report's run/scan began.
   */
  startTime?: string | undefined;
};

/** @internal */
export const ReportStatusResponseStatus$inboundSchema: z.ZodNativeEnum<
  typeof ReportStatusResponseStatus
> = z.nativeEnum(ReportStatusResponseStatus);

/** @internal */
export const ReportStatusResponseStatus$outboundSchema: z.ZodNativeEnum<
  typeof ReportStatusResponseStatus
> = ReportStatusResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportStatusResponseStatus$ {
  /** @deprecated use `ReportStatusResponseStatus$inboundSchema` instead. */
  export const inboundSchema = ReportStatusResponseStatus$inboundSchema;
  /** @deprecated use `ReportStatusResponseStatus$outboundSchema` instead. */
  export const outboundSchema = ReportStatusResponseStatus$outboundSchema;
}

/** @internal */
export const ReportStatusResponse$inboundSchema: z.ZodType<
  ReportStatusResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: ReportStatusResponseStatus$inboundSchema.optional(),
  startTime: z.string().optional(),
});

/** @internal */
export type ReportStatusResponse$Outbound = {
  status?: string | undefined;
  startTime?: string | undefined;
};

/** @internal */
export const ReportStatusResponse$outboundSchema: z.ZodType<
  ReportStatusResponse$Outbound,
  z.ZodTypeDef,
  ReportStatusResponse
> = z.object({
  status: ReportStatusResponseStatus$outboundSchema.optional(),
  startTime: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportStatusResponse$ {
  /** @deprecated use `ReportStatusResponse$inboundSchema` instead. */
  export const inboundSchema = ReportStatusResponse$inboundSchema;
  /** @deprecated use `ReportStatusResponse$outboundSchema` instead. */
  export const outboundSchema = ReportStatusResponse$outboundSchema;
  /** @deprecated use `ReportStatusResponse$Outbound` instead. */
  export type Outbound = ReportStatusResponse$Outbound;
}

export function reportStatusResponseToJSON(
  reportStatusResponse: ReportStatusResponse,
): string {
  return JSON.stringify(
    ReportStatusResponse$outboundSchema.parse(reportStatusResponse),
  );
}

export function reportStatusResponseFromJSON(
  jsonString: string,
): SafeParseResult<ReportStatusResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReportStatusResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReportStatusResponse' from JSON`,
  );
}
