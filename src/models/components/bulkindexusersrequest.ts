/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DatasourceUserDefinition,
  DatasourceUserDefinition$inboundSchema,
  DatasourceUserDefinition$Outbound,
  DatasourceUserDefinition$outboundSchema,
} from "./datasourceuserdefinition.js";

/**
 * Describes the request body for the /bulkindexusers API call
 */
export type BulkIndexUsersRequest = {
  /**
   * Unique id that must be used for this instance of datasource users upload
   */
  uploadId: string;
  /**
   * true if this is the first page of the upload. Defaults to false
   */
  isFirstPage?: boolean | undefined;
  /**
   * true if this is the last page of the upload. Defaults to false
   */
  isLastPage?: boolean | undefined;
  /**
   * Flag to discard previous upload attempts and start from scratch. Must be specified with isFirstPage=true
   */
  forceRestartUpload?: boolean | undefined;
  /**
   * datasource of the users
   */
  datasource: string;
  /**
   * batch of users for the datasource
   */
  users: Array<DatasourceUserDefinition>;
  /**
   * True if older user data needs to be force deleted after the upload completes. Defaults to older data being deleted only if the percentage of data being deleted is less than a reasonable threshold. This must only be set when `isLastPage = true`
   */
  disableStaleDataDeletionCheck?: boolean | undefined;
};

/** @internal */
export const BulkIndexUsersRequest$inboundSchema: z.ZodType<
  BulkIndexUsersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uploadId: z.string(),
  isFirstPage: z.boolean().optional(),
  isLastPage: z.boolean().optional(),
  forceRestartUpload: z.boolean().optional(),
  datasource: z.string(),
  users: z.array(DatasourceUserDefinition$inboundSchema),
  disableStaleDataDeletionCheck: z.boolean().optional(),
});

/** @internal */
export type BulkIndexUsersRequest$Outbound = {
  uploadId: string;
  isFirstPage?: boolean | undefined;
  isLastPage?: boolean | undefined;
  forceRestartUpload?: boolean | undefined;
  datasource: string;
  users: Array<DatasourceUserDefinition$Outbound>;
  disableStaleDataDeletionCheck?: boolean | undefined;
};

/** @internal */
export const BulkIndexUsersRequest$outboundSchema: z.ZodType<
  BulkIndexUsersRequest$Outbound,
  z.ZodTypeDef,
  BulkIndexUsersRequest
> = z.object({
  uploadId: z.string(),
  isFirstPage: z.boolean().optional(),
  isLastPage: z.boolean().optional(),
  forceRestartUpload: z.boolean().optional(),
  datasource: z.string(),
  users: z.array(DatasourceUserDefinition$outboundSchema),
  disableStaleDataDeletionCheck: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkIndexUsersRequest$ {
  /** @deprecated use `BulkIndexUsersRequest$inboundSchema` instead. */
  export const inboundSchema = BulkIndexUsersRequest$inboundSchema;
  /** @deprecated use `BulkIndexUsersRequest$outboundSchema` instead. */
  export const outboundSchema = BulkIndexUsersRequest$outboundSchema;
  /** @deprecated use `BulkIndexUsersRequest$Outbound` instead. */
  export type Outbound = BulkIndexUsersRequest$Outbound;
}

export function bulkIndexUsersRequestToJSON(
  bulkIndexUsersRequest: BulkIndexUsersRequest,
): string {
  return JSON.stringify(
    BulkIndexUsersRequest$outboundSchema.parse(bulkIndexUsersRequest),
  );
}

export function bulkIndexUsersRequestFromJSON(
  jsonString: string,
): SafeParseResult<BulkIndexUsersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkIndexUsersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkIndexUsersRequest' from JSON`,
  );
}
