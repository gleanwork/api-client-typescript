/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DlpConfig,
  DlpConfig$inboundSchema,
  DlpConfig$Outbound,
  DlpConfig$outboundSchema,
} from "./dlpconfig.js";
import {
  DlpFrequency,
  DlpFrequency$inboundSchema,
  DlpFrequency$outboundSchema,
} from "./dlpfrequency.js";
import {
  DlpReportStatus,
  DlpReportStatus$inboundSchema,
  DlpReportStatus$outboundSchema,
} from "./dlpreportstatus.js";

export type UpdateDlpReportRequest = {
  /**
   * Detailed configuration of what documents and sensitive content will be scanned.
   */
  config?: DlpConfig | undefined;
  /**
   * Interval between scans. DAILY is deprecated.
   */
  frequency?: DlpFrequency | undefined;
  /**
   * The status of the policy/report. Only ACTIVE status will be picked for scans.
   */
  status?: DlpReportStatus | undefined;
  /**
   * The new autoHideDoc boolean the policy will be updated to if provided.
   */
  autoHideDocs?: boolean | undefined;
  /**
   * The new name of the policy if provided.
   */
  reportName?: string | undefined;
};

/** @internal */
export const UpdateDlpReportRequest$inboundSchema: z.ZodType<
  UpdateDlpReportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  config: DlpConfig$inboundSchema.optional(),
  frequency: DlpFrequency$inboundSchema.optional(),
  status: DlpReportStatus$inboundSchema.optional(),
  autoHideDocs: z.boolean().optional(),
  reportName: z.string().optional(),
});

/** @internal */
export type UpdateDlpReportRequest$Outbound = {
  config?: DlpConfig$Outbound | undefined;
  frequency?: string | undefined;
  status?: string | undefined;
  autoHideDocs?: boolean | undefined;
  reportName?: string | undefined;
};

/** @internal */
export const UpdateDlpReportRequest$outboundSchema: z.ZodType<
  UpdateDlpReportRequest$Outbound,
  z.ZodTypeDef,
  UpdateDlpReportRequest
> = z.object({
  config: DlpConfig$outboundSchema.optional(),
  frequency: DlpFrequency$outboundSchema.optional(),
  status: DlpReportStatus$outboundSchema.optional(),
  autoHideDocs: z.boolean().optional(),
  reportName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDlpReportRequest$ {
  /** @deprecated use `UpdateDlpReportRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateDlpReportRequest$inboundSchema;
  /** @deprecated use `UpdateDlpReportRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateDlpReportRequest$outboundSchema;
  /** @deprecated use `UpdateDlpReportRequest$Outbound` instead. */
  export type Outbound = UpdateDlpReportRequest$Outbound;
}

export function updateDlpReportRequestToJSON(
  updateDlpReportRequest: UpdateDlpReportRequest,
): string {
  return JSON.stringify(
    UpdateDlpReportRequest$outboundSchema.parse(updateDlpReportRequest),
  );
}

export function updateDlpReportRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDlpReportRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDlpReportRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDlpReportRequest' from JSON`,
  );
}
