/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { clientGovernanceDocumentsVisibilityoverridesCreate } from "../funcs/clientGovernanceDocumentsVisibilityoverridesCreate.js";
import { clientGovernanceDocumentsVisibilityoverridesList } from "../funcs/clientGovernanceDocumentsVisibilityoverridesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Visibilityoverrides extends ClientSDK {
  /**
   * Fetches documents visibility.
   *
   * @remarks
   * Fetches the visibility override status of the documents passed.
   */
  async list(
    docIds?: Array<string> | undefined,
    options?: RequestOptions,
  ): Promise<components.GetDocumentVisibilityOverridesResponse> {
    return unwrapAsync(clientGovernanceDocumentsVisibilityoverridesList(
      this,
      docIds,
      options,
    ));
  }

  /**
   * Hide/Un-hide docs.
   *
   * @remarks
   * Sets the visibility-override state of the documents specified, effectively hiding or un-hiding documents.
   */
  async create(
    request: components.UpdateDocumentVisibilityOverridesRequest,
    options?: RequestOptions,
  ): Promise<components.UpdateDocumentVisibilityOverridesResponse> {
    return unwrapAsync(clientGovernanceDocumentsVisibilityoverridesCreate(
      this,
      request,
      options,
    ));
  }
}
