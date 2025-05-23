/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { indexingShortcutsBulkIndex } from "../funcs/indexingShortcutsBulkIndex.js";
import { indexingShortcutsUpload } from "../funcs/indexingShortcutsUpload.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class IndexingShortcuts extends ClientSDK {
  /**
   * Bulk index external shortcuts
   *
   * @remarks
   * Replaces all the currently indexed shortcuts using paginated batch API calls. Note that this endpoint is used for indexing shortcuts not hosted by Glean. If you want to upload shortcuts that would be hosted by Glean, please use the `/uploadshortcuts` endpoint. For information on what you can do with Golinks, which are Glean-hosted shortcuts, please refer to [this](https://help.glean.com/en/articles/5628838-how-go-links-work) page.
   */
  async bulkIndex(
    request: components.BulkIndexShortcutsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(indexingShortcutsBulkIndex(
      this,
      request,
      options,
    ));
  }

  /**
   * Upload shortcuts
   *
   * @remarks
   * Creates glean shortcuts for uploaded shortcuts info. Glean would host the shortcuts, and they can be managed in the knowledge tab once uploaded.
   */
  async upload(
    request: components.UploadShortcutsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(indexingShortcutsUpload(
      this,
      request,
      options,
    ));
  }
}
