/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentConfig,
  AgentConfig$inboundSchema,
  AgentConfig$Outbound,
  AgentConfig$outboundSchema,
} from "./agentconfig.js";
import {
  ChatMessage,
  ChatMessage$inboundSchema,
  ChatMessage$Outbound,
  ChatMessage$outboundSchema,
} from "./chatmessage.js";
import {
  ChatRestrictionFilters,
  ChatRestrictionFilters$inboundSchema,
  ChatRestrictionFilters$Outbound,
  ChatRestrictionFilters$outboundSchema,
} from "./chatrestrictionfilters.js";

export type ChatRequest = {
  /**
   * Save the current interaction as a Chat for the user to access and potentially continue later.
   */
  saveChat?: boolean | undefined;
  /**
   * The id of the Chat that context should be retrieved from and messages added to. An empty id starts a new Chat, and the Chat is saved if saveChat is true.
   */
  chatId?: string | undefined;
  /**
   * A list of chat messages, from most recent to least recent. It can be assumed that the first chat message in the list is the user's most recent query.
   */
  messages: Array<ChatMessage>;
  /**
   * Describes the agent that executes the request.
   */
  agentConfig?: AgentConfig | undefined;
  inclusions?: ChatRestrictionFilters | undefined;
  exclusions?: ChatRestrictionFilters | undefined;
  /**
   * Timeout in milliseconds for the request. A `408` error will be returned if handling the request takes longer.
   */
  timeoutMillis?: number | undefined;
  /**
   * The ID of the application this request originates from, used to determine the configuration of underlying chat processes. This should correspond to the ID set during admin setup. If not specified, the default chat experience will be used.
   */
  applicationId?: string | undefined;
  /**
   * If set, response lines will be streamed one-by-one as they become available. Each will be a ChatResponse, formatted as JSON, and separated by a new line. If false, the entire response will be returned at once. Note that if this is set and the model being used does not support streaming, the model's response will not be streamed, but other messages from the endpoint still will be.
   */
  stream?: boolean | undefined;
};

/** @internal */
export const ChatRequest$inboundSchema: z.ZodType<
  ChatRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  saveChat: z.boolean().optional(),
  chatId: z.string().optional(),
  messages: z.array(ChatMessage$inboundSchema),
  agentConfig: AgentConfig$inboundSchema.optional(),
  inclusions: ChatRestrictionFilters$inboundSchema.optional(),
  exclusions: ChatRestrictionFilters$inboundSchema.optional(),
  timeoutMillis: z.number().int().optional(),
  applicationId: z.string().optional(),
  stream: z.boolean().optional(),
});

/** @internal */
export type ChatRequest$Outbound = {
  saveChat?: boolean | undefined;
  chatId?: string | undefined;
  messages: Array<ChatMessage$Outbound>;
  agentConfig?: AgentConfig$Outbound | undefined;
  inclusions?: ChatRestrictionFilters$Outbound | undefined;
  exclusions?: ChatRestrictionFilters$Outbound | undefined;
  timeoutMillis?: number | undefined;
  applicationId?: string | undefined;
  stream?: boolean | undefined;
};

/** @internal */
export const ChatRequest$outboundSchema: z.ZodType<
  ChatRequest$Outbound,
  z.ZodTypeDef,
  ChatRequest
> = z.object({
  saveChat: z.boolean().optional(),
  chatId: z.string().optional(),
  messages: z.array(ChatMessage$outboundSchema),
  agentConfig: AgentConfig$outboundSchema.optional(),
  inclusions: ChatRestrictionFilters$outboundSchema.optional(),
  exclusions: ChatRestrictionFilters$outboundSchema.optional(),
  timeoutMillis: z.number().int().optional(),
  applicationId: z.string().optional(),
  stream: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatRequest$ {
  /** @deprecated use `ChatRequest$inboundSchema` instead. */
  export const inboundSchema = ChatRequest$inboundSchema;
  /** @deprecated use `ChatRequest$outboundSchema` instead. */
  export const outboundSchema = ChatRequest$outboundSchema;
  /** @deprecated use `ChatRequest$Outbound` instead. */
  export type Outbound = ChatRequest$Outbound;
}

export function chatRequestToJSON(chatRequest: ChatRequest): string {
  return JSON.stringify(ChatRequest$outboundSchema.parse(chatRequest));
}

export function chatRequestFromJSON(
  jsonString: string,
): SafeParseResult<ChatRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatRequest' from JSON`,
  );
}
