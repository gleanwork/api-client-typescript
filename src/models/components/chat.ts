/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatMessage,
  ChatMessage$inboundSchema,
  ChatMessage$Outbound,
  ChatMessage$outboundSchema,
} from "./chatmessage.js";
import {
  IconConfig,
  IconConfig$inboundSchema,
  IconConfig$Outbound,
  IconConfig$outboundSchema,
} from "./iconconfig.js";
import {
  Person,
  Person$inboundSchema,
  Person$Outbound,
  Person$outboundSchema,
} from "./person.js";

/**
 * A historical representation of a series of chat messages a user had with Glean Assistant.
 */
export type Chat = {
  /**
   * The opaque id of the Chat.
   */
  id?: string | undefined;
  /**
   * Server Unix timestamp of the creation time (in seconds since epoch UTC).
   */
  createTime?: number | undefined;
  createdBy?: Person | undefined;
  /**
   * Server Unix timestamp of the update time (in seconds since epoch UTC).
   */
  updateTime?: number | undefined;
  /**
   * The name of the Chat.
   */
  name?: string | undefined;
  /**
   * The ID of the AI App that this Chat is associated to.
   */
  applicationId?: string | undefined;
  /**
   * The display name of the AI App that this Chat is associated to.
   */
  applicationName?: string | undefined;
  /**
   * Defines how to render an icon
   */
  icon?: IconConfig | undefined;
  /**
   * The chat messages within a Chat.
   */
  messages?: Array<ChatMessage> | undefined;
};

/** @internal */
export const Chat$inboundSchema: z.ZodType<Chat, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    createTime: z.number().int().optional(),
    createdBy: Person$inboundSchema.optional(),
    updateTime: z.number().int().optional(),
    name: z.string().optional(),
    applicationId: z.string().optional(),
    applicationName: z.string().optional(),
    icon: IconConfig$inboundSchema.optional(),
    messages: z.array(ChatMessage$inboundSchema).optional(),
  });

/** @internal */
export type Chat$Outbound = {
  id?: string | undefined;
  createTime?: number | undefined;
  createdBy?: Person$Outbound | undefined;
  updateTime?: number | undefined;
  name?: string | undefined;
  applicationId?: string | undefined;
  applicationName?: string | undefined;
  icon?: IconConfig$Outbound | undefined;
  messages?: Array<ChatMessage$Outbound> | undefined;
};

/** @internal */
export const Chat$outboundSchema: z.ZodType<Chat$Outbound, z.ZodTypeDef, Chat> =
  z.object({
    id: z.string().optional(),
    createTime: z.number().int().optional(),
    createdBy: Person$outboundSchema.optional(),
    updateTime: z.number().int().optional(),
    name: z.string().optional(),
    applicationId: z.string().optional(),
    applicationName: z.string().optional(),
    icon: IconConfig$outboundSchema.optional(),
    messages: z.array(ChatMessage$outboundSchema).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Chat$ {
  /** @deprecated use `Chat$inboundSchema` instead. */
  export const inboundSchema = Chat$inboundSchema;
  /** @deprecated use `Chat$outboundSchema` instead. */
  export const outboundSchema = Chat$outboundSchema;
  /** @deprecated use `Chat$Outbound` instead. */
  export type Outbound = Chat$Outbound;
}

export function chatToJSON(chat: Chat): string {
  return JSON.stringify(Chat$outboundSchema.parse(chat));
}

export function chatFromJSON(
  jsonString: string,
): SafeParseResult<Chat, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Chat$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Chat' from JSON`,
  );
}
