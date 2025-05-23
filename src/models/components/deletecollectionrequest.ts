/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteCollectionRequest = {
  /**
   * The IDs of the Collections to delete.
   */
  ids: Array<number>;
  /**
   * The datasource allowed in the Collection to be deleted.
   */
  allowedDatasource?: string | undefined;
};

/** @internal */
export const DeleteCollectionRequest$inboundSchema: z.ZodType<
  DeleteCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ids: z.array(z.number().int()),
  allowedDatasource: z.string().optional(),
});

/** @internal */
export type DeleteCollectionRequest$Outbound = {
  ids: Array<number>;
  allowedDatasource?: string | undefined;
};

/** @internal */
export const DeleteCollectionRequest$outboundSchema: z.ZodType<
  DeleteCollectionRequest$Outbound,
  z.ZodTypeDef,
  DeleteCollectionRequest
> = z.object({
  ids: z.array(z.number().int()),
  allowedDatasource: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCollectionRequest$ {
  /** @deprecated use `DeleteCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteCollectionRequest$inboundSchema;
  /** @deprecated use `DeleteCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteCollectionRequest$outboundSchema;
  /** @deprecated use `DeleteCollectionRequest$Outbound` instead. */
  export type Outbound = DeleteCollectionRequest$Outbound;
}

export function deleteCollectionRequestToJSON(
  deleteCollectionRequest: DeleteCollectionRequest,
): string {
  return JSON.stringify(
    DeleteCollectionRequest$outboundSchema.parse(deleteCollectionRequest),
  );
}

export function deleteCollectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCollectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCollectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCollectionRequest' from JSON`,
  );
}
