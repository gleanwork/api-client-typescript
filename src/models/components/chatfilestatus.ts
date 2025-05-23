/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Current status of the file.
 */
export const ChatFileStatus = {
  Processing: "PROCESSING",
  Processed: "PROCESSED",
  Failed: "FAILED",
  Deleted: "DELETED",
} as const;
/**
 * Current status of the file.
 */
export type ChatFileStatus = ClosedEnum<typeof ChatFileStatus>;

/** @internal */
export const ChatFileStatus$inboundSchema: z.ZodNativeEnum<
  typeof ChatFileStatus
> = z.nativeEnum(ChatFileStatus);

/** @internal */
export const ChatFileStatus$outboundSchema: z.ZodNativeEnum<
  typeof ChatFileStatus
> = ChatFileStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatFileStatus$ {
  /** @deprecated use `ChatFileStatus$inboundSchema` instead. */
  export const inboundSchema = ChatFileStatus$inboundSchema;
  /** @deprecated use `ChatFileStatus$outboundSchema` instead. */
  export const outboundSchema = ChatFileStatus$outboundSchema;
}
