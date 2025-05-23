/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserRoleSpecification,
  UserRoleSpecification$inboundSchema,
  UserRoleSpecification$Outbound,
  UserRoleSpecification$outboundSchema,
} from "./userrolespecification.js";

export type UpdateShortcutRequest = {
  /**
   * The opaque id of the user generated content.
   */
  id: number;
  /**
   * Link text following go/ prefix as entered by the user.
   */
  inputAlias?: string | undefined;
  /**
   * Destination URL for the shortcut.
   */
  destinationUrl?: string | undefined;
  /**
   * Glean Document ID for the URL, if known.
   */
  destinationDocumentId?: string | undefined;
  /**
   * A short, plain text blurb to help people understand the intent of the shortcut.
   */
  description?: string | undefined;
  /**
   * Whether this shortcut is unlisted or not. Unlisted shortcuts are visible to author + admins only.
   */
  unlisted?: boolean | undefined;
  /**
   * For variable shortcuts, contains the URL template; note, `destinationUrl` contains default URL.
   */
  urlTemplate?: string | undefined;
  /**
   * A list of user roles added for the Shortcut.
   */
  addedRoles?: Array<UserRoleSpecification> | undefined;
  /**
   * A list of user roles removed for the Shortcut.
   */
  removedRoles?: Array<UserRoleSpecification> | undefined;
};

/** @internal */
export const UpdateShortcutRequest$inboundSchema: z.ZodType<
  UpdateShortcutRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  inputAlias: z.string().optional(),
  destinationUrl: z.string().optional(),
  destinationDocumentId: z.string().optional(),
  description: z.string().optional(),
  unlisted: z.boolean().optional(),
  urlTemplate: z.string().optional(),
  addedRoles: z.array(UserRoleSpecification$inboundSchema).optional(),
  removedRoles: z.array(UserRoleSpecification$inboundSchema).optional(),
});

/** @internal */
export type UpdateShortcutRequest$Outbound = {
  id: number;
  inputAlias?: string | undefined;
  destinationUrl?: string | undefined;
  destinationDocumentId?: string | undefined;
  description?: string | undefined;
  unlisted?: boolean | undefined;
  urlTemplate?: string | undefined;
  addedRoles?: Array<UserRoleSpecification$Outbound> | undefined;
  removedRoles?: Array<UserRoleSpecification$Outbound> | undefined;
};

/** @internal */
export const UpdateShortcutRequest$outboundSchema: z.ZodType<
  UpdateShortcutRequest$Outbound,
  z.ZodTypeDef,
  UpdateShortcutRequest
> = z.object({
  id: z.number().int(),
  inputAlias: z.string().optional(),
  destinationUrl: z.string().optional(),
  destinationDocumentId: z.string().optional(),
  description: z.string().optional(),
  unlisted: z.boolean().optional(),
  urlTemplate: z.string().optional(),
  addedRoles: z.array(UserRoleSpecification$outboundSchema).optional(),
  removedRoles: z.array(UserRoleSpecification$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateShortcutRequest$ {
  /** @deprecated use `UpdateShortcutRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateShortcutRequest$inboundSchema;
  /** @deprecated use `UpdateShortcutRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateShortcutRequest$outboundSchema;
  /** @deprecated use `UpdateShortcutRequest$Outbound` instead. */
  export type Outbound = UpdateShortcutRequest$Outbound;
}

export function updateShortcutRequestToJSON(
  updateShortcutRequest: UpdateShortcutRequest,
): string {
  return JSON.stringify(
    UpdateShortcutRequest$outboundSchema.parse(updateShortcutRequest),
  );
}

export function updateShortcutRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateShortcutRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateShortcutRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateShortcutRequest' from JSON`,
  );
}
