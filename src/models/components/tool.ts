/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolParameter,
  ToolParameter$inboundSchema,
  ToolParameter$Outbound,
  ToolParameter$outboundSchema,
} from "./toolparameter.js";

/**
 * Type of tool (READ, WRITE)
 */
export const ToolType = {
  Read: "READ",
  Write: "WRITE",
} as const;
/**
 * Type of tool (READ, WRITE)
 */
export type ToolType = ClosedEnum<typeof ToolType>;

export type Tool = {
  /**
   * Type of tool (READ, WRITE)
   */
  type?: ToolType | undefined;
  /**
   * Unique identifier for the tool
   */
  name?: string | undefined;
  /**
   * Human-readable name
   */
  displayName?: string | undefined;
  /**
   * LLM friendly description of the tool
   */
  description?: string | undefined;
  /**
   * The parameters for the tool. Each key is the name of the parameter and the value is the parameter object.
   */
  parameters?: { [k: string]: ToolParameter } | undefined;
};

/** @internal */
export const ToolType$inboundSchema: z.ZodNativeEnum<typeof ToolType> = z
  .nativeEnum(ToolType);

/** @internal */
export const ToolType$outboundSchema: z.ZodNativeEnum<typeof ToolType> =
  ToolType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolType$ {
  /** @deprecated use `ToolType$inboundSchema` instead. */
  export const inboundSchema = ToolType$inboundSchema;
  /** @deprecated use `ToolType$outboundSchema` instead. */
  export const outboundSchema = ToolType$outboundSchema;
}

/** @internal */
export const Tool$inboundSchema: z.ZodType<Tool, z.ZodTypeDef, unknown> = z
  .object({
    type: ToolType$inboundSchema.optional(),
    name: z.string().optional(),
    displayName: z.string().optional(),
    description: z.string().optional(),
    parameters: z.record(ToolParameter$inboundSchema).optional(),
  });

/** @internal */
export type Tool$Outbound = {
  type?: string | undefined;
  name?: string | undefined;
  displayName?: string | undefined;
  description?: string | undefined;
  parameters?: { [k: string]: ToolParameter$Outbound } | undefined;
};

/** @internal */
export const Tool$outboundSchema: z.ZodType<Tool$Outbound, z.ZodTypeDef, Tool> =
  z.object({
    type: ToolType$outboundSchema.optional(),
    name: z.string().optional(),
    displayName: z.string().optional(),
    description: z.string().optional(),
    parameters: z.record(ToolParameter$outboundSchema).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tool$ {
  /** @deprecated use `Tool$inboundSchema` instead. */
  export const inboundSchema = Tool$inboundSchema;
  /** @deprecated use `Tool$outboundSchema` instead. */
  export const outboundSchema = Tool$outboundSchema;
  /** @deprecated use `Tool$Outbound` instead. */
  export type Outbound = Tool$Outbound;
}

export function toolToJSON(tool: Tool): string {
  return JSON.stringify(Tool$outboundSchema.parse(tool));
}

export function toolFromJSON(
  jsonString: string,
): SafeParseResult<Tool, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Tool$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Tool' from JSON`,
  );
}
