/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommentDefinition,
  CommentDefinition$inboundSchema,
  CommentDefinition$Outbound,
  CommentDefinition$outboundSchema,
} from "./commentdefinition.js";
import {
  ContentDefinition,
  ContentDefinition$inboundSchema,
  ContentDefinition$Outbound,
  ContentDefinition$outboundSchema,
} from "./contentdefinition.js";
import {
  CustomProperty,
  CustomProperty$inboundSchema,
  CustomProperty$Outbound,
  CustomProperty$outboundSchema,
} from "./customproperty.js";
import {
  DocumentInteractionsDefinition,
  DocumentInteractionsDefinition$inboundSchema,
  DocumentInteractionsDefinition$Outbound,
  DocumentInteractionsDefinition$outboundSchema,
} from "./documentinteractionsdefinition.js";
import {
  DocumentPermissionsDefinition,
  DocumentPermissionsDefinition$inboundSchema,
  DocumentPermissionsDefinition$Outbound,
  DocumentPermissionsDefinition$outboundSchema,
} from "./documentpermissionsdefinition.js";
import {
  UserReferenceDefinition,
  UserReferenceDefinition$inboundSchema,
  UserReferenceDefinition$Outbound,
  UserReferenceDefinition$outboundSchema,
} from "./userreferencedefinition.js";

/**
 * Indexable document structure
 */
export type DocumentDefinition = {
  /**
   * Document title, in plain text, if present. If not present, the title would be attempted to be extracted from the content.
   */
  title?: string | undefined;
  /**
   * Source filename, in plain text, for the document. May be used as a fallback title for the document, if the title is not provided and cannot be extracted from the content. Populate this if there is no explicit title for the document and the content is sourced from a file.
   */
  filename?: string | undefined;
  /**
   * The container name for the content (Folder for example for file content).
   */
  container?: string | undefined;
  /**
   * This represents the datasource sepcific id of the container.
   */
  containerDatasourceId?: string | undefined;
  /**
   * This represents the object type of the container. It cannot have spaces or _
   */
  containerObjectType?: string | undefined;
  datasource: string;
  /**
   * The type of the document (Case, KnowledgeArticle for Salesforce for example). It cannot have spaces or _
   */
  objectType?: string | undefined;
  /**
   * The permalink for viewing the document. **Note: viewURL is a required field for non-entity datasources, but not required if the datasource is used to push custom entities (ie. datasources where isEntityDatasource is false).**'
   *
   * @remarks
   */
  viewURL?: string | undefined;
  /**
   * The datasource specific id for the document. This field is case insensitive and should not be more than 200 characters in length.
   */
  id?: string | undefined;
  /**
   * Describes text content or base64 encoded binary content
   */
  summary?: ContentDefinition | undefined;
  /**
   * Describes text content or base64 encoded binary content
   */
  body?: ContentDefinition | undefined;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a datasource specific id.
   */
  author?: UserReferenceDefinition | undefined;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a datasource specific id.
   */
  owner?: UserReferenceDefinition | undefined;
  /**
   * describes the access control details of the document
   */
  permissions?: DocumentPermissionsDefinition | undefined;
  /**
   * The creation time, in epoch seconds.
   */
  createdAt?: number | undefined;
  /**
   * The last update time, in epoch seconds.
   */
  updatedAt?: number | undefined;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a datasource specific id.
   */
  updatedBy?: UserReferenceDefinition | undefined;
  /**
   * Labels associated with the document.
   */
  tags?: Array<string> | undefined;
  /**
   * describes the interactions on the document
   */
  interactions?: DocumentInteractionsDefinition | undefined;
  status?: string | undefined;
  /**
   * Additional variations of the URL that this document points to.
   */
  additionalUrls?: Array<string> | undefined;
  /**
   * Comments associated with the document.
   */
  comments?: Array<CommentDefinition> | undefined;
  /**
   * Additional metadata properties of the document. These can surface as [facets and operators](https://developers.glean.com/docs/facets_and_operators_for_custom_datasources/).
   */
  customProperties?: Array<CustomProperty> | undefined;
};

/** @internal */
export const DocumentDefinition$inboundSchema: z.ZodType<
  DocumentDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string().optional(),
  filename: z.string().optional(),
  container: z.string().optional(),
  containerDatasourceId: z.string().optional(),
  containerObjectType: z.string().optional(),
  datasource: z.string(),
  objectType: z.string().optional(),
  viewURL: z.string().optional(),
  id: z.string().optional(),
  summary: ContentDefinition$inboundSchema.optional(),
  body: ContentDefinition$inboundSchema.optional(),
  author: UserReferenceDefinition$inboundSchema.optional(),
  owner: UserReferenceDefinition$inboundSchema.optional(),
  permissions: DocumentPermissionsDefinition$inboundSchema.optional(),
  createdAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
  updatedBy: UserReferenceDefinition$inboundSchema.optional(),
  tags: z.array(z.string()).optional(),
  interactions: DocumentInteractionsDefinition$inboundSchema.optional(),
  status: z.string().optional(),
  additionalUrls: z.array(z.string()).optional(),
  comments: z.array(CommentDefinition$inboundSchema).optional(),
  customProperties: z.array(CustomProperty$inboundSchema).optional(),
});

/** @internal */
export type DocumentDefinition$Outbound = {
  title?: string | undefined;
  filename?: string | undefined;
  container?: string | undefined;
  containerDatasourceId?: string | undefined;
  containerObjectType?: string | undefined;
  datasource: string;
  objectType?: string | undefined;
  viewURL?: string | undefined;
  id?: string | undefined;
  summary?: ContentDefinition$Outbound | undefined;
  body?: ContentDefinition$Outbound | undefined;
  author?: UserReferenceDefinition$Outbound | undefined;
  owner?: UserReferenceDefinition$Outbound | undefined;
  permissions?: DocumentPermissionsDefinition$Outbound | undefined;
  createdAt?: number | undefined;
  updatedAt?: number | undefined;
  updatedBy?: UserReferenceDefinition$Outbound | undefined;
  tags?: Array<string> | undefined;
  interactions?: DocumentInteractionsDefinition$Outbound | undefined;
  status?: string | undefined;
  additionalUrls?: Array<string> | undefined;
  comments?: Array<CommentDefinition$Outbound> | undefined;
  customProperties?: Array<CustomProperty$Outbound> | undefined;
};

/** @internal */
export const DocumentDefinition$outboundSchema: z.ZodType<
  DocumentDefinition$Outbound,
  z.ZodTypeDef,
  DocumentDefinition
> = z.object({
  title: z.string().optional(),
  filename: z.string().optional(),
  container: z.string().optional(),
  containerDatasourceId: z.string().optional(),
  containerObjectType: z.string().optional(),
  datasource: z.string(),
  objectType: z.string().optional(),
  viewURL: z.string().optional(),
  id: z.string().optional(),
  summary: ContentDefinition$outboundSchema.optional(),
  body: ContentDefinition$outboundSchema.optional(),
  author: UserReferenceDefinition$outboundSchema.optional(),
  owner: UserReferenceDefinition$outboundSchema.optional(),
  permissions: DocumentPermissionsDefinition$outboundSchema.optional(),
  createdAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
  updatedBy: UserReferenceDefinition$outboundSchema.optional(),
  tags: z.array(z.string()).optional(),
  interactions: DocumentInteractionsDefinition$outboundSchema.optional(),
  status: z.string().optional(),
  additionalUrls: z.array(z.string()).optional(),
  comments: z.array(CommentDefinition$outboundSchema).optional(),
  customProperties: z.array(CustomProperty$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDefinition$ {
  /** @deprecated use `DocumentDefinition$inboundSchema` instead. */
  export const inboundSchema = DocumentDefinition$inboundSchema;
  /** @deprecated use `DocumentDefinition$outboundSchema` instead. */
  export const outboundSchema = DocumentDefinition$outboundSchema;
  /** @deprecated use `DocumentDefinition$Outbound` instead. */
  export type Outbound = DocumentDefinition$Outbound;
}

export function documentDefinitionToJSON(
  documentDefinition: DocumentDefinition,
): string {
  return JSON.stringify(
    DocumentDefinition$outboundSchema.parse(documentDefinition),
  );
}

export function documentDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<DocumentDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentDefinition' from JSON`,
  );
}
