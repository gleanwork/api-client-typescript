/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { clientActivityReport } from "../funcs/clientActivityReport.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ClientActivityReportMutationVariables = {
  request: components.Activity;
  options?: RequestOptions;
};

export type ClientActivityReportMutationData = void;

/**
 * Report document activity
 *
 * @remarks
 * Report user activity that occurs on indexed documents such as viewing or editing. This signal improves search quality.
 */
export function useClientActivityReportMutation(
  options?: MutationHookOptions<
    ClientActivityReportMutationData,
    Error,
    ClientActivityReportMutationVariables
  >,
): UseMutationResult<
  ClientActivityReportMutationData,
  Error,
  ClientActivityReportMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildClientActivityReportMutation(client, options),
    ...options,
  });
}

export function mutationKeyClientActivityReport(): MutationKey {
  return ["@gleanwork/api-client", "activity", "report"];
}

export function buildClientActivityReportMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ClientActivityReportMutationVariables,
  ) => Promise<ClientActivityReportMutationData>;
} {
  return {
    mutationKey: mutationKeyClientActivityReport(),
    mutationFn: function clientActivityReportMutationFn({
      request,
      options,
    }): Promise<ClientActivityReportMutationData> {
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
      return unwrapAsync(clientActivityReport(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
