/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { clientGovernanceDocumentsVisibilityoverridesCreate } from "../funcs/clientGovernanceDocumentsVisibilityoverridesCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ClientGovernanceDocumentsVisibilityoverridesCreateMutationVariables =
  {
    request: components.UpdateDocumentVisibilityOverridesRequest;
    options?: RequestOptions;
  };

export type ClientGovernanceDocumentsVisibilityoverridesCreateMutationData =
  components.UpdateDocumentVisibilityOverridesResponse;

/**
 * Hide/Un-hide docs.
 *
 * @remarks
 * Sets the visibility-override state of the documents specified, effectively hiding or un-hiding documents.
 */
export function useClientGovernanceDocumentsVisibilityoverridesCreateMutation(
  options?: MutationHookOptions<
    ClientGovernanceDocumentsVisibilityoverridesCreateMutationData,
    Error,
    ClientGovernanceDocumentsVisibilityoverridesCreateMutationVariables
  >,
): UseMutationResult<
  ClientGovernanceDocumentsVisibilityoverridesCreateMutationData,
  Error,
  ClientGovernanceDocumentsVisibilityoverridesCreateMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildClientGovernanceDocumentsVisibilityoverridesCreateMutation(
      client,
      options,
    ),
    ...options,
  });
}

export function mutationKeyClientGovernanceDocumentsVisibilityoverridesCreate(): MutationKey {
  return ["@gleanwork/api-client", "visibilityoverrides", "create"];
}

export function buildClientGovernanceDocumentsVisibilityoverridesCreateMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables:
      ClientGovernanceDocumentsVisibilityoverridesCreateMutationVariables,
  ) => Promise<ClientGovernanceDocumentsVisibilityoverridesCreateMutationData>;
} {
  return {
    mutationKey:
      mutationKeyClientGovernanceDocumentsVisibilityoverridesCreate(),
    mutationFn:
      function clientGovernanceDocumentsVisibilityoverridesCreateMutationFn({
        request,
        options,
      }): Promise<
        ClientGovernanceDocumentsVisibilityoverridesCreateMutationData
      > {
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
        return unwrapAsync(clientGovernanceDocumentsVisibilityoverridesCreate(
          client$,
          request,
          mergedOptions,
        ));
      },
  };
}
