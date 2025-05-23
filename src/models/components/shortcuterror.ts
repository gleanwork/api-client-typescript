/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ShortcutErrorErrorType = {
  NoPermission: "NO_PERMISSION",
  InvalidId: "INVALID_ID",
  ExistingShortcut: "EXISTING_SHORTCUT",
  InvalidChars: "INVALID_CHARS",
} as const;
export type ShortcutErrorErrorType = ClosedEnum<typeof ShortcutErrorErrorType>;

export type ShortcutError = {
  errorType?: ShortcutErrorErrorType | undefined;
};

/** @internal */
export const ShortcutErrorErrorType$inboundSchema: z.ZodNativeEnum<
  typeof ShortcutErrorErrorType
> = z.nativeEnum(ShortcutErrorErrorType);

/** @internal */
export const ShortcutErrorErrorType$outboundSchema: z.ZodNativeEnum<
  typeof ShortcutErrorErrorType
> = ShortcutErrorErrorType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShortcutErrorErrorType$ {
  /** @deprecated use `ShortcutErrorErrorType$inboundSchema` instead. */
  export const inboundSchema = ShortcutErrorErrorType$inboundSchema;
  /** @deprecated use `ShortcutErrorErrorType$outboundSchema` instead. */
  export const outboundSchema = ShortcutErrorErrorType$outboundSchema;
}

/** @internal */
export const ShortcutError$inboundSchema: z.ZodType<
  ShortcutError,
  z.ZodTypeDef,
  unknown
> = z.object({
  errorType: ShortcutErrorErrorType$inboundSchema.optional(),
});

/** @internal */
export type ShortcutError$Outbound = {
  errorType?: string | undefined;
};

/** @internal */
export const ShortcutError$outboundSchema: z.ZodType<
  ShortcutError$Outbound,
  z.ZodTypeDef,
  ShortcutError
> = z.object({
  errorType: ShortcutErrorErrorType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShortcutError$ {
  /** @deprecated use `ShortcutError$inboundSchema` instead. */
  export const inboundSchema = ShortcutError$inboundSchema;
  /** @deprecated use `ShortcutError$outboundSchema` instead. */
  export const outboundSchema = ShortcutError$outboundSchema;
  /** @deprecated use `ShortcutError$Outbound` instead. */
  export type Outbound = ShortcutError$Outbound;
}

export function shortcutErrorToJSON(shortcutError: ShortcutError): string {
  return JSON.stringify(ShortcutError$outboundSchema.parse(shortcutError));
}

export function shortcutErrorFromJSON(
  jsonString: string,
): SafeParseResult<ShortcutError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShortcutError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShortcutError' from JSON`,
  );
}
