/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { clientAnnouncementsUpdate } from "../funcs/clientAnnouncementsUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ClientAnnouncementsUpdateMutationVariables = {
  request: components.UpdateAnnouncementRequest;
  options?: RequestOptions;
};

export type ClientAnnouncementsUpdateMutationData = components.Announcement;

/**
 * Update Announcement
 *
 * @remarks
 * Update a textual announcement visible to some set of users based on department and location.
 */
export function useClientAnnouncementsUpdateMutation(
  options?: MutationHookOptions<
    ClientAnnouncementsUpdateMutationData,
    Error,
    ClientAnnouncementsUpdateMutationVariables
  >,
): UseMutationResult<
  ClientAnnouncementsUpdateMutationData,
  Error,
  ClientAnnouncementsUpdateMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildClientAnnouncementsUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyClientAnnouncementsUpdate(): MutationKey {
  return ["@gleanwork/api-client", "announcements", "update"];
}

export function buildClientAnnouncementsUpdateMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ClientAnnouncementsUpdateMutationVariables,
  ) => Promise<ClientAnnouncementsUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyClientAnnouncementsUpdate(),
    mutationFn: function clientAnnouncementsUpdateMutationFn({
      request,
      options,
    }): Promise<ClientAnnouncementsUpdateMutationData> {
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
      return unwrapAsync(clientAnnouncementsUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
