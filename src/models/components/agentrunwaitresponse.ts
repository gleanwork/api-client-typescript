/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgentRun,
  AgentRun$inboundSchema,
  AgentRun$Outbound,
  AgentRun$outboundSchema,
} from "./agentrun.js";
import {
  Message,
  Message$inboundSchema,
  Message$Outbound,
  Message$outboundSchema,
} from "./message.js";

export type AgentRunWaitResponse = {
  run?: AgentRun | undefined;
  /**
   * The messages returned by the run.
   */
  messages?: Array<Message> | undefined;
};

/** @internal */
export const AgentRunWaitResponse$inboundSchema: z.ZodType<
  AgentRunWaitResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  run: AgentRun$inboundSchema.optional(),
  messages: z.array(Message$inboundSchema).optional(),
});

/** @internal */
export type AgentRunWaitResponse$Outbound = {
  run?: AgentRun$Outbound | undefined;
  messages?: Array<Message$Outbound> | undefined;
};

/** @internal */
export const AgentRunWaitResponse$outboundSchema: z.ZodType<
  AgentRunWaitResponse$Outbound,
  z.ZodTypeDef,
  AgentRunWaitResponse
> = z.object({
  run: AgentRun$outboundSchema.optional(),
  messages: z.array(Message$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentRunWaitResponse$ {
  /** @deprecated use `AgentRunWaitResponse$inboundSchema` instead. */
  export const inboundSchema = AgentRunWaitResponse$inboundSchema;
  /** @deprecated use `AgentRunWaitResponse$outboundSchema` instead. */
  export const outboundSchema = AgentRunWaitResponse$outboundSchema;
  /** @deprecated use `AgentRunWaitResponse$Outbound` instead. */
  export type Outbound = AgentRunWaitResponse$Outbound;
}

export function agentRunWaitResponseToJSON(
  agentRunWaitResponse: AgentRunWaitResponse,
): string {
  return JSON.stringify(
    AgentRunWaitResponse$outboundSchema.parse(agentRunWaitResponse),
  );
}

export function agentRunWaitResponseFromJSON(
  jsonString: string,
): SafeParseResult<AgentRunWaitResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgentRunWaitResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentRunWaitResponse' from JSON`,
  );
}
