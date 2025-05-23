/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A follow-up action that can be invoked by the user after a response. The action parameters are not included and need to be predicted/filled separately.
 */
export type FollowupAction = {
  /**
   * Unique identifier for this actionRun recommendation event.
   */
  actionRunId?: string | undefined;
  /**
   * The ID of the action instance that will be invoked.
   */
  actionInstanceId?: string | undefined;
  /**
   * The ID of the associated action.
   */
  actionId?: string | undefined;
  /**
   * Text to be displayed to the user when recommending the action instance.
   */
  recommendationText?: string | undefined;
  /**
   * The label to be used when displaying a button to execute this action instance.
   */
  actionLabel?: string | undefined;
  /**
   * Whether user confirmation is needed before executing this action instance.
   */
  userConfirmationRequired?: boolean | undefined;
};

/** @internal */
export const FollowupAction$inboundSchema: z.ZodType<
  FollowupAction,
  z.ZodTypeDef,
  unknown
> = z.object({
  actionRunId: z.string().optional(),
  actionInstanceId: z.string().optional(),
  actionId: z.string().optional(),
  recommendationText: z.string().optional(),
  actionLabel: z.string().optional(),
  userConfirmationRequired: z.boolean().optional(),
});

/** @internal */
export type FollowupAction$Outbound = {
  actionRunId?: string | undefined;
  actionInstanceId?: string | undefined;
  actionId?: string | undefined;
  recommendationText?: string | undefined;
  actionLabel?: string | undefined;
  userConfirmationRequired?: boolean | undefined;
};

/** @internal */
export const FollowupAction$outboundSchema: z.ZodType<
  FollowupAction$Outbound,
  z.ZodTypeDef,
  FollowupAction
> = z.object({
  actionRunId: z.string().optional(),
  actionInstanceId: z.string().optional(),
  actionId: z.string().optional(),
  recommendationText: z.string().optional(),
  actionLabel: z.string().optional(),
  userConfirmationRequired: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FollowupAction$ {
  /** @deprecated use `FollowupAction$inboundSchema` instead. */
  export const inboundSchema = FollowupAction$inboundSchema;
  /** @deprecated use `FollowupAction$outboundSchema` instead. */
  export const outboundSchema = FollowupAction$outboundSchema;
  /** @deprecated use `FollowupAction$Outbound` instead. */
  export type Outbound = FollowupAction$Outbound;
}

export function followupActionToJSON(followupAction: FollowupAction): string {
  return JSON.stringify(FollowupAction$outboundSchema.parse(followupAction));
}

export function followupActionFromJSON(
  jsonString: string,
): SafeParseResult<FollowupAction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FollowupAction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FollowupAction' from JSON`,
  );
}
