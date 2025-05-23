/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { indexingDocumentsDebug } from "../funcs/indexingDocumentsDebug.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IndexingDocumentsDebugMutationVariables = {
  debugDocumentRequest: components.DebugDocumentRequest;
  datasource: string;
  options?: RequestOptions;
};

export type IndexingDocumentsDebugMutationData =
  components.DebugDocumentResponse;

/**
 * Beta: Get document information
 *
 * @remarks
 * Gives various information that would help in debugging related to a particular document. Currently in beta, might undergo breaking changes without prior notice.
 *
 * Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/docs/indexing_api/indexing_api_troubleshooting/) for more information.
 */
export function useIndexingDocumentsDebugMutation(
  options?: MutationHookOptions<
    IndexingDocumentsDebugMutationData,
    Error,
    IndexingDocumentsDebugMutationVariables
  >,
): UseMutationResult<
  IndexingDocumentsDebugMutationData,
  Error,
  IndexingDocumentsDebugMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildIndexingDocumentsDebugMutation(client, options),
    ...options,
  });
}

export function mutationKeyIndexingDocumentsDebug(): MutationKey {
  return ["@gleanwork/api-client", "documents", "debug"];
}

export function buildIndexingDocumentsDebugMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IndexingDocumentsDebugMutationVariables,
  ) => Promise<IndexingDocumentsDebugMutationData>;
} {
  return {
    mutationKey: mutationKeyIndexingDocumentsDebug(),
    mutationFn: function indexingDocumentsDebugMutationFn({
      debugDocumentRequest,
      datasource,
      options,
    }): Promise<IndexingDocumentsDebugMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(indexingDocumentsDebug(
        client$,
        debugDocumentRequest,
        datasource,
        mergedOptions,
      ));
    },
  };
}
