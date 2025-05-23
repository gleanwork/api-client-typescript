/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PersonMetadata,
  PersonMetadata$inboundSchema,
  PersonMetadata$Outbound,
  PersonMetadata$outboundSchema,
} from "./personmetadata.js";
import {
  RelatedDocuments,
  RelatedDocuments$inboundSchema,
  RelatedDocuments$Outbound,
  RelatedDocuments$outboundSchema,
} from "./relateddocuments.js";

export type Person = {
  /**
   * The display name.
   */
  name: string;
  /**
   * An opaque identifier that can be used to request metadata for a Person.
   */
  obfuscatedId: string;
  /**
   * A list of documents related to this person.
   */
  relatedDocuments?: Array<RelatedDocuments> | undefined;
  metadata?: PersonMetadata | undefined;
};

/** @internal */
export const Person$inboundSchema: z.ZodType<Person, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string(),
    obfuscatedId: z.string(),
    relatedDocuments: z.array(z.lazy(() => RelatedDocuments$inboundSchema))
      .optional(),
    metadata: z.lazy(() => PersonMetadata$inboundSchema).optional(),
  });

/** @internal */
export type Person$Outbound = {
  name: string;
  obfuscatedId: string;
  relatedDocuments?: Array<RelatedDocuments$Outbound> | undefined;
  metadata?: PersonMetadata$Outbound | undefined;
};

/** @internal */
export const Person$outboundSchema: z.ZodType<
  Person$Outbound,
  z.ZodTypeDef,
  Person
> = z.object({
  name: z.string(),
  obfuscatedId: z.string(),
  relatedDocuments: z.array(z.lazy(() => RelatedDocuments$outboundSchema))
    .optional(),
  metadata: z.lazy(() => PersonMetadata$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Person$ {
  /** @deprecated use `Person$inboundSchema` instead. */
  export const inboundSchema = Person$inboundSchema;
  /** @deprecated use `Person$outboundSchema` instead. */
  export const outboundSchema = Person$outboundSchema;
  /** @deprecated use `Person$Outbound` instead. */
  export type Outbound = Person$Outbound;
}

export function personToJSON(person: Person): string {
  return JSON.stringify(Person$outboundSchema.parse(person));
}

export function personFromJSON(
  jsonString: string,
): SafeParseResult<Person, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Person$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Person' from JSON`,
  );
}
