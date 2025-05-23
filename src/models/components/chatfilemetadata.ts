/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatFileFailureReason,
  ChatFileFailureReason$inboundSchema,
  ChatFileFailureReason$outboundSchema,
} from "./chatfilefailurereason.js";
import {
  ChatFileStatus,
  ChatFileStatus$inboundSchema,
  ChatFileStatus$outboundSchema,
} from "./chatfilestatus.js";

/**
 * Metadata of a file uploaded by a user for Chat.
 */
export type ChatFileMetadata = {
  /**
   * Current status of the file.
   */
  status?: ChatFileStatus | undefined;
  /**
   * Upload time, in epoch seconds.
   */
  uploadTime?: number | undefined;
  /**
   * Size of the processed file in bytes.
   */
  processedSize?: number | undefined;
  /**
   * Reason for failed status.
   */
  failureReason?: ChatFileFailureReason | undefined;
  /**
   * MIME type of the file.
   */
  mimeType?: string | undefined;
};

/** @internal */
export const ChatFileMetadata$inboundSchema: z.ZodType<
  ChatFileMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: ChatFileStatus$inboundSchema.optional(),
  uploadTime: z.number().int().optional(),
  processedSize: z.number().int().optional(),
  failureReason: ChatFileFailureReason$inboundSchema.optional(),
  mimeType: z.string().optional(),
});

/** @internal */
export type ChatFileMetadata$Outbound = {
  status?: string | undefined;
  uploadTime?: number | undefined;
  processedSize?: number | undefined;
  failureReason?: string | undefined;
  mimeType?: string | undefined;
};

/** @internal */
export const ChatFileMetadata$outboundSchema: z.ZodType<
  ChatFileMetadata$Outbound,
  z.ZodTypeDef,
  ChatFileMetadata
> = z.object({
  status: ChatFileStatus$outboundSchema.optional(),
  uploadTime: z.number().int().optional(),
  processedSize: z.number().int().optional(),
  failureReason: ChatFileFailureReason$outboundSchema.optional(),
  mimeType: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatFileMetadata$ {
  /** @deprecated use `ChatFileMetadata$inboundSchema` instead. */
  export const inboundSchema = ChatFileMetadata$inboundSchema;
  /** @deprecated use `ChatFileMetadata$outboundSchema` instead. */
  export const outboundSchema = ChatFileMetadata$outboundSchema;
  /** @deprecated use `ChatFileMetadata$Outbound` instead. */
  export type Outbound = ChatFileMetadata$Outbound;
}

export function chatFileMetadataToJSON(
  chatFileMetadata: ChatFileMetadata,
): string {
  return JSON.stringify(
    ChatFileMetadata$outboundSchema.parse(chatFileMetadata),
  );
}

export function chatFileMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ChatFileMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatFileMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatFileMetadata' from JSON`,
  );
}
